import re

def apply_phase2():
    with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    print(f"File length at start of Phase 2: {len(content)}")

    # 1. Update Navigation section titles and router switch in index.html
    old_nav_block = """  const sectionTitles = {
    tests:'Tests Dashboard', topics:'Topics Directory',
    jobs:'Jobs Portal', profile:'My Profile',
    analytics:'My Analytics', admin:'Admin Dashboard', settings:'Settings'
  };"""

    new_nav_block = """  const sectionTitles = {
    tests:'Tests Dashboard', studyplan:'Structured Study Plan',
    topics:'Structured Study Plan', leaderboard:'Aspirants Leaderboard',
    profile:'My Profile', analytics:'My Analytics',
    admin:'Admin Dashboard', settings:'Settings'
  };"""

    assert old_nav_block in content, "Could not find old_nav_block"
    content = content.replace(old_nav_block, new_nav_block)

    old_router_switch = """  switch(section) {
    case 'tests': html = renderTests(); break;
    case 'topics': html = renderTopicsDirectory(); break;
    case 'jobs': html = renderJobs(); break;
    case 'profile': html = renderProfile(); break;
    case 'analytics': html = renderAnalytics(); break;
    case 'admin': html = APP.currentUser?.role==='admin' ? renderAdmin() : '<div class="empty-state"><div class="icon">⛔</div><p>Access denied. Admin only.</p></div>'; break;
    case 'settings': html = renderSettings(); break;
    default: html = renderTests();
  }"""

    new_router_switch = """  switch(section) {
    case 'tests': html = renderTests(); break;
    case 'studyplan':
    case 'topics': html = renderStudyPlan(); break;
    case 'leaderboard': html = renderLeaderboard(); break;
    case 'profile': html = renderProfile(); break;
    case 'analytics': html = renderAnalytics(); break;
    case 'admin': html = APP.currentUser?.role==='admin' ? renderAdmin() : '<div class="empty-state"><div class="icon">⛔</div><p>Access denied. Admin only.</p></div>'; break;
    case 'settings': html = renderSettings(); break;
    default: html = renderTests();
  }"""

    assert old_router_switch in content, "Could not find old_router_switch"
    content = content.replace(old_router_switch, new_router_switch)

    # 2. In renderTests(), update Browse Topics button to Study Plan button & enhance Search bar
    old_test_header_btn = """<button onclick="navigate('topics')" style="padding:8px 16px;background:#1e3a5f;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;">📚 Browse Topics</button>"""
    new_test_header_btn = """<button onclick="navigate('studyplan')" style="padding:8px 16px;background:#1d63d8;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;">📅 Study Plan</button>"""
    if old_test_header_btn in content:
        content = content.replace(old_test_header_btn, new_test_header_btn)

    old_topic_search_input = """    <!-- Topic search -->
    <input type="text" id="topic-search" placeholder="🔍 Search topics by name or subject..."
      oninput="filterTopicsSearch(this.value)"
      style="width:100%;padding:10px 16px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;margin-bottom:14px;font-family:'Inter',sans-serif;outline:none;background:#fff;color:#1e293b;transition:border-color 0.2s;"
      onfocus="this.style.borderColor='#1e3a5f'" onblur="this.style.borderColor='#e2e8f0'"/>"""

    new_topic_search_input = """    <!-- Topic search with dedicated search button and instant float to top -->
    <div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap;align-items:center;">
      <input type="text" id="topic-search" placeholder="🔍 Search topic (Boat, Train, Roots, Pipes, Interest, Similarity)..."
        oninput="filterTopicsSearch(this.value)"
        onkeydown="if(event.key==='Enter') executeTopicSearchFromInput()"
        style="flex:1;min-width:240px;padding:11px 16px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;font-family:'Inter',sans-serif;outline:none;background:#fff;color:#1e293b;transition:border-color 0.2s;"
        onfocus="this.style.borderColor='#1d63d8'" onblur="this.style.borderColor='#e2e8f0'"/>
      <button onclick="executeTopicSearchFromInput()" style="padding:11px 22px;background:#1d63d8;color:#fff;border:none;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;font-family:'Inter',sans-serif;transition:background 0.2s;">🔍 Search Topic</button>
      <button id="btn-clear-test-search" onclick="clearTopicSearchFromInput()" style="padding:11px 16px;background:#f1f5f9;color:#475569;border:1px solid #cbd5e1;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;font-family:'Inter',sans-serif;display:none;">✖ Reset</button>
    </div>"""

    if old_topic_search_input in content:
        content = content.replace(old_topic_search_input, new_topic_search_input)

    # 3. Update filterTopicsSearch to float matching topics to the VERY TOP and highlight them
    old_filter_search = """// Search filter for the text input
function filterTopicsSearch(val) {
  const src = (window.ALL_TOPICS && window.ALL_TOPICS.length > 0) ? window.ALL_TOPICS : TOPICS;
  const q = val.trim().toLowerCase();
  const filtered = q === '' ? src : src.filter(rawT => {
    const t = normalizeTopic(rawT);
    const combined = (t.name + ' ' + (t.subtitle||'') + ' ' + (t.overview||'')).toLowerCase();
    return combined.includes(q);
  });
  const grid = document.getElementById('topics-grid');
  if(!grid) return;
  if(filtered.length===0) { grid.innerHTML=`<div class="empty-state" style="grid-column:1/-1;"><div class="icon">🔍</div><p>No topics found for "${val}".</p></div>`; return; }
  grid.innerHTML = filtered.map(t=>renderTopicCard(t)).join('');
}"""

    new_filter_search = """// Search filter for the text input: FLOATS MATCHING TOPICS TO THE TOP!
function filterTopicsSearch(val) {
  const src = (window.ALL_TOPICS && window.ALL_TOPICS.length > 0) ? window.ALL_TOPICS : TOPICS;
  const q = val.trim().toLowerCase();
  const resetBtn = document.getElementById('btn-clear-test-search');
  if (resetBtn) resetBtn.style.display = q ? 'inline-block' : 'none';

  const grid = document.getElementById('topics-grid');
  if (!grid) return;

  if (q === '') {
    grid.innerHTML = src.map(t => renderTopicCard(t)).join('');
    return;
  }

  // Partition topics: matching topics first, followed by others or only matches
  const matches = [];
  const nonMatches = [];

  src.forEach(rawT => {
    const t = normalizeTopic(rawT);
    const combined = (t.name + ' ' + (t.subtitle||'') + ' ' + (t.overview||'') + ' ' + (t.concepts||[]).join(' ')).toLowerCase();
    if (combined.includes(q)) {
      matches.push(rawT);
    } else {
      nonMatches.push(rawT);
    }
  });

  if (matches.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;background:#fff;border-radius:12px;padding:36px;border:1px dashed #cbd5e1;">
      <div class="icon" style="font-size:36px;">🔍</div>
      <p style="font-size:15px;color:#475569;margin-top:8px;">No topics found matching "<strong>${val}</strong>".</p>
      <button onclick="clearTopicSearchFromInput()" style="margin-top:12px;padding:8px 18px;background:#1d63d8;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">View All Topics</button>
    </div>`;
    return;
  }

  // Put matches at the VERY TOP with top-match highlight card
  const reordered = [...matches, ...nonMatches];
  grid.innerHTML = reordered.map((rawT, idx) => {
    const isTopMatch = idx < matches.length;
    return renderTopicCard(rawT, isTopMatch);
  }).join('');

  // Smooth scroll so the top match is front and center
  grid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function executeTopicSearchFromInput() {
  const inp = document.getElementById('topic-search');
  if (inp) filterTopicsSearch(inp.value);
}

function clearTopicSearchFromInput() {
  const inp = document.getElementById('topic-search');
  if (inp) inp.value = '';
  filterTopicsSearch('');
}"""

    assert old_filter_search in content, "Could not find old_filter_search"
    content = content.replace(old_filter_search, new_filter_search)

    # 4. Enhance renderTopicCard to accept isTopMatch flag
    old_render_topic_card = """function renderTopicCard(rawT) {
  const t = normalizeTopic(rawT);
  if(!t) return '';
  return `<div class="topic-card" onclick="openTopicPage(${t.id})">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div class="topic-badge">${t.icon||'📚'} ${(t.shortName || t.name).toUpperCase()}</div>
      ${t.done>0?`<span class="badge-pill green">✅ ${t.done} done</span>`:`<span class="badge-pill gray">Not Started</span>`}
    </div>
    <div>
      <div class="topic-title">${t.name}</div>
      <div class="topic-subtitle">${t.subtitle}</div>
    </div>
    <div>
      <div class="progress-info"><span>Progress: ${t.done}/${t.tests} Tests</span><span>${t.pct}%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${t.pct}%"></div></div>
    </div>
    <div class="topic-meta">
      <div class="meta-item">📚 1,000 MCQs</div>
      <div class="meta-item">🧪 40 Tests</div>
      <div class="meta-item">📝 25 Qs/Test</div>
      ${t.done>0?`<div class="meta-item">🎯 Avg: ${t.avgScore}/25</div><div class="meta-item">📈 ${t.accuracy}% Acc.</div>`:''}
    </div>
    ${t.best>0?`<div style="font-size:12px;color:#64748b;">🏆 Best Score: <strong>${t.best}/25</strong></div>`:''}
    <div style="display:flex;justify-content:flex-end;"><button class="btn-view" onclick="event.stopPropagation();openTopicPage(${t.id})">VIEW TOPIC →</button></div>
  </div>`;
}"""

    new_render_topic_card = """function renderTopicCard(rawT, isTopMatch = false) {
  const t = normalizeTopic(rawT);
  if(!t) return '';
  const matchHighlightClass = isTopMatch ? 'highlight-top' : '';
  const matchBadge = isTopMatch ? `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 10px;background:#dbeafe;color:#1e40af;font-size:10px;font-weight:800;border-radius:20px;letter-spacing:0.5px;">⭐ TOP SEARCH MATCH</span>` : '';

  return `<div class="topic-card ${matchHighlightClass}" onclick="openTopicPage(${t.id})">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">
      <div class="topic-badge">${t.icon||'📚'} ${(t.shortName || t.name).toUpperCase()}</div>
      <div style="display:flex;gap:6px;align-items:center;">
        ${matchBadge}
        ${t.done>0?`<span class="badge-pill green">✅ ${t.done}/40 Tests</span>`:`<span class="badge-pill gray">Not Started</span>`}
      </div>
    </div>
    <div>
      <div class="topic-title">${t.name}</div>
      <div class="topic-subtitle">${t.subtitle}</div>
    </div>
    <div>
      <div class="progress-info"><span>Progress: ${t.done}/${t.tests} Tests</span><span>${t.pct}%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${t.pct}%"></div></div>
    </div>
    <div class="topic-meta">
      <div class="meta-item">📚 1,000 MCQs</div>
      <div class="meta-item">🧪 40 Tests</div>
      <div class="meta-item">📝 25 Qs/Test</div>
      ${t.done>0?`<div class="meta-item">🎯 Avg: ${t.avgScore}/25</div><div class="meta-item">📈 ${t.accuracy}% Acc.</div>`:''}
    </div>
    ${t.best>0?`<div style="font-size:12px;color:#64748b;">🏆 Best Score: <strong>${t.best}/25</strong></div>`:''}
    <div style="display:flex;justify-content:flex-end;"><button class="btn-view" onclick="event.stopPropagation();openTopicPage(${t.id})">VIEW TOPIC →</button></div>
  </div>`;
}"""

    assert old_render_topic_card in content, "Could not find old_render_topic_card"
    content = content.replace(old_render_topic_card, new_render_topic_card)

    # 5. Replace renderTopicsDirectory with renderStudyPlan, liveSearchStudyPlan, executeTopicSearch, clearTopicSearch
    old_topics_dir_start = content.find('// ═══════════════════════════════════════════════════════════════\n//  TOPICS DIRECTORY')
    circles_start = content.find('// ═══════════════════════════════════════════════════════════════\n//  CIRCLES')
    assert old_topics_dir_start != -1 and circles_start != -1, "Could not find TOPICS DIRECTORY or CIRCLES section"

    new_study_plan_code = """// ═══════════════════════════════════════════════════════════════
//  STRUCTURED STUDY PLAN (REPLACING TOPICS DIRECTORY)
// ═══════════════════════════════════════════════════════════════
function renderStudyPlan() {
  const src = (window.ALL_TOPICS && window.ALL_TOPICS.length > 0) ? window.ALL_TOPICS : TOPICS;
  const totalTopics = src.length;
  const totalTests = totalTopics * 40;
  const totalMCQs = totalTopics * 1000;

  let totalCompleted = 0;
  src.forEach(t => {
    const norm = normalizeTopic(t);
    totalCompleted += (norm.done || 0);
  });
  const overallPct = Math.round((totalCompleted / totalTests) * 100);

  return `
    <div class="studyplan-header-banner">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="font-family:'Newsreader',serif;font-size:28px;font-weight:700;margin-bottom:6px;">📅 Master 40-Day Quantitative & Technical Study Plan</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.85);max-width:700px;line-height:1.6;">
            A structured, syllabus-mapped pathway across <strong>${totalTopics} Core Examination Topics</strong>. Each topic provides <strong>40 Standardized Mock Tests</strong> (Easy: 8, Medium: 8, Hard: 8, Previous: 16) with 25 MCQs and 15-minute time limits.
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:32px;font-weight:800;color:#f59e0b;font-family:'Newsreader',serif;">${overallPct}%</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1px;">Study Plan Done</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-top:20px;border-top:1px solid rgba(255,255,255,0.15);padding-top:16px;">
        <div><div style="font-size:18px;font-weight:700;">${totalTopics} Topics</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Curriculum Units</div></div>
        <div><div style="font-size:18px;font-weight:700;">${totalTests} Tests</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">40 Tests Per Topic</div></div>
        <div><div style="font-size:18px;font-weight:700;">${totalMCQs.toLocaleString()} MCQs</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Full Question Pool</div></div>
        <div><div style="font-size:18px;font-weight:700;color:#34d399;">${totalCompleted} Done</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Tests Completed</div></div>
        <div><div style="font-size:18px;font-weight:700;">15 Min</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Per Test Timer</div></div>
      </div>
    </div>

    <!-- ACTIVE TOPIC SEARCH BAR WITH INSTANT FLOAT-TO-TOP -->
    <div class="studyplan-search-wrap">
      <div style="font-size:13px;font-weight:700;color:#1e293b;margin-bottom:8px;display:flex;align-items:center;gap:6px;" class="dark-text">
        <span>🔍 Search Study Plan Topics</span>
        <span style="font-size:11px;color:#64748b;font-weight:400;">(Searching instantly floats matching topics to the very top)</span>
      </div>
      <div class="studyplan-search-row">
        <input type="text" id="sp-topic-search" placeholder="Type topic name, concept or keyword (e.g., Boat, Train, Roots, CI, Pipes, Geometry)..."
          oninput="liveSearchStudyPlan(this.value)"
          onkeydown="if(event.key==='Enter') executeTopicSearch()"
          style="flex:1;min-width:240px;padding:11px 16px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;font-family:'Inter',sans-serif;outline:none;background:#fff;color:#1e293b;"
          onfocus="this.style.borderColor='#1d63d8'" onblur="this.style.borderColor='#e2e8f0'"/>
        <button class="btn-search-action" onclick="executeTopicSearch()">🔍 Search Topic</button>
        <button class="btn-search-reset" id="btn-sp-clear" onclick="clearTopicSearch()" style="display:none;">✖ Reset</button>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:12px;flex-wrap:wrap;">
        <span style="font-size:11px;color:#64748b;font-weight:600;">Quick Topics:</span>
        <button onclick="quickTagSearch('Boat & Stream')" style="padding:4px 10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;font-size:11px;color:#1d4ed8;font-weight:600;cursor:pointer;">⛵ Boat &amp; Stream</button>
        <button onclick="quickTagSearch('Train Problems')" style="padding:4px 10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;font-size:11px;color:#1d4ed8;font-weight:600;cursor:pointer;">🚆 Train Problems</button>
        <button onclick="quickTagSearch('Nature of Roots')" style="padding:4px 10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;font-size:11px;color:#1d4ed8;font-weight:600;cursor:pointer;">📐 Nature of Roots</button>
        <button onclick="quickTagSearch('Algebraic Identities')" style="padding:4px 10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;font-size:11px;color:#1d4ed8;font-weight:600;cursor:pointer;">✨ Algebraic Identities</button>
        <button onclick="quickTagSearch('Compound Interest')" style="padding:4px 10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;font-size:11px;color:#1d4ed8;font-weight:600;cursor:pointer;">💰 Compound Interest</button>
        <button onclick="quickTagSearch('Outlet Pipes')" style="padding:4px 10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;font-size:11px;color:#1d4ed8;font-weight:600;cursor:pointer;">🚰 Outlet Pipes</button>
        <button onclick="quickTagSearch('Triangle Similarity')" style="padding:4px 10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;font-size:11px;color:#1d4ed8;font-weight:600;cursor:pointer;">🔺 Triangle Similarity</button>
      </div>
    </div>

    <!-- Study Plan Phase Filter Tabs -->
    <div class="tab-bar" id="sp-phase-tabs" style="margin-bottom:16px;">
      <button class="tab-btn active" onclick="filterStudyPlanPhase('all', this)">All Curriculum Topics (${totalTopics})</button>
      <button class="tab-btn" onclick="filterStudyPlanPhase('motion', this)">Phase 1: Speed &amp; Motion</button>
      <button class="tab-btn" onclick="filterStudyPlanPhase('algebra', this)">Phase 2: Algebra &amp; Equations</button>
      <button class="tab-btn" onclick="filterStudyPlanPhase('rate', this)">Phase 3: Rate &amp; Commercial</button>
      <button class="tab-btn" onclick="filterStudyPlanPhase('geometry', this)">Phase 4: Geometry</button>
    </div>

    <!-- Topics Grid (Maintains exact topic cards & 40 tests) -->
    <div id="studyplan-topics-container" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;">
      ${src.map(t => renderTopicCard(t)).join('')}
    </div>
  `;
}

function liveSearchStudyPlan(query) {
  const src = (window.ALL_TOPICS && window.ALL_TOPICS.length > 0) ? window.ALL_TOPICS : TOPICS;
  const q = (query || '').trim().toLowerCase();
  const clearBtn = document.getElementById('btn-sp-clear');
  if (clearBtn) clearBtn.style.display = q ? 'inline-block' : 'none';

  const container = document.getElementById('studyplan-topics-container');
  if (!container) return;

  if (q === '') {
    container.innerHTML = src.map(t => renderTopicCard(t)).join('');
    return;
  }

  const matches = [];
  const others = [];

  src.forEach(rawT => {
    const t = normalizeTopic(rawT);
    const text = (t.name + ' ' + (t.subtitle || '') + ' ' + (t.overview || '') + ' ' + (t.concepts || []).join(' ')).toLowerCase();
    if (text.includes(q)) {
      matches.push(rawT);
    } else {
      others.push(rawT);
    }
  });

  if (matches.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column:1/-1;background:#fff;border-radius:12px;padding:36px;border:1px dashed #cbd5e1;">
      <div class="icon" style="font-size:36px;">🔍</div>
      <p style="font-size:15px;color:#475569;margin-top:8px;">No study plan topics found matching "<strong>${query}</strong>".</p>
      <button onclick="clearTopicSearch()" style="margin-top:12px;padding:8px 18px;background:#1d63d8;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Reset Search</button>
    </div>`;
    return;
  }

  // Matching topics float to the VERY TOP!
  const sorted = [...matches, ...others];
  container.innerHTML = sorted.map((rawT, i) => {
    const isTopMatch = i < matches.length;
    return renderTopicCard(rawT, isTopMatch);
  }).join('');

  // Scroll to top of topics
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function executeTopicSearch() {
  const inp = document.getElementById('sp-topic-search');
  if (inp) liveSearchStudyPlan(inp.value);
}

function clearTopicSearch() {
  const inp = document.getElementById('sp-topic-search');
  if (inp) inp.value = '';
  liveSearchStudyPlan('');
}

function quickTagSearch(tag) {
  const inp = document.getElementById('sp-topic-search');
  if (inp) {
    inp.value = tag;
    liveSearchStudyPlan(tag);
  }
}

function filterStudyPlanPhase(phase, btn) {
  document.querySelectorAll('#sp-phase-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const src = (window.ALL_TOPICS && window.ALL_TOPICS.length > 0) ? window.ALL_TOPICS : TOPICS;
  const container = document.getElementById('studyplan-topics-container');
  if (!container) return;

  if (phase === 'all') {
    container.innerHTML = src.map(t => renderTopicCard(t)).join('');
    return;
  }

  const phaseKeywords = {
    motion: ['boat', 'train', 'relative', 'speed'],
    algebra: ['roots', 'algebra', 'linear', 'equation', 'identities'],
    rate: ['interest', 'pipes', 'cistern', 'work', 'efficiency', 'time'],
    geometry: ['triangle', 'similarity', 'circle', 'angle']
  };

  const keywords = phaseKeywords[phase] || [];
  const filtered = src.filter(rawT => {
    const t = normalizeTopic(rawT);
    const combined = (t.name + ' ' + (t.subtitle || '')).toLowerCase();
    return keywords.some(k => combined.includes(k));
  });

  container.innerHTML = filtered.length
    ? filtered.map(t => renderTopicCard(t)).join('')
    : `<div class="empty-state" style="grid-column:1/-1;"><p>No topics in this phase.</p></div>`;
}

function activateTopicSearchPrompt() {
  navigate('studyplan');
  setTimeout(() => {
    const inp = document.getElementById('sp-topic-search');
    if (inp) {
      inp.focus();
      inp.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 250);
}

"""

    content = content[:old_topics_dir_start] + new_study_plan_code + content[circles_start:]

    # 6. Replace JOBS array and renderJobs() with Leaderboard section (White background matching Image 2)
    jobs_start = content.find('// ═══════════════════════════════════════════════════════════════\n//  JOBS')
    profile_start = content.find('// ═══════════════════════════════════════════════════════════════\n//  PROFILE')
    assert jobs_start != -1 and profile_start != -1, "Could not find JOBS or PROFILE code start"

    new_leaderboard_code = """// ═══════════════════════════════════════════════════════════════
//  LEADERBOARD (WHITE THEME — IMAGE 2 REFERENCE)
// ═══════════════════════════════════════════════════════════════
function renderLeaderboard() {
  const u = APP.currentUser || { name: 'ASPIRANT', roll: 'COC-2026-001' };
  const userScore = Math.max(264, (APP.stats?.score || 47) * 4);

  // Rankings data directly matching Image 2 with top podium and status badges
  const rankings = [
    { rank: 1, name: 'Sampreeth C H', badge: 'ADEPT', badgeType: 'adept', roll: '4PS23CS140', score: 374, quant: 727, reasoning: 854, tests: 40, streak: '80d', avatarColor: '#3b82f6', isUser: false },
    { rank: 2, name: 'Arshiya Anjum', badge: 'ADEPT', badgeType: 'adept', roll: '234G1A0512', score: 314, quant: 480, reasoning: 904, tests: 36, streak: '92d', avatarColor: '#8b5cf6', isUser: false },
    { rank: 3, name: 'Muhammed Ikram', badge: 'PRACTITIONER', badgeType: 'practitioner', roll: '234G1A3397', score: 282, quant: 545, reasoning: 392, tests: 32, streak: '91d', avatarColor: '#0d9488', isUser: false },
    { rank: 4, name: 'Priya Sharma', badge: 'ADEPT', badgeType: 'adept', roll: '22BCE1042', score: 276, quant: 510, reasoning: 410, tests: 28, streak: '65d', avatarColor: '#ec4899', isUser: false },
    { rank: 5, name: `${u.name} (YOU)`, badge: 'PRACTITIONER', badgeType: 'practitioner', roll: u.roll || 'COC-2026-001', score: userScore, quant: 480, reasoning: 390, tests: 25, streak: `${APP.stats?.streak || 3}d`, avatarColor: '#f59e0b', isUser: true },
    { rank: 6, name: 'Rahul Verma', badge: 'PRACTITIONER', badgeType: 'practitioner', roll: '21CS089', score: 250, quant: 430, reasoning: 380, tests: 24, streak: '48d', avatarColor: '#6366f1', isUser: false },
    { rank: 7, name: 'Sneha Patel', badge: 'ADEPT', badgeType: 'adept', roll: '23IT044', score: 238, quant: 410, reasoning: 360, tests: 22, streak: '52d', avatarColor: '#10b981', isUser: false },
    { rank: 8, name: 'Vikram Singh', badge: 'PRACTITIONER', badgeType: 'practitioner', roll: '22EC102', score: 224, quant: 390, reasoning: 340, tests: 20, streak: '39d', avatarColor: '#0284c7', isUser: false },
    { rank: 9, name: 'Ananya Reddy', badge: 'ADEPT', badgeType: 'adept', roll: '23CS115', score: 215, quant: 380, reasoning: 330, tests: 19, streak: '35d', avatarColor: '#f97316', isUser: false },
    { rank: 10, name: 'Karthik Raja', badge: 'PRACTITIONER', badgeType: 'practitioner', roll: '22ME054', score: 205, quant: 360, reasoning: 310, tests: 18, streak: '28d', avatarColor: '#64748b', isUser: false }
  ];

  const tableRows = rankings.map(r => {
    const medalIcon = r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : r.rank;
    const badgeClass = r.badgeType === 'adept' ? 'lb-badge-adept' : 'lb-badge-practitioner';
    const rowClass = r.isUser ? 'user-row' : '';

    return `<tr class="${rowClass}">
      <td style="font-weight:700;font-size:14px;color:#475569;">${medalIcon}</td>
      <td>
        <div class="lb-student-cell">
          <div class="lb-avatar-sm" style="background:${r.avatarColor};">${r.name.charAt(0)}</div>
          <div class="lb-name-group">
            <div class="lb-name">
              <span>${r.name}</span>
              <span class="${badgeClass}">• ${r.badge}</span>
              ${r.isUser ? `<span style="font-size:10px;padding:2px 6px;background:#ede9fe;color:#7c3aed;border-radius:10px;font-weight:800;">YOU</span>` : ''}
            </div>
            <div class="lb-roll">${r.roll}</div>
          </div>
        </div>
      </td>
      <td><span class="lb-score">${r.score}</span></td>
      <td style="font-weight:600;color:#475569;">${r.quant}</td>
      <td style="font-weight:600;color:#475569;">${r.reasoning}</td>
      <td style="font-weight:600;color:#475569;">${r.tests}</td>
      <td><span class="lb-streak-badge">🔥 ${r.streak}</span></td>
    </tr>`;
  }).join('');

  return `
    <div class="leaderboard-container">
      <div class="leaderboard-header">
        <div style="font-family:'Newsreader',serif;font-size:28px;font-weight:700;color:#1e293b;margin-bottom:4px;">🏆 Aspirants Hall of Fame</div>
        <div style="font-size:14px;color:#64748b;">Real-time accuracy rankings, practice streaks &amp; platform performance metrics</div>
      </div>

      <!-- TOP 3 PODIUM (MATCHING IMAGE 2 REFERENCE IN WHITE THEME) -->
      <div class="leaderboard-podium">
        <!-- RANK 2 (LEFT) -->
        <div class="podium-card rank-2">
          <div class="podium-medal">🥈</div>
          <div class="podium-avatar av-2">A</div>
          <div class="podium-name">Arshiya</div>
          <div class="podium-score">314</div>
          <div class="podium-streak">🔥 92d</div>
          <div class="podium-base-badge">#2</div>
        </div>

        <!-- RANK 1 (CENTER - ELEVATED) -->
        <div class="podium-card rank-1">
          <div class="podium-crown">👑</div>
          <div class="podium-avatar av-1">S</div>
          <div class="podium-name">Sampreeth</div>
          <div class="podium-score">374</div>
          <div class="podium-streak">🔥 80d</div>
          <div class="podium-base-badge">#1</div>
        </div>

        <!-- RANK 3 (RIGHT) -->
        <div class="podium-card rank-3">
          <div class="podium-medal">🥉</div>
          <div class="podium-avatar av-3">M</div>
          <div class="podium-name">Muhammed</div>
          <div class="podium-score">282</div>
          <div class="podium-streak">🔥 91d</div>
          <div class="podium-base-badge">#3</div>
        </div>
      </div>

      <!-- FILTER TABS -->
      <div class="tab-bar" style="margin-bottom:16px;">
        <button class="tab-btn active" onclick="showToast('info','Showing all-time champions')">⚡ All-Time Champions</button>
        <button class="tab-btn" onclick="showToast('info','Showing this month standings')">📅 This Month</button>
        <button class="tab-btn" onclick="showToast('info','Showing weekly sprint rankings')">🎯 Weekly Sprint</button>
      </div>

      <!-- RANKINGS TABLE (CLEAN WHITE BACKGROUND MATCHING IMAGE 2) -->
      <div class="lb-table-wrap">
        <table class="lb-table">
          <thead>
            <tr>
              <th style="width:50px;">#</th>
              <th>STUDENT</th>
              <th>SCORE</th>
              <th>QUANT</th>
              <th>REASONING</th>
              <th>TESTS DONE</th>
              <th>STREAK</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

"""

    content = content[:jobs_start] + new_leaderboard_code + content[profile_start:]

    # 7. Remove Score Trend from Profile view
    old_profile_score_trend = """        <div class="card" style="margin-bottom:16px;">
          <div class="section-heading" style="margin-bottom:16px;">📈 Score Trend (Last 8 Tests)</div>
          <div class="score-bar-chart">${barChart}</div>
        </div>"""
    if old_profile_score_trend in content:
        content = content.replace(old_profile_score_trend, "")
        print("Removed Score Trend from Profile")

    # Also remove barChart declaration in renderProfile if needed
    content = content.replace(
        "const scores = [38,31,27,35,29,33,36,32];\n  const barChart = scores.map((s,i)=>`\n    <div class=\"chart-bar-row\">\n      <div class=\"chart-bar-label\">Test ${i+1}</div>\n      <div class=\"chart-bar-wrap\"><div class=\"chart-bar-fill\" style=\"width:${s/40*100}%\">${s}/40</div></div>\n    </div>`).join('');",
        "// Score trend removed per user instruction\n  const scores = [38,31,27,35,29,33,36,32];"
    )

    # 8. Remove Score Trend from Analytics view
    old_analytics_trend_pattern = re.compile(
        r'<!-- Score trend chart -->\s*<div class="card" style="margin-bottom:20px;">\s*<div style="font-weight:700;font-size:16px;font-family:\'Newsreader\',serif;margin-bottom:6px;">📈 Score Trend.*?</div>\s*</div>',
        re.DOTALL
    )
    if old_analytics_trend_pattern.search(content):
        content = old_analytics_trend_pattern.sub("<!-- Score trend removed per user instruction -->", content)
        print("Removed Score Trend from Analytics")

    # 9. In Admin Dashboard, change 'Job Listings' stat card to 'Study Plans'
    content = content.replace(
        "{ label:'Job Listings', val:'34', icon:'💼', color:'#ef4444' }",
        "{ label:'Study Plans', val:'12 Phases', icon:'📅', color:'#ef4444' }"
    )

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Phase 2 updates written successfully.")

if __name__ == '__main__':
    apply_phase2()
