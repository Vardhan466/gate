# COC Learn & Test — Examination & Career Platform

> **"Learn. Practice. Test. Connect. Get Career Opportunities."**

A production-style EdTech examination and career platform engineered for high-volume MCQ examination delivery (50 Topics × 1,000 MCQs = 50,000 Questions across 1,250 Tests).

---

## 🚀 Quick Start (Instant Browser Preview)

No build tools or servers needed to run the frontend prototype!

1. Open [`index.html`](index.html) directly in Google Chrome, Edge, or any modern browser.
2. **Login Credentials**:
   - **Student Account**: `student@coc.edu` / `test123`
   - **Admin Account**: `admin@coc.edu` / `admin123`

---

## 📂 Project Architecture

```
coc-learn-test/
├── index.html                 # Complete SPA: All 13 sections, responsive UI, Dark Mode, Exam Portal
├── topics-data.js             # 50 Topics, 6 Full MCQ Banks (240 real Qs), Badges, Analytics, Progress
├── drive-import-parser.js     # Google Drive MCQ parser (Format A, CSV, YAML), Validator, 25-Test Generator
├── README.md                  # Quick reference & overview
└── firebase/                  # Production Backend Configuration
    ├── firebase.json          # Firestore, Cloud Functions & Hosting config
    ├── firestore.rules        # Secure rules (Answer keys protected, role-based access)
    ├── firestore.indexes.json # Composite indexes for high-speed queries
    ├── SETUP.md               # Complete Firebase deployment & configuration guide
    └── functions/             # Cloud Functions (TypeScript)
        ├── package.json
        ├── tsconfig.json
        └── src/index.ts       # gradeAttempt, importDriveContent, generateTests, detectWeakTopics, checkBadges
```

---

## 🏛️ Features Implemented

### 1. Official Exam Portal
- **Header strip**: System name (`COC-T01`), session name, date, roll number, and candidate details.
- **Timing & Controls**: Countdown timer (40 minutes), clear/mark/save buttons.
- **Palette**: 40-button interactive question palette with live status colors (Current, Answered, Unanswered, Marked for Review).
- **Keyboard navigation**: `←` / `→` for questions, `1`-`4` for options A-D, `M` to mark for review, `Esc` to submit.
- **Live Metrics**: Dynamically calculated answered, unanswered, and review counts.

### 2. Comprehensive 50-Topic Directory
- **All 50 Topics** mapped across 8 academic/engineering disciplines (Aptitude, Computer Science, Electronics, Mechanical, Mathematics, Programming, Electrical, General Studies).
- Each topic features **25 Test Assignments** with 40 questions and 40 marks each.
- Built-in full 40-question MCQ banks for:
  1. *Quantitative Aptitude* (Harmonic speeds, ratios, time/work, percentages, CI/SI, mixtures)
  2. *Verbal Ability & English* (Comprehension, grammar, sentence correction, vocabulary)
  3. *Logical Reasoning* (Syllogisms, blood relations, directions, coding/decoding)
  4. *Computer Science Fundamentals* (Boolean logic, memory hierarchy, CPU architecture, OS)
  5. *Data Structures & Algorithms* (Complexity, trees, queues, heaps, graphs, sorting)
  6. *Engineering Mathematics* (Eigenvalues, Laplace transforms, calculus, differential equations)

### 3. Dynamic Results, Analytics & Persistence
- Server-grade evaluation: Score, percentage, passing verdict, accuracy percentage, time used, time remaining.
- Detailed question-by-question review with explanations.
- Automatic persistence to student profile: Updates topic progress, learning score, recent tests history, and badge unlocking (`First Step`, `Sharpshooter`, `Speed Demon`).
- **Interactive Analytics Dashboard**: Visual score trends across recent tests, accuracy by topic, and weak-topic practice recommendations.

### 4. Interactive Notifications & Community
- **Notification Dropdown**: Real-time notification center with unread count badge.
- **Study Circles**: Discussion forums with working send/receive chat.
- **Jobs Portal**: Real state and central government employment listings (APPSC, TSPSC, RRB, SBI, SSC, UPSC) with filters by job type, department, and deadline.
- **AI Study Assistant**: Academic tutor with quick prompt shortcuts and knowledge grounding.

### 5. Admin Dashboard & Google Drive MCQ Importer
- Accessible via `admin@coc.edu`.
- Live stats: Total students, topics, questions, active tests, and jobs.
- **Direct Drive Import & MCQ Validator**:
  - Connects to Google Drive links.
  - Can paste or load sample raw MCQs in Numbered format (`Q1. ... Answer: ...`), CSV format, or YAML format.
  - Runs deduplication, syntax checking, answer validation, and automatic 25-test generation.
