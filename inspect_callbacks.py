import os
import re

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect all AF_initDataCallbacks
for i, m in enumerate(re.finditer(r'AF_initDataCallback\(\{([^\}]+)\}\);', text)):
    snippet = m.group(1)[:300]
    print(f'Callback {i}: {snippet}...\n')

# Find occurrences of 'Coc'
for m in re.finditer(r'.{0,50}Coc.{0,50}', text, re.IGNORECASE):
    print('Context of Coc:', m.group(0))
