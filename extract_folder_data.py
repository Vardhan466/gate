import os
path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst')
if idx != -1:
    start = max(0, idx - 200)
    end = min(len(text), idx + 20000)
    print(text[start:end])
else:
    print('Not found')
