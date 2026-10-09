import re
import os

def update_index_html():
    file_path = 'index.html'
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    print(f"Original file length: {len(content)} characters, {content.count(chr(10))} lines")

    # 1. Update CSS: Replace Exam CSS and Jobs CSS with SSC CGL Exam CSS, Leaderboard CSS, Study Plan CSS, and Mobile responsiveness
    # Find start of EXAM INTERFACE in CSS
    exam_css_start = content.find('/* ── EXAM INTERFACE ── */')
    # Find start of RESULT PAGE in CSS
    result_css_start = content.find('/* ── RESULT PAGE ── */')
    assert exam_css_start != -1 and result_css_start != -1, "Could not find EXAM INTERFACE or RESULT PAGE CSS"

    new_exam_css = """/* ── SSC CGL EXAMINATION PORTAL (IMAGE 1 REFERENCE) ── */
  #exam-screen {
    position: fixed;
    inset: 0;
    background: #f8fafc;
    z-index: 2000;
    display: none;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }
  #exam-screen.active { display: flex; }
  body.dark #exam-screen { background: #0f172a; }

  .ssc-top-bar {
    background: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  body.dark .ssc-top-bar { background: #1e293b; border-color: #334155; }
  .ssc-title {
    font-size: 18px;
    font-weight: 800;
    color: #1e293b;
    letter-spacing: 0.5px;
    font-family: 'Inter', sans-serif;
  }
  body.dark .ssc-title { color: #f1f5f9; }
  .ssc-timer-wrap { text-align: center; }
  .ssc-timer-lbl { font-size: 11px; color: #64748b; font-weight: 600; margin-bottom: 1px; }
  .ssc-timer-val {
    font-size: 22px;
    font-weight: 800;
    color: #dc2626;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 2px;
  }
  .ssc-header-icons { display: flex; align-items: center; gap: 10px; }
  .ssc-circle-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #64748b;
  }
  body.dark .ssc-circle-icon { background: #334155; color: #94a3b8; }

  .ssc-sub-bar {
    background: #f1f5f9;
    border-bottom: 1px solid #e2e8f0;
    padding: 6px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
  }
  body.dark .ssc-sub-bar { background: #0f172a; border-color: #334155; }
  .ssc-zoom-btn {
    background: #1d63d8;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
  }
  .ssc-zoom-btn:hover { background: #174eb2; }
  .ssc-exam-tag { font-weight: 600; color: #475569; margin-left: 6px; }
  body.dark .ssc-exam-tag { color: #cbd5e1; }
  .ssc-candidate-meta { color: #475569; font-size: 12px; font-weight: 500; }
  body.dark .ssc-candidate-meta { color: #cbd5e1; }

  .ssc-instructions-strip {
    background: #fef9c3;
    border-bottom: 1px solid #fef08a;
    padding: 6px 24px;
    font-size: 12px;
    color: #854d0e;
    font-weight: 600;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  body.dark .ssc-instructions-strip { background: #2e2608; border-color: #713f12; color: #fde047; }

  .ssc-body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  @media (max-width: 840px) {
    .ssc-body {
      flex-direction: column;
      overflow-y: auto;
    }
  }

  /* LEFT COLUMN: PALETTE & ANALYSIS */
  .ssc-left-column {
    width: 290px;
    background: #ffffff;
    border-right: 1.5px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 16px;
    flex-shrink: 0;
  }
  body.dark .ssc-left-column { background: #1e293b; border-color: #334155; }
  @media (max-width: 840px) {
    .ssc-left-column {
      width: 100%;
      border-right: none;
      border-bottom: 1.5px solid #e2e8f0;
      max-height: 250px;
    }
  }
  .ssc-section-tabs {
    display: flex;
    gap: 6px;
    margin-bottom: 12px;
  }
  .ssc-sec-tab {
    flex: 1;
    padding: 6px 4px;
    background: #1d63d8;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s;
  }
  .ssc-sec-tab:hover { opacity: 0.9; }
  .ssc-sec-tab.active { background: #166534; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); }
  .ssc-sec-title {
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    margin-bottom: 12px;
  }
  body.dark .ssc-sec-title { color: #cbd5e1; }

  /* 5x5 GRID */
  .ssc-palette-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    margin-bottom: 18px;
    padding: 4px;
  }
  .ssc-q-btn {
    aspect-ratio: 1;
    border-radius: 4px;
    border: none;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
  .ssc-q-btn.unanswered { background: #1d63d8; }
  .ssc-q-btn.answered { background: #16a34a; }
  .ssc-q-btn.marked { background: #f59e0b; }
  .ssc-q-btn.active {
    outline: 3px solid #38bdf8;
    outline-offset: 1px;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
  }

  /* SECTION ANALYSIS BOX */
  .ssc-analysis-box {
    margin-top: auto;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    overflow: hidden;
  }
  body.dark .ssc-analysis-box { background: #0f172a; border-color: #334155; }
  .ssc-analysis-header {
    background: #e2e8f0;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 700;
    color: #334155;
  }
  body.dark .ssc-analysis-header { background: #334155; color: #f1f5f9; }
  .ssc-analysis-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    font-size: 12px;
    color: #475569;
    border-bottom: 1px solid #f1f5f9;
  }
  body.dark .ssc-analysis-row { border-color: #1e293b; color: #94a3b8; }
  .ssc-analysis-row:last-child { border-bottom: none; }
  .ssc-analysis-row strong { color: #1e293b; font-weight: 700; }
  body.dark .ssc-analysis-row strong { color: #f1f5f9; }

  /* RIGHT COLUMN: QUESTION & ACTIONS */
  .ssc-right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 20px 28px;
    background: #ffffff;
  }
  body.dark .ssc-right-column { background: #1e293b; }
  .ssc-q-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
  }
  body.dark .ssc-q-topbar { border-color: #334155; }
  .ssc-q-actions { display: flex; gap: 10px; flex-wrap: wrap; }
  .ssc-btn-blue {
    background: #1d63d8;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    font-family: 'Inter', sans-serif;
  }
  .ssc-btn-blue:hover { background: #174eb2; }
  .ssc-q-info {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 12px;
    color: #475569;
  }
  body.dark .ssc-q-info { color: #94a3b8; }
  .ssc-q-content { flex: 1; }
  .ssc-q-num {
    font-size: 16px;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 14px;
  }
  body.dark .ssc-q-num { color: #f1f5f9; }
  .ssc-q-text {
    font-size: 15px;
    line-height: 1.7;
    color: #1e293b;
    margin-bottom: 24px;
    font-weight: 500;
  }
  body.dark .ssc-q-text { color: #e2e8f0; }
  .ssc-options-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .ssc-option-item {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1.5px solid #e2e8f0;
    transition: all 0.15s;
    background: #ffffff;
  }
  body.dark .ssc-option-item { background: #0f172a; border-color: #334155; }
  .ssc-option-item:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
  body.dark .ssc-option-item:hover { background: #1e293b; }
  .ssc-option-item.selected {
    background: #eff6ff;
    border-color: #1d63d8;
  }
  body.dark .ssc-option-item.selected { background: #172554; border-color: #3b82f6; }
  .ssc-option-radio {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #94a3b8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.15s;
  }
  .ssc-option-item.selected .ssc-option-radio {
    border-color: #1d63d8;
  }
  .ssc-option-radio-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #1d63d8;
    display: none;
  }
  .ssc-option-item.selected .ssc-option-radio-dot {
    display: block;
  }
  .ssc-option-text {
    font-size: 14px;
    color: #1e293b;
    line-height: 1.5;
  }
  body.dark .ssc-option-text { color: #cbd5e1; }

  /* FOOTER BAR */
  .ssc-footer-bar {
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  body.dark .ssc-footer-bar { background: #0f172a; border-color: #334155; }
  .ssc-btn-clear {
    background: #dc2626;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 9px 22px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    font-family: 'Inter', sans-serif;
  }
  .ssc-btn-clear:hover { background: #b91c1c; }
  .ssc-btn-submit {
    background: #15803d;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 9px 28px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    font-family: 'Inter', sans-serif;
  }
  .ssc-btn-submit:hover { background: #166534; }
  .ssc-btn-nav {
    background: #ffffff;
    color: #334155;
    border: 1.5px solid #cbd5e1;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  body.dark .ssc-btn-nav { background: #1e293b; border-color: #334155; color: #cbd5e1; }
  .ssc-btn-nav:hover { background: #f1f5f9; }

  """

    content = content[:exam_css_start] + new_exam_css + content[result_css_start:]

    # Remove Jobs CSS and replace with Leaderboard (White Theme) and Study Plan CSS
    jobs_css_start = content.find('/* ── JOBS ── */')
    profile_css_start = content.find('/* ── PROFILE ── */')
    assert jobs_css_start != -1 and profile_css_start != -1, "Could not find JOBS or PROFILE CSS"

    new_lb_sp_css = """/* ── LEADERBOARD (IMAGE 2 REF - WHITE BACKGROUND THEME) ── */
  .leaderboard-container {
    background: #ffffff;
    border-radius: 16px;
    padding: 32px 28px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  }
  .leaderboard-header {
    text-align: center;
    margin-bottom: 28px;
  }
  .leaderboard-podium {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }
  .podium-card {
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px 20px;
    text-align: center;
    position: relative;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;
    width: 180px;
  }
  .podium-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px -5px rgba(0, 0, 0, 0.08);
  }
  .podium-card.rank-1 {
    width: 210px;
    padding: 32px 24px;
    border-color: #f59e0b;
    background: linear-gradient(180deg, #fffbeb 0%, #ffffff 40%);
    margin-bottom: 20px;
  }
  .podium-card.rank-2 {
    border-color: #94a3b8;
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 40%);
  }
  .podium-card.rank-3 {
    border-color: #d97706;
    background: linear-gradient(180deg, #fff7ed 0%, #ffffff 40%);
  }
  .podium-crown {
    font-size: 28px;
    position: absolute;
    top: -16px;
    animation: crownBounce 2s infinite ease-in-out;
  }
  @keyframes crownBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  .podium-medal {
    font-size: 24px;
    margin-bottom: 6px;
  }
  .podium-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .podium-avatar.av-1 { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
  .podium-avatar.av-2 { background: linear-gradient(135deg, #8b5cf6, #6366f1); }
  .podium-avatar.av-3 { background: linear-gradient(135deg, #f59e0b, #ea580c); }

  .podium-name {
    font-size: 15px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 4px;
  }
  .podium-score {
    font-size: 22px;
    font-weight: 800;
    color: #f59e0b;
    margin-bottom: 4px;
  }
  .podium-card.rank-2 .podium-score { color: #475569; }
  .podium-card.rank-3 .podium-score { color: #b45309; }
  .podium-streak {
    font-size: 11px;
    font-weight: 700;
    color: #dc2626;
    background: #fee2e2;
    padding: 3px 8px;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 10px;
  }
  .podium-base-badge {
    font-size: 12px;
    font-weight: 800;
    color: #64748b;
    letter-spacing: 1px;
  }
  .podium-card.rank-1 .podium-base-badge {
    color: #b45309;
    background: #fef3c7;
    padding: 4px 16px;
    border-radius: 10px;
  }

  /* LEADERBOARD TABLE */
  .lb-table-wrap {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    overflow-x: auto;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
  }
  .lb-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    text-align: left;
  }
  .lb-table th {
    background: #f8fafc;
    padding: 14px 18px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748b;
    border-bottom: 1.5px solid #e2e8f0;
  }
  .lb-table td {
    padding: 14px 18px;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
    vertical-align: middle;
  }
  .lb-table tr:hover td {
    background: #f8fafc;
  }
  .lb-table tr.user-row {
    background: #faf5ff;
    border-left: 4px solid #7c3aed;
  }
  .lb-table tr.user-row td {
    border-bottom: 1.5px solid #ede9fe;
  }
  .lb-student-cell {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .lb-avatar-sm {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    flex-shrink: 0;
  }
  .lb-name-group .lb-name {
    font-weight: 700;
    font-size: 13px;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .lb-badge-adept {
    font-size: 10px;
    font-weight: 700;
    color: #0d9488;
    background: #ccfbf1;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .lb-badge-practitioner {
    font-size: 10px;
    font-weight: 700;
    color: #0284c7;
    background: #e0f2fe;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .lb-name-group .lb-roll {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 1px;
  }
  .lb-score {
    font-weight: 800;
    font-size: 15px;
    color: #7c3aed;
  }
  .lb-streak-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 700;
    color: #ef4444;
    background: #fee2e2;
    padding: 4px 10px;
    border-radius: 12px;
  }

  /* ── STRUCTURED STUDY PLAN ── */
  .studyplan-header-banner {
    background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%);
    color: #ffffff;
    border-radius: 16px;
    padding: 28px 24px;
    margin-bottom: 24px;
  }
  .studyplan-search-wrap {
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 14px;
    padding: 16px 20px;
    margin-bottom: 24px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.03);
  }
  body.dark .studyplan-search-wrap { background: #1e293b; border-color: #334155; }
  .studyplan-search-row {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  .btn-search-action {
    padding: 10px 20px;
    background: #1d63d8;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .btn-search-action:hover { background: #174eb2; }
  .btn-search-reset {
    padding: 10px 16px;
    background: #f1f5f9;
    color: #475569;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  body.dark .btn-search-reset { background: #0f172a; border-color: #334155; color: #94a3b8; }
  .topic-card.highlight-top {
    border: 2.5px solid #1d63d8 !important;
    box-shadow: 0 8px 24px rgba(29, 99, 216, 0.18) !important;
    animation: pulseBorder 1.5s infinite alternate;
  }
  @keyframes pulseBorder {
    0% { border-color: #1d63d8; }
    100% { border-color: #38bdf8; }
  }

  """

    content = content[:jobs_css_start] + new_lb_sp_css + content[profile_css_start:]

    # 2. Update Sidebar navigation: remove Jobs, add Study Plan and Leaderboard
    old_sidebar_nav = """    <div class="nav-item active" id="nav-tests" onclick="navigate('tests')"><span class="nav-icon">🎯</span> Tests</div>
    <div class="nav-item" id="nav-topics" onclick="navigate('topics')"><span class="nav-icon">📚</span> Topics</div>
    <div class="nav-item" id="nav-jobs" onclick="navigate('jobs')"><span class="nav-icon">💼</span> Jobs</div>
    <div class="nav-item" id="nav-profile" onclick="navigate('profile')"><span class="nav-icon">👤</span> Profile</div>
    <div class="nav-item" id="nav-analytics" onclick="navigate('analytics')"><span class="nav-icon">📊</span> Analytics</div>"""

    new_sidebar_nav = """    <div class="nav-item active" id="nav-tests" onclick="navigate('tests')"><span class="nav-icon">🎯</span> Tests</div>
    <div class="nav-item" id="nav-studyplan" onclick="navigate('studyplan')"><span class="nav-icon">📅</span> Study Plan</div>
    <div class="nav-item" id="nav-leaderboard" onclick="navigate('leaderboard')"><span class="nav-icon">🏆</span> Leaderboard</div>
    <div class="nav-item" id="nav-profile" onclick="navigate('profile')"><span class="nav-icon">👤</span> Profile</div>
    <div class="nav-item" id="nav-analytics" onclick="navigate('analytics')"><span class="nav-icon">📊</span> Analytics</div>"""

    assert old_sidebar_nav in content, "Could not find old sidebar nav"
    content = content.replace(old_sidebar_nav, new_sidebar_nav)

    # 3. Update Bottom navigation for mobile: remove Jobs, add Study Plan & Leaderboard
    old_bottom_nav = """      <div class="bottom-nav-item active" id="bnav-tests" onclick="navigate('tests')"><span class="bottom-nav-icon">🎯</span>Tests</div>
      <div class="bottom-nav-item" id="bnav-topics" onclick="navigate('topics')"><span class="bottom-nav-icon">📚</span>Topics</div>
      <div class="bottom-nav-item" id="bnav-jobs" onclick="navigate('jobs')"><span class="bottom-nav-icon">💼</span>Jobs</div>
      <div class="bottom-nav-item" id="bnav-profile" onclick="navigate('profile')"><span class="bottom-nav-icon">👤</span>Profile</div>
      <div class="bottom-nav-item" id="bnav-analytics" onclick="navigate('analytics')"><span class="bottom-nav-icon">📊</span>Analytics</div>"""

    new_bottom_nav = """      <div class="bottom-nav-item active" id="bnav-tests" onclick="navigate('tests')"><span class="bottom-nav-icon">🎯</span>Tests</div>
      <div class="bottom-nav-item" id="bnav-studyplan" onclick="navigate('studyplan')"><span class="bottom-nav-icon">📅</span>Study Plan</div>
      <div class="bottom-nav-item" id="bnav-leaderboard" onclick="navigate('leaderboard')"><span class="bottom-nav-icon">🏆</span>Ranks</div>
      <div class="bottom-nav-item" id="bnav-profile" onclick="navigate('profile')"><span class="bottom-nav-icon">👤</span>Profile</div>
      <div class="bottom-nav-item" id="bnav-analytics" onclick="navigate('analytics')"><span class="bottom-nav-icon">📊</span>Analytics</div>"""

    assert old_bottom_nav in content, "Could not find old bottom nav"
    content = content.replace(old_bottom_nav, new_bottom_nav)

    # 4. Activate top search button
    content = content.replace(
        """<button onclick="showToast('info','🔍 Global search coming soon!')" style="background:none;border:none;cursor:pointer;font-size:18px;color:#64748b;padding:4px;" title="Search">🔍</button>""",
        """<button onclick="activateTopicSearchPrompt()" style="background:none;border:none;cursor:pointer;font-size:18px;color:#64748b;padding:4px;" title="Search Topics in Study Plan">🔍</button>"""
    )

    # 5. Replace Exam Screen HTML Markup with SSC CGL Mock Test Pattern (Image 1 Ref)
    exam_html_start = content.find('<div id="exam-screen">')
    modals_start = content.find('<!-- ══════════════════════════════════════════════════════════════ -->\n<!--  MODALS')
    if modals_start == -1:
        modals_start = content.find('<!-- SUBMIT CONFIRM MODAL -->')
    assert exam_html_start != -1 and modals_start != -1, "Could not find exam-screen or modals start"

    new_exam_html = """<div id="exam-screen">
  <!-- Top Bar matching Image 1 -->
  <div class="ssc-top-bar">
    <div class="ssc-title" id="ssc-exam-main-title">SSC CGL MOCK TEST</div>
    <div class="ssc-timer-wrap">
      <div class="ssc-timer-lbl">Time Left</div>
      <div class="ssc-timer-val" id="ssc-digital-timer">00 : 15 : 00</div>
    </div>
    <div class="ssc-header-icons">
      <div class="ssc-circle-icon" title="Proctoring Webcam Active">📷</div>
      <div class="ssc-circle-icon" id="ssc-avatar-icon" title="Candidate">👤</div>
    </div>
  </div>

  <!-- Sub-Bar matching Image 1 -->
  <div class="ssc-sub-bar">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <button class="ssc-zoom-btn" onclick="adjustExamZoom(1)">Zoom (+)</button>
      <button class="ssc-zoom-btn" onclick="adjustExamZoom(-1)">Zoom (-)</button>
      <span class="ssc-exam-tag" id="ssc-exam-tag">SSC-CGL Tier 1</span>
    </div>
    <div class="ssc-candidate-meta">
      Roll No : <span id="ssc-roll-text">COC-2026-001</span> [<span id="ssc-name-text">ASPIRANT</span>]
    </div>
  </div>

  <!-- Yellow Instructions Strip matching Image 1 -->
  <div class="ssc-instructions-strip">
    <strong>SYMBOLS &nbsp;INSTRUCTIONS</strong> &nbsp;Please note that this is a mock test for practice purposes.
  </div>

  <!-- Main Body: Two Columns (Left: Palette & Analysis, Right: Question Area) -->
  <div class="ssc-body">
    <!-- Left Column: Question Palette & Section Analysis -->
    <div class="ssc-left-column">
      <div class="ssc-section-tabs">
        <button class="ssc-sec-tab active" id="sec-tab-0" onclick="switchExamSection(0)">PART-A</button>
        <button class="ssc-sec-tab" id="sec-tab-1" onclick="switchExamSection(1)">PART-B</button>
        <button class="ssc-sec-tab" id="sec-tab-2" onclick="switchExamSection(2)">PART-C</button>
        <button class="ssc-sec-tab" id="sec-tab-3" onclick="switchExamSection(3)">PART-D</button>
      </div>
      <div class="ssc-sec-title" id="ssc-sec-title">Quantitative Aptitude</div>

      <!-- 5x5 Grid (25 questions) -->
      <div class="ssc-palette-grid" id="ssc-palette-grid"></div>

      <!-- Section Analysis Box matching Image 1 -->
      <div class="ssc-analysis-box">
        <div class="ssc-analysis-header" id="ssc-analysis-header">PART-A Analysis</div>
        <div class="ssc-analysis-row">
          <span>Answered:</span>
          <strong id="ssc-stat-answered">0</strong>
        </div>
        <div class="ssc-analysis-row">
          <span>Not Answered:</span>
          <strong id="ssc-stat-notanswered">25</strong>
        </div>
        <div class="ssc-analysis-row">
          <span>Marked for Review:</span>
          <strong id="ssc-stat-marked">0</strong>
        </div>
      </div>
    </div>

    <!-- Right Column: Question Display & Controls -->
    <div class="ssc-right-column">
      <div class="ssc-q-topbar">
        <div class="ssc-q-actions">
          <button class="ssc-btn-blue" onclick="markAndNext()">Mark for Review &amp; Next</button>
          <button class="ssc-btn-blue" onclick="saveAndNextCurrent()">Save &amp; Next</button>
        </div>
        <div class="ssc-q-info">
          <span>Total Questions Answered: <strong id="ssc-total-answered-counter">0</strong></span>
          <div style="display:flex;align-items:center;gap:6px;">
            <span>View in:</span>
            <select class="ssc-select" style="padding:4px 8px;border:1px solid #cbd5e1;border-radius:4px;font-size:12px;background:#fff;">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
      </div>

      <div class="ssc-q-content" id="ssc-q-content">
        <!-- Rendered question text & circular radio options -->
      </div>
    </div>
  </div>

  <!-- Bottom Action Bar matching Image 1 -->
  <div class="ssc-footer-bar">
    <button class="ssc-btn-clear" onclick="clearCurrentAnswer()">Clear Response</button>
    <div style="display:flex;gap:10px;">
      <button class="ssc-btn-nav" onclick="prevQuestion()">◀ Previous</button>
      <button class="ssc-btn-nav" onclick="nextQuestion()">Next ▶</button>
    </div>
    <button class="ssc-btn-submit" onclick="showSubmitModal()">Submit</button>
  </div>
</div>

"""

    content = content[:exam_html_start] + new_exam_html + content[modals_start:]

    # Write partial file to avoid loss
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Phase 1 updates written successfully.")

if __name__ == '__main__':
    update_index_html()
