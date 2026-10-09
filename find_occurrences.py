import os
path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer('18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst', text)]
print('Occurrences:', len(matches))
for i, pos in enumerate(matches):
    print(f'--- Occurrence {i} at {pos} ---')
    print(text[max(0, pos-100):min(len(text), pos+300)])
