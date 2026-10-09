import os
import re
import json

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst')

docs = []
for i in range(1, len(parts)):
    prev = parts[i-1]
    curr = parts[i]
    
    # ID is between the last \\x22 and \\x22 in prev before the split
    id_m = re.findall(r'\\x22([a-zA-Z0-9_-]{33,50})\\x22', prev)
    doc_id = id_m[-1] if id_m else None
    
    # Name is after \\x22\\x5d,\\x22 and before the next \\x22
    name_m = re.search(r'\\x22\\x5d,\\x22(.*?)\\x22', curr[:250])

    if doc_id and name_m:
        name = name_m.group(1).replace(r'\\\\u0026', '&').replace(r'\\u0026', '&').replace(r'\/', '/').strip()
        # Clean trailing dot or whitespace
        name = re.sub(r'[\.\s]+$', '', name)
        docs.append({'id': doc_id, 'name': name})

print(f"Total Clean Docs: {len(docs)}")
for idx, d in enumerate(docs, 1):
    print(f"[{idx:02d}] {d['name']} -> {d['id']}")

with open('all_drive_docs.json', 'w', encoding='utf-8') as f:
    json.dump(docs, f, indent=2)
