import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

def find_line(pattern):
    for i, l in enumerate(lines):
        if pattern in l:
            return i + 1
    return -1

items = [
    ('EXAM INTERFACE CSS', 'EXAM INTERFACE'),
    ('JOBS CSS', 'JOBS'),
    ('SIDEBAR NAV ITEMS', 'nav-topics'),
    ('BOTTOM NAV ITEMS', 'bnav-topics'),
    ('EXAM SCREEN HTML', '<div id="exam-screen">'),
    ('NAVIGATE FUNCTION', 'function navigate(section)'),
    ('RENDERSECTION FUNCTION', 'function renderSection(section)'),
    ('STARTEXAMTYPED', 'function startExamTyped('),
    ('RENDERQUESTION', 'function renderQuestion(idx)'),
    ('RENDERRESULTS', 'function renderResult(r)'),
    ('RENDERTOPICSDIRECTORY', 'function renderTopicsDirectory()'),
    ('JOBS DATA', 'const JOBS = ['),
    ('PROFILE SCORE TREND', 'Score Trend (Last 8 Tests)'),
    ('ANALYTICS SCORE TREND', 'Score Trend'),
    ('NOTIFICATIONS DATA', 'const DEFAULT_NOTIFICATIONS = ['),
]

for label, pat in items:
    print(f"{label}: {find_line(pat)}")
