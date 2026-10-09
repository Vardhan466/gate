/**
 * COC Learn & Test — Google Drive MCQ Import Parser
 * ===================================================
 * Parses MCQ content from Google Drive files into structured
 * Firestore-ready JSON. Supports multiple file formats.
 *
 * Supported source formats:
 *   FORMAT A: Numbered Q&A blocks (most common)
 *   FORMAT B: CSV/TSV spreadsheet rows
 *   FORMAT C: Structured YAML-like blocks
 *   FORMAT D: Google Docs exported plain text
 *
 * Usage (browser admin panel):
 *   const parser = new DriveImportParser();
 *   const result = await parser.importFromDriveLink(driveLink, accessToken);
 *
 * Usage (Node.js / Cloud Function):
 *   const parser = new DriveImportParser({ serviceAccount: credentials });
 *   const result = await parser.importFromFolderId(folderId);
 */

// ═══════════════════════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════════════════════

const IMPORT_CONFIG = {
  QUESTIONS_PER_TEST: 40,
  TESTS_PER_TOPIC: 25,
  EXPECTED_OPTIONS: 4,
  MIN_QUESTION_LENGTH: 10,
  MAX_QUESTION_LENGTH: 2000,
  VALID_ANSWER_LETTERS: ['A', 'B', 'C', 'D'],
  DUPLICATE_SIMILARITY_THRESHOLD: 0.85, // 85% text similarity = duplicate
};

// Known topic name mappings (handles variations in file naming)
const TOPIC_NAME_MAP = {
  'quant': 'Quantitative Aptitude',
  'quantitative': 'Quantitative Aptitude',
  'qa': 'Quantitative Aptitude',
  'verbal': 'Verbal Ability & English',
  'english': 'Verbal Ability & English',
  'va': 'Verbal Ability & English',
  'logical': 'Logical Reasoning',
  'reasoning': 'Logical Reasoning',
  'lr': 'Logical Reasoning',
  'di': 'Data Interpretation',
  'data interpretation': 'Data Interpretation',
  'gk': 'General Knowledge & Current Affairs',
  'general knowledge': 'General Knowledge & Current Affairs',
  'current affairs': 'General Knowledge & Current Affairs',
  'cs': 'Computer Science Fundamentals',
  'computer science': 'Computer Science Fundamentals',
  'dsa': 'Data Structures & Algorithms',
  'data structures': 'Data Structures & Algorithms',
  'oop': 'Object-Oriented Programming',
  'oops': 'Object-Oriented Programming',
  'dbms': 'Database Management Systems',
  'database': 'Database Management Systems',
  'os': 'Operating Systems',
  'operating systems': 'Operating Systems',
  'cn': 'Computer Networks',
  'networks': 'Computer Networks',
  'se': 'Software Engineering',
  'software engineering': 'Software Engineering',
  'em': 'Engineering Mathematics',
  'engineering maths': 'Engineering Mathematics',
  'de': 'Digital Electronics & Logic Design',
  'digital electronics': 'Digital Electronics & Logic Design',
  'ss': 'Signals & Systems',
  'signals': 'Signals & Systems',
  'control': 'Control Systems',
  'control systems': 'Control Systems',
  'analog': 'Analog Electronics',
  'emt': 'Electromagnetic Theory',
  'power': 'Power Systems',
  'power systems': 'Power Systems',
  'machines': 'Electrical Machines',
  'electrical machines': 'Electrical Machines',
  'circuits': 'Circuit Theory & Networks',
  'circuit theory': 'Circuit Theory & Networks',
  'microprocessors': 'Microprocessors & Microcontrollers',
  'vlsi': 'VLSI Design',
  'embedded': 'Embedded Systems',
  'communications': 'Communication Systems',
  'thermo': 'Thermodynamics',
  'thermodynamics': 'Thermodynamics',
  'fluid': 'Fluid Mechanics',
  'som': 'Strength of Materials',
  'strength of materials': 'Strength of Materials',
  'tom': 'Theory of Machines',
  'manufacturing': 'Manufacturing Technology',
  'heat transfer': 'Heat Transfer',
  'machine design': 'Machine Design',
  'industrial': 'Industrial Engineering',
  'automobile': 'Automobile Engineering',
  'probability': 'Probability & Statistics',
  'statistics': 'Probability & Statistics',
  'linear algebra': 'Linear Algebra',
  'diff eq': 'Differential Equations',
  'differential equations': 'Differential Equations',
  'numerical': 'Numerical Methods',
  'discrete': 'Discrete Mathematics',
  'python': 'Python Programming',
  'c programming': 'C & C++ Programming',
  'c++': 'C & C++ Programming',
  'java': 'Java Programming',
  'web': 'Web Technologies (HTML/CSS/JS)',
  'ai': 'Artificial Intelligence & ML',
  'ml': 'Artificial Intelligence & ML',
  'artificial intelligence': 'Artificial Intelligence & ML',
  'cybersecurity': 'Cybersecurity Fundamentals',
  'security': 'Cybersecurity Fundamentals',
  'cloud': 'Cloud Computing',
  'cloud computing': 'Cloud Computing',
  'gate aptitude': 'General Aptitude (GATE)',
  'environment': 'Environmental Science',
  'ethics': 'Engineering Ethics & Aptitude',
};

// ═══════════════════════════════════════════════════════════════
//  IMPORT REPORT CLASS
// ═══════════════════════════════════════════════════════════════

class ImportReport {
  constructor() {
    this.startedAt = new Date().toISOString();
    this.completedAt = null;
    this.filesProcessed = 0;
    this.topicsDetected = 0;
    this.topicsImported = 0;
    this.questionsExtracted = 0;
    this.questionsImported = 0;
    this.questionsInvalid = 0;
    this.duplicatesRemoved = 0;
    this.testsGenerated = 0;
    this.errors = [];
    this.warnings = [];
    this.topicSummaries = [];
    this.validationIssues = [];
  }

  addError(file, message, questionNum = null) {
    this.errors.push({ file, message, questionNum, timestamp: new Date().toISOString() });
  }

  addWarning(file, message, questionNum = null) {
    this.warnings.push({ file, message, questionNum });
  }

  addTopicSummary(topicName, fileName, total, valid, duplicates, invalid) {
    this.topicSummaries.push({ topicName, fileName, total, valid, duplicates, invalid });
  }

  finalize() {
    this.completedAt = new Date().toISOString();
    return this;
  }

  print() {
    console.log('\n' + '═'.repeat(60));
    console.log('  COC LEARN & TEST — IMPORT REPORT');
    console.log('═'.repeat(60));
    console.log(`  Files Processed:      ${this.filesProcessed}`);
    console.log(`  Topics Detected:      ${this.topicsDetected}`);
    console.log(`  Topics Imported:      ${this.topicsImported}`);
    console.log(`  Questions Extracted:  ${this.questionsExtracted}`);
    console.log(`  Questions Imported:   ${this.questionsImported}`);
    console.log(`  Duplicates Removed:   ${this.duplicatesRemoved}`);
    console.log(`  Invalid Questions:    ${this.questionsInvalid}`);
    console.log(`  Tests Generated:      ${this.testsGenerated}`);
    console.log('─'.repeat(60));
    if (this.errors.length > 0) {
      console.log(`  ❌ Errors (${this.errors.length}):`);
      this.errors.forEach(e => console.log(`     • [${e.file}] Q${e.questionNum || '?'}: ${e.message}`));
    }
    if (this.warnings.length > 0) {
      console.log(`  ⚠️  Warnings (${this.warnings.length}):`);
      this.warnings.slice(0, 10).forEach(w => console.log(`     • [${w.file}] ${w.message}`));
      if (this.warnings.length > 10) console.log(`     ... and ${this.warnings.length - 10} more`);
    }
    console.log('─'.repeat(60));
    console.log('  TOPIC BREAKDOWN:');
    this.topicSummaries.forEach(t => {
      const bar = '█'.repeat(Math.round(t.valid / t.total * 20)) + '░'.repeat(20 - Math.round(t.valid / t.total * 20));
      console.log(`  ${t.topicName.padEnd(35)} ${bar} ${t.valid}/${t.total}`);
      if (t.duplicates > 0) console.log(`    └─ ${t.duplicates} duplicates removed`);
      if (t.invalid > 0)    console.log(`    └─ ${t.invalid} invalid questions flagged`);
    });
    console.log('═'.repeat(60) + '\n');
  }
}

// ═══════════════════════════════════════════════════════════════
//  QUESTION VALIDATOR
// ═══════════════════════════════════════════════════════════════

class QuestionValidator {

  static validate(q, topicName, questionNum) {
    const issues = [];

    // Required fields
    if (!q.questionText || q.questionText.trim().length < IMPORT_CONFIG.MIN_QUESTION_LENGTH) {
      issues.push({ severity: 'error', field: 'questionText', msg: 'Question text too short or missing' });
    }
    if (q.questionText && q.questionText.length > IMPORT_CONFIG.MAX_QUESTION_LENGTH) {
      issues.push({ severity: 'warning', field: 'questionText', msg: 'Question text unusually long' });
    }

    // Options validation
    const optFields = ['optionA', 'optionB', 'optionC', 'optionD'];
    optFields.forEach((f, i) => {
      if (!q[f] || q[f].trim().length === 0) {
        issues.push({ severity: 'error', field: f, msg: `Option ${String.fromCharCode(65+i)} is missing` });
      }
    });

    // Check for duplicate options
    const opts = [q.optionA, q.optionB, q.optionC, q.optionD].filter(Boolean).map(o => o.trim().toLowerCase());
    const uniqueOpts = new Set(opts);
    if (uniqueOpts.size < opts.length) {
      issues.push({ severity: 'warning', field: 'options', msg: 'Duplicate option values detected' });
    }

    // Correct answer validation
    if (!q.correctAnswer) {
      issues.push({ severity: 'error', field: 'correctAnswer', msg: 'No correct answer specified' });
    } else if (!IMPORT_CONFIG.VALID_ANSWER_LETTERS.includes(q.correctAnswer.toUpperCase())) {
      issues.push({ severity: 'error', field: 'correctAnswer', msg: `Invalid answer "${q.correctAnswer}" — must be A, B, C, or D` });
    }

    // Topic mapping
    if (!topicName) {
      issues.push({ severity: 'error', field: 'topicId', msg: 'Could not determine topic for this question' });
    }

    return {
      isValid: !issues.some(i => i.severity === 'error'),
      issues,
    };
  }

  /**
   * Simple text similarity (Jaccard on word sets) to detect duplicates
   */
  static similarity(a, b) {
    const wordsA = new Set(a.toLowerCase().split(/\W+/).filter(w => w.length > 3));
    const wordsB = new Set(b.toLowerCase().split(/\W+/).filter(w => w.length > 3));
    const intersection = [...wordsA].filter(w => wordsB.has(w)).length;
    const union = new Set([...wordsA, ...wordsB]).size;
    return union === 0 ? 0 : intersection / union;
  }

  static isDuplicate(newQ, existingQuestions) {
    for (const existing of existingQuestions) {
      if (QuestionValidator.similarity(newQ.questionText, existing.questionText) >= IMPORT_CONFIG.DUPLICATE_SIMILARITY_THRESHOLD) {
        return { isDuplicate: true, matchedId: existing.id };
      }
    }
    return { isDuplicate: false };
  }
}

// ═══════════════════════════════════════════════════════════════
//  FORMAT PARSERS
// ═══════════════════════════════════════════════════════════════

class FormatParser {

  /**
   * FORMAT A — Numbered Q&A blocks (most common from Word/PDF/Docs export)
   *
   * Expected pattern:
   *   1. Question text here?
   *   A) Option A text
   *   B) Option B text
   *   C) Option C text
   *   D) Option D text
   *   Answer: A
   *   Explanation: Why A is correct.
   *   ---
   *
   * Variants handled:
   *   - "1." or "Q1." or "Q.1" or "Question 1:"
   *   - "A)" or "A." or "(A)" or "a)"
   *   - "Answer: A" or "Ans: A" or "Correct: A" or "Key: A"
   *   - Separator: "---" or "***" or blank lines or numbered restart
   */
  static parseFormatA(text) {
    const questions = [];
    // Split into blocks by separator lines or by next numbered question
    const blocks = text.split(/\n(?=\s*(?:Q\.?\s*\d+|\d+[\.\)])\s+)/i);

    for (const block of blocks) {
      if (!block.trim()) continue;
      const q = FormatParser._parseBlock(block.trim());
      if (q) questions.push(q);
    }

    // Fallback: try paragraph-based splitting if above yields nothing
    if (questions.length === 0) {
      const altBlocks = text.split(/[-─═]{3,}/);
      for (const block of altBlocks) {
        if (!block.trim()) continue;
        const q = FormatParser._parseBlock(block.trim());
        if (q) questions.push(q);
      }
    }

    return questions;
  }

  static _parseBlock(block) {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l);
    if (lines.length < 4) return null;

    let questionText = '';
    let optionA = '', optionB = '', optionC = '', optionD = '';
    let correctAnswer = '';
    let explanation = '';
    let questionNumber = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Question number + text
      const qMatch = line.match(/^(?:Q\.?\s*)?(\d+)[\.\):]\s*(.*)/i);
      if (qMatch && !questionText && i < 3) {
        questionNumber = parseInt(qMatch[1]);
        questionText = qMatch[2];
        // Multi-line question text — gather until first option
        while (i + 1 < lines.length && !FormatParser._isOptionLine(lines[i+1]) && !FormatParser._isAnswerLine(lines[i+1])) {
          i++;
          questionText += ' ' + lines[i];
        }
        continue;
      }

      // Options — many variant patterns
      const optMatch = line.match(/^[\(\[]?([A-Da-d])[\)\]\.:\s]+(.+)/);
      if (optMatch) {
        const letter = optMatch[1].toUpperCase();
        const optText = optMatch[2].trim();
        if (letter === 'A') optionA = optText;
        else if (letter === 'B') optionB = optText;
        else if (letter === 'C') optionC = optText;
        else if (letter === 'D') optionD = optText;
        continue;
      }

      // Answer line
      const ansMatch = line.match(/^(?:Answer|Ans|Correct Answer|Key|Correct)[\s:\.]+([A-Da-d])/i);
      if (ansMatch) {
        correctAnswer = ansMatch[1].toUpperCase();
        continue;
      }

      // Explanation line
      const expMatch = line.match(/^(?:Explanation|Exp|Solution|Reason)[\s:\.]+(.+)/i);
      if (expMatch) {
        explanation = expMatch[1];
        // Multi-line explanation
        while (i + 1 < lines.length && !FormatParser._isAnswerLine(lines[i+1]) && !FormatParser._isOptionLine(lines[i+1])) {
          i++;
          explanation += ' ' + lines[i];
        }
        continue;
      }

      // If question text hasn't been captured yet (no number prefix)
      if (!questionText && !FormatParser._isOptionLine(line) && !FormatParser._isAnswerLine(line)) {
        questionText = line;
      }
    }

    if (!questionText || !optionA || !optionB || !correctAnswer) return null;

    return {
      questionNumber,
      questionText: questionText.trim(),
      optionA: optionA.trim(),
      optionB: optionB.trim(),
      optionC: optionC.trim() || 'Option C',
      optionD: optionD.trim() || 'Option D',
      correctAnswer: correctAnswer.toUpperCase(),
      explanation: explanation.trim() || '',
    };
  }

  static _isOptionLine(line) {
    return /^[\(\[]?[A-Da-d][\)\]\.:\s]+.{2,}/.test(line);
  }

  static _isAnswerLine(line) {
    return /^(?:Answer|Ans|Correct|Key)[\s:]/i.test(line);
  }

  /**
   * FORMAT B — CSV/TSV
   * Columns: QuestionNum, Question, OptionA, OptionB, OptionC, OptionD, Answer, Explanation
   * Also handles: Question, A, B, C, D, Answer, Explanation (no num col)
   */
  static parseFormatB(text) {
    const questions = [];
    const lines = text.split('\n').filter(l => l.trim());
    if (lines.length < 2) return questions;

    // Detect delimiter
    const delimiter = lines[0].includes('\t') ? '\t' : ',';
    const headers = lines[0].split(delimiter).map(h => h.trim().toLowerCase().replace(/['"]/g, ''));

    // Map column indices
    const colMap = {};
    const headerMappings = {
      questionText: ['question', 'question text', 'q', 'questiontext'],
      optionA: ['a', 'option a', 'optiona', 'choice a', 'option_a'],
      optionB: ['b', 'option b', 'optionb', 'choice b', 'option_b'],
      optionC: ['c', 'option c', 'optionc', 'choice c', 'option_c'],
      optionD: ['d', 'option d', 'optiond', 'choice d', 'option_d'],
      correctAnswer: ['answer', 'correct', 'correct answer', 'ans', 'key'],
      explanation: ['explanation', 'exp', 'solution', 'reason'],
      questionNumber: ['no', 'num', 'number', 'q no', 'sno', 's.no'],
    };

    headers.forEach((h, i) => {
      for (const [field, variants] of Object.entries(headerMappings)) {
        if (variants.includes(h)) { colMap[field] = i; break; }
      }
    });

    if (colMap.questionText === undefined) return questions; // Can't parse without question column

    for (let i = 1; i < lines.length; i++) {
      const cols = FormatParser._splitCSVLine(lines[i], delimiter);
      if (cols.length < 3) continue;

      const q = {
        questionNumber: colMap.questionNumber !== undefined ? parseInt(cols[colMap.questionNumber]) : i,
        questionText: (cols[colMap.questionText] || '').trim().replace(/^["']|["']$/g, ''),
        optionA: (cols[colMap.optionA] || '').trim().replace(/^["']|["']$/g, ''),
        optionB: (cols[colMap.optionB] || '').trim().replace(/^["']|["']$/g, ''),
        optionC: (cols[colMap.optionC] || '').trim().replace(/^["']|["']$/g, ''),
        optionD: (cols[colMap.optionD] || '').trim().replace(/^["']|["']$/g, ''),
        correctAnswer: (cols[colMap.correctAnswer] || '').trim().replace(/^["']|["']$/g, '').toUpperCase(),
        explanation: colMap.explanation !== undefined ? (cols[colMap.explanation] || '').trim().replace(/^["']|["']$/g, '') : '',
      };

      if (q.questionText && q.optionA && q.correctAnswer) {
        questions.push(q);
      }
    }

    return questions;
  }

  static _splitCSVLine(line, delimiter) {
    if (delimiter === '\t') return line.split('\t');
    // Proper CSV parsing with quote handling
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') { inQuotes = !inQuotes; continue; }
      if (line[i] === ',' && !inQuotes) { result.push(current); current = ''; continue; }
      current += line[i];
    }
    result.push(current);
    return result;
  }

  /**
   * FORMAT C — Structured YAML-like blocks
   *
   * Q: Question text
   * A: Option A
   * B: Option B
   * C: Option C
   * D: Option D
   * ANS: B
   * EXP: Explanation text
   */
  static parseFormatC(text) {
    const questions = [];
    const blocks = text.split(/\n\s*\n/);
    for (const block of blocks) {
      const q = {};
      const lines = block.split('\n');
      for (const line of lines) {
        const m = line.match(/^(Q|A|B|C|D|ANS|EXP|ANSWER|EXPLANATION|NUM)[\s:]+(.+)/i);
        if (!m) continue;
        const key = m[1].toUpperCase();
        const val = m[2].trim();
        if (key === 'Q') q.questionText = val;
        else if (key === 'A') q.optionA = val;
        else if (key === 'B') q.optionB = val;
        else if (key === 'C') q.optionC = val;
        else if (key === 'D') q.optionD = val;
        else if (key === 'ANS' || key === 'ANSWER') q.correctAnswer = val.toUpperCase();
        else if (key === 'EXP' || key === 'EXPLANATION') q.explanation = val;
        else if (key === 'NUM') q.questionNumber = parseInt(val);
      }
      if (q.questionText && q.optionA && q.correctAnswer) questions.push(q);
    }
    return questions;
  }
}

// ═══════════════════════════════════════════════════════════════
//  TEST GENERATOR
// ═══════════════════════════════════════════════════════════════

class TestGenerator {
  /**
   * Generate 25 test assignments from an array of 1000 questions.
   * Each test: 40 questions in sequence (questions 1-40, 41-80, etc.)
   * If fewer than 1000 questions, still creates as many complete tests as possible.
   */
  static generateTests(topicId, topicName, questions) {
    const tests = [];
    const totalQ = questions.length;
    const qPerTest = IMPORT_CONFIG.QUESTIONS_PER_TEST;
    const numTests = Math.min(IMPORT_CONFIG.TESTS_PER_TOPIC, Math.floor(totalQ / qPerTest));

    for (let t = 0; t < numTests; t++) {
      const start = t * qPerTest;
      const end = start + qPerTest;
      const testQuestions = questions.slice(start, end);
      const testNum = String(t + 1).padStart(2, '0');

      tests.push({
        testId: `${topicId}_test_${testNum}`,
        topicId,
        testNumber: t + 1,
        title: `${topicName} — Test ${testNum}`,
        questionIds: testQuestions.map(q => q.questionId),
        totalQuestions: testQuestions.length,
        totalMarks: testQuestions.length,
        durationMinutes: 40,
        difficulty: 'mixed',
        qRange: `${start + 1}–${end}`,
        createdAt: new Date().toISOString(),
      });
    }

    // Warn if not enough questions for all 25 tests
    if (numTests < IMPORT_CONFIG.TESTS_PER_TOPIC) {
      console.warn(`⚠️  Topic "${topicName}": Only ${numTests} tests generated (need ${totalQ} questions for 25 tests, have ${totalQ})`);
    }

    return tests;
  }
}

// ═══════════════════════════════════════════════════════════════
//  TOPIC DETECTOR
// ═══════════════════════════════════════════════════════════════

class TopicDetector {
  /**
   * Detect topic name from file name or content.
   * Priority: explicit topic header in content > filename match > fallback
   */
  static detect(fileName, content) {
    // 1. Look for explicit topic header in content
    const headerMatch = content.match(/^TOPIC[\s:]+(.+)$/im) ||
                        content.match(/^SUBJECT[\s:]+(.+)$/im) ||
                        content.match(/^SECTION[\s:]+(.+)$/im);
    if (headerMatch) {
      const detected = TopicDetector._normalize(headerMatch[1].trim());
      if (detected) return detected;
    }

    // 2. Match against known names from filename
    const fileBase = fileName.replace(/\.[^.]+$/, '').toLowerCase()
      .replace(/[_\-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Direct map lookup
    const directMatch = TOPIC_NAME_MAP[fileBase];
    if (directMatch) return directMatch;

    // Partial match
    for (const [key, value] of Object.entries(TOPIC_NAME_MAP)) {
      if (fileBase.includes(key) || key.includes(fileBase)) return value;
    }

    // 3. Return cleaned filename as topic name (fallback)
    return fileBase.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  static _normalize(raw) {
    const lower = raw.toLowerCase().trim();
    return TOPIC_NAME_MAP[lower] || null;
  }

  static generateTopicId(topicName) {
    return topicName.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 40);
  }
}

// ═══════════════════════════════════════════════════════════════
//  MAIN DRIVE IMPORT PARSER CLASS
// ═══════════════════════════════════════════════════════════════

class DriveImportParser {

  constructor(config = {}) {
    this.config = config;
    this.report = new ImportReport();
  }

  /**
   * Parse a Google Drive link and return the folder/file ID
   */
  static parseDriveLink(link) {
    // Folder: drive.google.com/drive/folders/{id}
    const folderMatch = link.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if (folderMatch) return { type: 'folder', id: folderMatch[1] };

    // File: drive.google.com/file/d/{id}/ or /d/{id}/view
    const fileMatch = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) return { type: 'file', id: fileMatch[1] };

    // Spreadsheet: docs.google.com/spreadsheets/d/{id}
    const sheetMatch = link.match(/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
    if (sheetMatch) return { type: 'spreadsheet', id: sheetMatch[1] };

    return null;
  }

  /**
   * Auto-detect file format from content
   */
  static detectFormat(content) {
    const sample = content.substring(0, 2000);

    // CSV/TSV: has consistent delimiters and header row
    if (/^[^\n]+[,\t][^\n]+[,\t][^\n]+\n/m.test(sample)) {
      const lines = sample.split('\n').slice(0, 5);
      const tabCount = lines.reduce((s, l) => s + (l.match(/\t/g) || []).length, 0);
      const commaCount = lines.reduce((s, l) => s + (l.match(/,/g) || []).length, 0);
      if (tabCount > 10 || commaCount > 10) return 'B_CSV';
    }

    // YAML-like: lines starting with "Q:", "A:", "ANS:"
    if (/^Q[\s:]/im.test(sample) && /^ANS[\s:]/im.test(sample)) return 'C_YAML';

    // Format A: numbered questions (most common)
    if (/^\s*(?:Q\.?\s*)?\d+[\.\)]\s+\w/m.test(sample)) return 'A_NUMBERED';

    // Default: try Format A
    return 'A_NUMBERED';
  }

  /**
   * Parse text content of a single file into structured questions
   */
  parseFileContent(fileName, content) {
    const topicName = TopicDetector.detect(fileName, content);
    const topicId = TopicDetector.generateTopicId(topicName);
    const format = DriveImportParser.detectFormat(content);

    console.log(`📄 Parsing: ${fileName}`);
    console.log(`   Topic: ${topicName} | Format: ${format}`);

    let rawQuestions = [];

    switch (format) {
      case 'B_CSV':
        rawQuestions = FormatParser.parseFormatB(content);
        break;
      case 'C_YAML':
        rawQuestions = FormatParser.parseFormatC(content);
        break;
      case 'A_NUMBERED':
      default:
        rawQuestions = FormatParser.parseFormatA(content);
        break;
    }

    console.log(`   Extracted: ${rawQuestions.length} raw questions`);

    // Validate and deduplicate
    const validQuestions = [];
    const importedTexts = [];
    let qNum = 0;

    for (const raw of rawQuestions) {
      qNum++;
      const questionId = `${topicId}_q${String(raw.questionNumber || qNum).padStart(4, '0')}`;

      // Deduplicate
      const dupCheck = QuestionValidator.isDuplicate(raw, importedTexts.map((t, i) => ({ id: validQuestions[i]?.questionId, questionText: t })));
      if (dupCheck.isDuplicate) {
        this.report.duplicatesRemoved++;
        this.report.addWarning(fileName, `Duplicate of Q#${dupCheck.matchedId}`, raw.questionNumber || qNum);
        continue;
      }

      // Validate
      const validation = QuestionValidator.validate(raw, topicName, raw.questionNumber || qNum);
      if (!validation.isValid) {
        this.report.questionsInvalid++;
        validation.issues.filter(i => i.severity === 'error').forEach(issue => {
          this.report.addError(fileName, `${issue.field}: ${issue.msg}`, raw.questionNumber || qNum);
        });
        continue;
      }

      // Add warnings for soft issues
      validation.issues.filter(i => i.severity === 'warning').forEach(issue => {
        this.report.addWarning(fileName, `${issue.field}: ${issue.msg}`, raw.questionNumber || qNum);
      });

      const structured = {
        questionId,
        topicId,
        topicName,
        testId: null, // assigned during test generation
        questionNumber: raw.questionNumber || qNum,
        questionText: raw.questionText.trim(),
        optionA: raw.optionA.trim(),
        optionB: raw.optionB.trim(),
        optionC: raw.optionC.trim(),
        optionD: raw.optionD.trim(),
        correctAnswer: raw.correctAnswer.toUpperCase(),
        explanation: (raw.explanation || '').trim(),
        difficulty: raw.difficulty || 'medium',
        source: fileName,
        importedAt: new Date().toISOString(),
        version: 1,
      };

      validQuestions.push(structured);
      importedTexts.push(raw.questionText);
      this.report.questionsExtracted++;
    }

    // Generate tests
    const tests = TestGenerator.generateTests(topicId, topicName, validQuestions);

    // Back-link testId to each question
    tests.forEach(test => {
      test.questionIds.forEach(qId => {
        const q = validQuestions.find(q => q.questionId === qId);
        if (q) q.testId = test.testId;
      });
    });

    this.report.addTopicSummary(topicName, fileName, rawQuestions.length, validQuestions.length, this.report.duplicatesRemoved, this.report.questionsInvalid);
    this.report.testsGenerated += tests.length;

    return {
      topic: {
        topicId,
        name: topicName,
        totalQuestions: validQuestions.length,
        totalTests: tests.length,
        sourceFile: fileName,
        importedAt: new Date().toISOString(),
      },
      questions: validQuestions,
      tests,
    };
  }

  /**
   * Parse multiple files (used when given a folder with multiple topic files)
   */
  parseMultipleFiles(files) {
    // files: array of { name: string, content: string }
    const allTopics = [];
    const allQuestions = [];
    const allTests = [];

    for (const file of files) {
      try {
        const result = this.parseFileContent(file.name, file.content);
        allTopics.push(result.topic);
        allQuestions.push(...result.questions);
        allTests.push(...result.tests);
        this.report.filesProcessed++;
        this.report.topicsDetected++;
        this.report.topicsImported++;
        this.report.questionsImported += result.questions.length;
      } catch (err) {
        this.report.addError(file.name, `Fatal parse error: ${err.message}`);
      }
    }

    this.report.finalize();
    this.report.print();

    return { topics: allTopics, questions: allQuestions, tests: allTests, report: this.report };
  }

  /**
   * Browser-side: Parse a single pasted/uploaded text
   * Used in the Admin > Import panel when user pastes content
   */
  parseFromText(topicName, content) {
    const fileName = topicName + '.txt';
    const result = this.parseFileContent(fileName, content);
    this.report.filesProcessed = 1;
    this.report.topicsDetected = 1;
    this.report.topicsImported = 1;
    this.report.questionsImported = result.questions.length;
    this.report.finalize();
    return result;
  }

  /**
   * Convert parsed result to Firestore batch-write format
   * Returns arrays ready for firebase-admin batch().set() calls
   */
  toFirestoreFormat(parseResult) {
    const { topics, questions, tests } = parseResult;

    return {
      topicWrites: topics.map(t => ({
        collection: 'topics',
        docId: t.topicId,
        data: { ...t, createdAt: new Date(), updatedAt: new Date() },
      })),
      questionWrites: questions.map(q => ({
        collection: 'questions',
        docId: q.questionId,
        data: { ...q, importedAt: new Date() },
      })),
      testWrites: tests.map(t => ({
        collection: 'tests',
        docId: t.testId,
        data: { ...t, createdAt: new Date() },
      })),
    };
  }

  /**
   * Export parsed result as downloadable JSON (browser usage)
   */
  exportAsJSON(parseResult) {
    const json = JSON.stringify({
      exportedAt: new Date().toISOString(),
      report: parseResult.report,
      topics: parseResult.topics,
      tests: parseResult.tests,
      // Omit correctAnswer from export for security
      questions: parseResult.questions.map(q => {
        const { correctAnswer, ...rest } = q;
        return { ...rest, hasAnswer: !!correctAnswer };
      }),
    }, null, 2);

    if (typeof window !== 'undefined') {
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `coc-import-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }

    return json;
  }
}

// ═══════════════════════════════════════════════════════════════
//  BROWSER ADMIN PANEL INTEGRATION
// ═══════════════════════════════════════════════════════════════

/**
 * Called from the Admin panel when user clicks "Import from Drive"
 * In prototype mode: works with manually pasted content
 * In production: connects to Google Drive API via backend
 */
async function adminImportFromDrive(driveLink, pastedContent, topicNameOverride) {
  const parser = new DriveImportParser();

  // Show import UI
  const resultEl = document.getElementById('import-result');
  if (resultEl) {
    resultEl.innerHTML = `
      <div style="padding:16px;background:#eff6ff;border-radius:8px;border:1px solid #bfdbfe;">
        <div style="font-weight:600;color:#1e3a5f;margin-bottom:8px;">⚙️ Processing import...</div>
        <div id="import-progress" style="font-size:13px;color:#64748b;font-family:monospace;max-height:200px;overflow-y:auto;"></div>
      </div>`;
  }

  const log = (msg) => {
    console.log(msg);
    const el = document.getElementById('import-progress');
    if (el) el.innerHTML += msg + '<br>';
  };

  try {
    // Determine source
    let content = pastedContent;
    let topicName = topicNameOverride || 'Unknown Topic';

    if (driveLink && !pastedContent) {
      const parsed = DriveImportParser.parseDriveLink(driveLink);
      if (!parsed) throw new Error('Invalid Google Drive link format');
      log(`📂 Drive ${parsed.type} ID: ${parsed.id}`);
      log(`ℹ️  In production, this connects to Drive API via Cloud Function.`);
      log(`ℹ️  For prototype: paste the file content below.`);

      if (resultEl) {
        resultEl.innerHTML += `
          <div style="margin-top:12px;padding:12px;background:#fef3c7;border-radius:8px;font-size:13px;">
            <strong>⚠️ Prototype Mode:</strong> Direct Drive API requires Firebase backend.<br>
            Paste your MCQ content in the text area and click Import.
          </div>`;
      }
      return;
    }

    if (!content) {
      log('❌ No content to import. Please paste MCQ content.');
      return;
    }

    log(`📄 Parsing content for topic: "${topicName}"`);
    log(`📊 Content length: ${content.length} characters`);

    const result = parser.parseFromText(topicName, content);

    log(`✅ Topics: 1`);
    log(`✅ Questions valid: ${result.questions.length}`);
    log(`✅ Tests generated: ${result.tests.length}`);
    log(`⚠️  Duplicates removed: ${parser.report.duplicatesRemoved}`);
    log(`❌ Invalid questions: ${parser.report.questionsInvalid}`);

    // Display in admin panel
    if (resultEl) {
      const report = parser.report;
      resultEl.innerHTML = `
        <div style="padding:20px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;margin-top:12px;">
          <div style="font-size:18px;font-weight:700;color:#166534;margin-bottom:12px;">✅ Import Complete</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">
            <div style="background:#fff;border-radius:8px;padding:12px;text-align:center;">
              <div style="font-size:24px;font-weight:700;color:#1e3a5f;">${result.questions.length}</div>
              <div style="font-size:12px;color:#64748b;">Questions Imported</div>
            </div>
            <div style="background:#fff;border-radius:8px;padding:12px;text-align:center;">
              <div style="font-size:24px;font-weight:700;color:#0d9488;">${result.tests.length}</div>
              <div style="font-size:12px;color:#64748b;">Tests Generated</div>
            </div>
            <div style="background:#fff;border-radius:8px;padding:12px;text-align:center;">
              <div style="font-size:24px;font-weight:700;color:#f59e0b;">${report.duplicatesRemoved}</div>
              <div style="font-size:12px;color:#64748b;">Duplicates Removed</div>
            </div>
          </div>
          ${report.errors.length > 0 ? `
            <div style="background:#fef2f2;border-radius:8px;padding:12px;margin-bottom:12px;">
              <div style="font-weight:600;color:#dc2626;margin-bottom:8px;">❌ ${report.errors.length} Errors (need attention):</div>
              ${report.errors.slice(0,5).map(e => `<div style="font-size:12px;font-family:monospace;color:#7f1d1d;">• Q${e.questionNum||'?'}: ${e.message}</div>`).join('')}
              ${report.errors.length > 5 ? `<div style="font-size:12px;color:#7f1d1d;">... and ${report.errors.length - 5} more</div>` : ''}
            </div>` : ''}
          <div style="display:flex;gap:12px;margin-top:16px;">
            <button onclick="approveImport(window._lastImportResult)" 
              style="flex:1;padding:10px;background:#166534;color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer;">
              ✅ Approve & Save to Database
            </button>
            <button onclick="downloadImportJSON(window._lastImportResult)"
              style="flex:1;padding:10px;background:#1e3a5f;color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer;">
              📥 Download Import JSON
            </button>
          </div>
        </div>`;

      // Store result for approve button
      window._lastImportResult = result;
      window._lastParser = parser;
    }

    return result;

  } catch (err) {
    log(`❌ Import failed: ${err.message}`);
    if (resultEl) {
      resultEl.innerHTML += `
        <div style="padding:12px;background:#fef2f2;border-radius:8px;color:#dc2626;font-size:13px;margin-top:8px;">
          ❌ Error: ${err.message}
        </div>`;
    }
  }
}

function approveImport(result) {
  if (!result) { alert('No import result to approve.'); return; }
  // In production: call Cloud Function to save to Firestore
  // In prototype: update in-memory data
  if (typeof window !== 'undefined' && window.ALL_TOPICS) {
    const existing = window.ALL_TOPICS.find(t => t.id === result.topic.topicId);
    if (!existing) {
      console.log('📥 Import approved. In production, this writes to Firestore.');
      showToast && showToast('success', `✅ ${result.questions.length} questions saved! ${result.tests.length} tests created.`);
    }
  }
  alert(`✅ Import approved!\n${result.questions.length} questions and ${result.tests.length} tests would be saved to Firestore in production.`);
}

function downloadImportJSON(result) {
  if (!result || !window._lastParser) return;
  window._lastParser.exportAsJSON({ ...result, topics: [result.topic], tests: result.tests, report: window._lastParser.report });
}

// ═══════════════════════════════════════════════════════════════
//  SAMPLE DATA FOR TESTING THE PARSER
// ═══════════════════════════════════════════════════════════════

const SAMPLE_FORMAT_A = `
TOPIC: Verbal Ability & English

1. Choose the word most similar in meaning to "EPHEMERAL":
A) Permanent
B) Transient
C) Enormous
D) Transparent
Answer: B
Explanation: Ephemeral means lasting for a very short time. Transient is its synonym.

---

2. Select the correctly spelled word:
A) Accomodate
B) Accommodate
C) Acommodate
D) Acomodate
Answer: B
Explanation: The correct spelling is "Accommodate" — double c and double m.

---

3. Fill in the blank: The committee has _____ its decision until next week.
A) postponed
B) postposed
C) preponed
D) postdated
Answer: A
Explanation: "Postponed" means to delay to a later time. "Preponed" is informal and not standard.
`;

const SAMPLE_FORMAT_B = `Question Number,Question,Option A,Option B,Option C,Option D,Answer,Explanation
1,"What is the time complexity of binary search?","O(n)","O(log n)","O(n²)","O(1)","B","Binary search halves the search space each step giving O(log n) complexity"
2,"Which data structure uses FIFO ordering?","Stack","Queue","Tree","Heap","B","Queue follows First In First Out (FIFO) — the first element added is the first removed"
`;

// Export for Node.js / Cloud Function usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DriveImportParser, QuestionValidator, TestGenerator, TopicDetector, FormatParser, ImportReport, IMPORT_CONFIG, TOPIC_NAME_MAP };
}

// Global for browser usage
if (typeof window !== 'undefined') {
  window.DriveImportParser = DriveImportParser;
  window.adminImportFromDrive = adminImportFromDrive;
  window.SAMPLE_FORMAT_A = SAMPLE_FORMAT_A;
  window.SAMPLE_FORMAT_B = SAMPLE_FORMAT_B;
}

console.log('✅ COC Learn & Test — Drive Import Parser loaded');
console.log('   Supports formats: A (numbered Q&A), B (CSV/TSV), C (YAML-like)');
console.log('   Use adminImportFromDrive(driveLink, content, topicName) to import');
