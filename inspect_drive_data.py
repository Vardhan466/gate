import json
import re

with open('drive_questions_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect test assignments
m = re.search(r'window\.DRIVE_TEST_ASSIGNMENTS\s*=\s*(\[.*?\]);\s*window\.DRIVE_QUESTION_POOL', text, re.DOTALL)
if m:
    data = json.loads(m.group(1))
    print(f"Total test assignments: {len(data)}")
    for t in data[:5]:
        print(f"Test {t['testNum']}: {t['name']} | Cat: {t['category']} | Qs: {len(t['questions'])} | Topic in Q1: {t['questions'][0].get('topic')}")
else:
    print("Could not regex match")
