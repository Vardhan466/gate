import re

def apply_phase3():
    with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    print(f"File length at start of Phase 3: {len(content)}")

    # 1. Replace startExamTyped through gradeExam with the upgraded SSC CGL runtime engine
    exam_start_str = "function startExamTyped(topicId, testId, diffType, testSubNum) {"
    exam_end_str = "function renderResult(r) {"
    idx_start = content.find(exam_start_str)
    idx_end = content.find(exam_end_str)
    assert idx_start != -1 and idx_end != -1, "Could not find exam start or end strings"

    new_exam_engine = """function startExamTyped(topicId, testId, diffType, testSubNum) {
  const typeLabels = { easy:'🟢 Easy', medium:'🟡 Medium', hard:'🔴 Hard', previous:'🏛️ Previous Year' };
  const typeKey = diffType || 'easy';
  const typeTitle = typeKey.charAt(0).toUpperCase() + typeKey.slice(1);
  const testDisplayName = testSubNum ? `${typeTitle} ${testSubNum}` : `Test ${testId}`;
  const timeLimits = { easy: 900, medium: 900, hard: 900, previous: 900 }; // 15 minutes = 900 seconds

  const numTopicId = Number(topicId);
  const t = getTopicById(topicId);
  const topicName = t ? t.name : 'Quantitative Aptitude';

  // 1. Fetch curated 25 questions from Drive test bank or random selection
  let questions = [];
  let testNameTag = testDisplayName;

  if (window.DRIVE_TOPIC_TESTS && window.DRIVE_TOPIC_TESTS[numTopicId]) {
    const topicTests = window.DRIVE_TOPIC_TESTS[numTopicId];
    const assigned = topicTests.find(item => item.testNum === testId);
    if (assigned && assigned.questions && assigned.questions.length > 0) {
      questions = assigned.questions;
      testNameTag = `${assigned.name} (${assigned.badge})`;
    }
  } else if (window.DRIVE_TEST_ASSIGNMENTS && window.DRIVE_TEST_ASSIGNMENTS.length > 0) {
    const assigned = window.DRIVE_TEST_ASSIGNMENTS.find(t => t.testNum === testId);
    if (assigned && assigned.questions && assigned.questions.length > 0) {
      questions = assigned.questions;
      testNameTag = `${assigned.name} (${assigned.badge})`;
    }
  }

  if (!questions || questions.length === 0) {
    questions = getExamQuestionsForTopic(topicId, diffType);
  }

  APP.examState = {
    active: true,
    answers: {},
    marked: new Set(),
    currentQ: 0,
    currentSection: 0,
    zoomLevel: 1.0,
    timeLeft: 900, // 15 min
    timer: null,
    topicId: topicId,
    testId: testId,
    diffType: diffType,
    testDisplayName: testDisplayName,
    testNameTag: testNameTag,
    topicName: topicName,
    startTime: Date.now(),
    questions: questions
  };

  // Populate SSC CGL Header & Meta (Image 1 Ref)
  const titleEl = document.getElementById('ssc-exam-main-title');
  if (titleEl) titleEl.textContent = `SSC CGL MOCK TEST — ${topicName.toUpperCase()}`;

  const tagEl = document.getElementById('ssc-exam-tag');
  if (tagEl) tagEl.innerHTML = `SSC-CGL Tier 1 &nbsp;|&nbsp; <strong>${topicName}</strong> &nbsp;•&nbsp; ${testDisplayName}`;

  const rollEl = document.getElementById('ssc-roll-text');
  const nameEl = document.getElementById('ssc-name-text');
  const u = APP.currentUser || {};
  if (rollEl) rollEl.textContent = u.roll || 'COC-2026-001';
  if (nameEl) nameEl.textContent = u.name || 'ASPIRANT';

  const avatarIcon = document.getElementById('ssc-avatar-icon');
  if (avatarIcon && u.name) avatarIcon.textContent = u.name[0].toUpperCase();

  // Show exam screen
  document.getElementById('exam-screen').classList.add('active');

  // Render question, palette, and start countdown
  renderQuestion(0);
  renderPalette();
  startTimer();
  showToast('info', `📋 SSC CGL Mock Test started: ${topicName} (25 Questions / 15 Minutes).`);
}

function startExam(topicId, testId) {
  startExamTyped(topicId, testId, 'all');
}

function renderQuestion(idx) {
  APP.examState.currentQ = idx;
  const questions = APP.examState.questions || SAMPLE_QUESTIONS;
  const q = questions[idx];
  if (!q) return;

  // Determine section index (0: PART-A (0-6), 1: PART-B (7-13), 2: PART-C (14-19), 3: PART-D (20-24))
  let secIdx = 0;
  if (idx >= 20) secIdx = 3;
  else if (idx >= 14) secIdx = 2;
  else if (idx >= 7) secIdx = 1;

  updateSectionTabs(secIdx);

  const optLetters = ['A', 'B', 'C', 'D'];
  const formattedQuestion = formatFormula(q.text);
  const selectedOpt = APP.examState.answers[idx];

  let optionsHtml = q.options.map((opt, i) => `
    <div class="ssc-option-item ${selectedOpt === i ? 'selected' : ''}" onclick="selectAnswer(${idx}, ${i})">
      <div class="ssc-option-radio">
        <div class="ssc-option-radio-dot"></div>
      </div>
      <div style="font-weight:700;font-size:14px;color:#475569;min-width:22px;">${optLetters[i]}.</div>
      <div class="ssc-option-text">${formatFormula(opt)}</div>
    </div>
  `).join('');

  const qContent = document.getElementById('ssc-q-content');
  if (qContent) {
    const zoomSize = Math.round((APP.examState.zoomLevel || 1.0) * 15);
    qContent.style.fontSize = zoomSize + 'px';
    qContent.innerHTML = `
      <div class="ssc-q-num">Question : ${idx + 1}</div>
      <div class="ssc-q-text">${formattedQuestion}</div>
      <div class="ssc-options-list">${optionsHtml}</div>
    `;
  }

  updateMetrics();
  renderPalette();
}

function selectAnswer(qIdx, optIdx) {
  APP.examState.answers[qIdx] = optIdx;
  renderQuestion(qIdx);
  showToast('success', '💾 Answer selected');
}

function markAndNext() {
  const qIdx = APP.examState.currentQ;
  APP.examState.marked.add(qIdx);
  const questions = APP.examState.questions || SAMPLE_QUESTIONS;
  if (qIdx < questions.length - 1) {
    renderQuestion(qIdx + 1);
    showToast('warning', '🟡 Marked for review & Next');
  } else {
    renderQuestion(qIdx);
    showToast('info', '🟡 Marked for review. Last question reached.');
  }
}

function saveAndNextCurrent() {
  const qIdx = APP.examState.currentQ;
  const questions = APP.examState.questions || SAMPLE_QUESTIONS;
  if (APP.examState.answers[qIdx] !== undefined) {
    showToast('success', '💾 Answer saved');
  }
  if (qIdx < questions.length - 1) {
    renderQuestion(qIdx + 1);
  } else {
    showToast('info', '🏁 Last question reached');
    showSubmitModal();
  }
}

function clearCurrentAnswer() {
  const qIdx = APP.examState.currentQ;
  delete APP.examState.answers[qIdx];
  APP.examState.marked.delete(qIdx);
  renderQuestion(qIdx);
  showToast('info', '🗑️ Response cleared');
}

function adjustExamZoom(delta) {
  if (!APP.examState.zoomLevel) APP.examState.zoomLevel = 1.0;
  APP.examState.zoomLevel = Math.max(0.8, Math.min(1.4, APP.examState.zoomLevel + delta * 0.1));
  const qContent = document.getElementById('ssc-q-content');
  if (qContent) {
    qContent.style.fontSize = Math.round(APP.examState.zoomLevel * 15) + 'px';
  }
  showToast('info', `🔍 Zoom: ${Math.round(APP.examState.zoomLevel * 100)}%`);
}

function switchExamSection(secIdx) {
  const secStarts = [0, 7, 14, 20];
  const targetQ = secStarts[secIdx] || 0;
  updateSectionTabs(secIdx);
  renderQuestion(targetQ);
}

function updateSectionTabs(secIdx) {
  APP.examState.currentSection = secIdx;
  const secNames = ['PART-A', 'PART-B', 'PART-C', 'PART-D'];
  const titles = [
    'General Awareness / Section A',
    'Quantitative Aptitude / Section B',
    'Reasoning Ability / Section C',
    'Advanced Mathematics / Section D'
  ];
  for (let s = 0; s < 4; s++) {
    const tab = document.getElementById('sec-tab-' + s);
    if (tab) {
      if (s === secIdx) tab.classList.add('active');
      else tab.classList.remove('active');
    }
  }
  const titleEl = document.getElementById('ssc-sec-title');
  if (titleEl) titleEl.textContent = titles[secIdx] || 'Quantitative Aptitude';
  const hdrEl = document.getElementById('ssc-analysis-header');
  if (hdrEl) hdrEl.textContent = `${secNames[secIdx]} Analysis`;
}

function prevQuestion() {
  if (APP.examState.currentQ > 0) renderQuestion(APP.examState.currentQ - 1);
}

function nextQuestion() {
  const questions = APP.examState.questions || SAMPLE_QUESTIONS;
  if (APP.examState.currentQ < questions.length - 1) renderQuestion(APP.examState.currentQ + 1);
}

function renderPalette() {
  const state = APP.examState;
  const grid = document.getElementById('ssc-palette-grid');
  if (!grid) return;
  const questions = state.questions || SAMPLE_QUESTIONS;

  grid.innerHTML = questions.map((_, i) => {
    let cls = 'unanswered';
    if (state.answers[i] !== undefined) {
      cls = 'answered';
    } else if (state.marked.has(i)) {
      cls = 'marked';
    }
    const isActive = i === state.currentQ ? 'active' : '';
    return `<button class="ssc-q-btn ${cls} ${isActive}" onclick="renderQuestion(${i})">${i + 1}</button>`;
  }).join('');
}

function updateMetrics() {
  const state = APP.examState;
  const questions = state.questions || SAMPLE_QUESTIONS;
  const answered = Object.keys(state.answers).length;
  const marked = state.marked.size;
  const unanswered = questions.length - answered;

  const ansEl = document.getElementById('ssc-stat-answered');
  const notAnsEl = document.getElementById('ssc-stat-notanswered');
  const markEl = document.getElementById('ssc-stat-marked');
  const counterEl = document.getElementById('ssc-total-answered-counter');

  if (ansEl) ansEl.textContent = answered;
  if (notAnsEl) notAnsEl.textContent = unanswered;
  if (markEl) markEl.textContent = marked;
  if (counterEl) counterEl.textContent = answered;

  const mAns = document.getElementById('modal-answered');
  const mNotAns = document.getElementById('modal-unanswered');
  const mMark = document.getElementById('modal-marked');
  if (mAns) mAns.textContent = answered;
  if (mNotAns) mNotAns.textContent = unanswered;
  if (mMark) mMark.textContent = marked;
}

function startTimer() {
  if (APP.examState.timer) clearInterval(APP.examState.timer);
  APP.examState.timer = setInterval(() => {
    APP.examState.timeLeft--;
    updateTimerDisplay();
    if (APP.examState.timeLeft <= 0) {
      clearInterval(APP.examState.timer);
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const t = APP.examState.timeLeft;
  const m = Math.floor(t / 60);
  const s = t % 60;
  const formatted = `00 : ${String(m).padStart(2, '0')} : ${String(s).padStart(2, '0')}`;
  const timerEl = document.getElementById('ssc-digital-timer');
  if (timerEl) {
    timerEl.textContent = formatted;
  }
}

function showSubmitModal() {
  updateMetrics();
  document.getElementById('submit-modal').classList.add('open');
}

function closeSubmitModal() {
  document.getElementById('submit-modal').classList.remove('open');
}

function submitExam(auto = false) {
  closeSubmitModal();
  if (APP.examState.timer) clearInterval(APP.examState.timer);
  APP.examState.active = false;
  document.getElementById('exam-screen').classList.remove('active');
  showToast('success', '✅ Test submitted successfully!');

  // Grade exam
  const result = gradeExam();

  // Show result
  const area = document.getElementById('content-area');
  area.innerHTML = `<div class="section-content">${renderResult(result)}</div>`;

  // Update week stats
  APP.stats.weekTests = Math.min((APP.stats.weekTests || 0) + 1, 3);
  if (auto) showToast('warning', '⏰ Time up! Test auto-submitted.');
}

function gradeExam() {
  const state = APP.examState;
  const questions = state.questions || SAMPLE_QUESTIONS;
  let correct = 0, wrong = 0, skipped = 0;
  questions.forEach((q, i) => {
    if (state.answers[i] === undefined) skipped++;
    else if (state.answers[i] === q.correct) correct++;
    else wrong++;
  });
  const timeUsed = Date.now() - state.startTime;
  const timeUsedSec = Math.floor(timeUsed / 1000);
  const timeLeftSec = state.timeLeft;
  return { correct, wrong, skipped, total: questions.length, timeUsedSec, timeLeftSec, answers: { ...state.answers } };
}

"""

    content = content[:idx_start] + new_exam_engine + content[idx_end:]

    # 2. Update renderResult to persist progress & push real-time notifications
    # Find renderResult definition
    res_pos = content.find("function renderResult(r) {")
    assert res_pos != -1, "Could not find renderResult"

    # In renderResult, replace the notification and progress saving part with full localStorage persistence
    old_prog_save = """  // Persist attempt & progress dynamically
  const topicId = Number(APP.examState.topicId);
  if(window.SAMPLE_PROGRESS) {
    if(!window.SAMPLE_PROGRESS[topicId]) {
      window.SAMPLE_PROGRESS[topicId] = { completed: 0, bestScore: 0, avgScore: 0, accuracy: 0, status: 'in_progress' };
    }
    const prog = window.SAMPLE_PROGRESS[topicId];
    prog.completed = Math.min(25, (prog.completed || 0) + 1);
    prog.bestScore = Math.max(prog.bestScore || 0, r.correct);
    prog.avgScore = prog.avgScore ? Math.round((prog.avgScore + r.correct)/2) : r.correct;
    prog.accuracy = Math.round(parseFloat(accuracy));
    prog.status = prog.completed >= 25 ? 'completed' : 'in_progress';
  }"""

    new_prog_save = """  // Persist attempt & progress dynamically to memory and localStorage
  const topicId = Number(APP.examState.topicId);
  if (!window.SAMPLE_PROGRESS) window.SAMPLE_PROGRESS = {};
  if (!window.SAMPLE_PROGRESS[topicId]) {
    window.SAMPLE_PROGRESS[topicId] = { completed: 0, bestScore: 0, avgScore: 0, accuracy: 0, status: 'in_progress' };
  }
  const prog = window.SAMPLE_PROGRESS[topicId];
  prog.completed = Math.min(40, (prog.completed || 0) + 1);
  prog.bestScore = Math.max(prog.bestScore || 0, r.correct);
  prog.avgScore = prog.avgScore ? Math.round((prog.avgScore + r.correct)/2) : r.correct;
  prog.accuracy = Math.round(parseFloat(accuracy));
  prog.status = prog.completed >= 40 ? 'completed' : 'in_progress';

  // Save progress to localStorage
  try {
    localStorage.setItem('coc_topic_progress', JSON.stringify(window.SAMPLE_PROGRESS));
  } catch(e) {}"""

    if old_prog_save in content:
        content = content.replace(old_prog_save, new_prog_save)

    old_res_notif = """  // Add notification
  if(window.NOTIFICATIONS) {
    window.NOTIFICATIONS.unshift({
      id: Date.now(),
      type: 'result',
      icon: '✅',
      title: 'Test Completed',
      msg: `${topicName} — Test ${APP.examState.testId}: Scored ${r.correct}/${r.total} (${pct}%)`,
      time: 'Just now',
      read: false
    });
  }"""

    new_res_notif = """  // Create interactive notification and persist
  addNotification({
    id: Date.now(),
    type: 'result',
    icon: '🎯',
    title: `Mock Test Completed: ${topicName}`,
    body: `Scored ${r.correct}/${r.total} (${pct}%) in ${APP.examState.testDisplayName}. Accuracy: ${accuracy}%.`,
    time: 'Just now',
    read: false
  });"""

    if old_res_notif in content:
        content = content.replace(old_res_notif, new_res_notif)

    # 3. Add persistence & notification helper functions
    notif_helper_marker = "// Initialise notification badge on load"
    notif_helper_pos = content.find(notif_helper_marker)
    assert notif_helper_pos != -1, "Could not find initNotificationBadge marker"

    new_helpers = """// ═══════════════════════════════════════════════════════════════
//  PERSISTENCE & NOTIFICATION ENGINE
// ═══════════════════════════════════════════════════════════════
function initPersistence() {
  try {
    // 1. Profile
    const savedProfile = localStorage.getItem('coc_user_profile');
    if (savedProfile) {
      APP.currentUser = JSON.parse(savedProfile);
      updateSidebarUser();
    }
    // 2. Progress
    const savedProg = localStorage.getItem('coc_topic_progress');
    if (savedProg) {
      window.SAMPLE_PROGRESS = Object.assign(window.SAMPLE_PROGRESS || {}, JSON.parse(savedProg));
    }
    // 3. Recent Results
    const savedResults = localStorage.getItem('coc_recent_results');
    if (savedResults) {
      window.RECENT_RESULTS = JSON.parse(savedResults);
    }
    // 4. Notifications
    const savedNotifs = localStorage.getItem('coc_notifications');
    if (savedNotifs) {
      window.NOTIFICATIONS = JSON.parse(savedNotifs);
    }
    // 5. Dark Mode
    const savedTheme = localStorage.getItem('coc_dark_mode');
    if (savedTheme === 'true') {
      APP.darkMode = true;
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      const sw = document.getElementById('dark-toggle-sw');
      if (sw) sw.classList.add('on');
    }
  } catch(e) {
    console.warn('Persistence loading note:', e);
  }
}

function saveNotifications() {
  try {
    localStorage.setItem('coc_notifications', JSON.stringify(getAppNotifications()));
  } catch(e) {}
}

function addNotification(item) {
  const notifs = getAppNotifications();
  notifs.unshift(item);
  saveNotifications();
  updateNotifBadge();
  const list = document.getElementById('notif-list');
  if (list) list.innerHTML = notifs.map(n => renderNotificationItem(n)).join('');
}

"""

    content = content[:notif_helper_pos] + new_helpers + content[notif_helper_pos:]

    # Also update markNotifRead and markAllRead to call saveNotifications
    content = content.replace(
        "function markAllRead() {\n  const notifs = getAppNotifications();\n  notifs.forEach(n => n.read = true);",
        "function markAllRead() {\n  const notifs = getAppNotifications();\n  notifs.forEach(n => n.read = true);\n  saveNotifications();"
    )

    content = content.replace(
        "function markNotifRead(id) {\n  const notifs = getAppNotifications();\n  const n = notifs.find(x=>x.id===id);\n  if(n) n.read = true;",
        "function markNotifRead(id) {\n  const notifs = getAppNotifications();\n  const n = notifs.find(x=>x.id===id);\n  if(n) n.read = true;\n  saveNotifications();"
    )

    # In DOMContentLoaded, call initPersistence()
    old_dom_content = """document.addEventListener('DOMContentLoaded', ()=>{
  // Set exam date display
  const examDateEl = document.getElementById('exam-date');
  if(examDateEl) examDateEl.textContent = new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
  if(typeof initNotificationBadge === 'function') initNotificationBadge();
});"""

    new_dom_content = """document.addEventListener('DOMContentLoaded', ()=>{
  // Set exam date display
  const examDateEl = document.getElementById('exam-date');
  if(examDateEl) examDateEl.textContent = new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});

  // Load persistence
  initPersistence();
  if(typeof initNotificationBadge === 'function') initNotificationBadge();
});"""

    assert old_dom_content in content, "Could not find old_dom_content"
    content = content.replace(old_dom_content, new_dom_content)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Phase 3 updates written successfully.")

if __name__ == '__main__':
    apply_phase3()
