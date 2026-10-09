import os
path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

pos = 418363
chunk = text[pos-50:pos+300]
print(repr(chunk))
