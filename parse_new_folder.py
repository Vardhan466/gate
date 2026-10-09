import os
import re
import json

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

folder_id = '1mKE3NklY9PFCcBWIdWdEaD0LbMlbtnKe'
parts = text.split(folder_id)
print(f"Parts split by folder ID: {len(parts)}")

docs = []
for i in range(1, len(parts)):
    prev = parts[i-1]
    curr = parts[i]
    
    # Extract doc ID from prev
    id_m = re.findall(r'\\x22([a-zA-Z0-9_-]{30,50})\\x22', prev)
    if not id_m:
        id_m = re.findall(r'\"([a-zA-Z0-9_-]{30,50})\"', prev)
    doc_id = id_m[-1] if id_m else None
    
    # Extract doc name from curr
    name_m = re.search(r'\\x22\\x5d,\\x22(.*?)\\x22', curr[:300])
    if not name_m:
        name_m = re.search(r'\"\]\s*,\s*\"(.*?)\"', curr[:300])

    if doc_id and name_m:
        name = name_m.group(1).replace(r'\\\\u0026', '&').replace(r'\\u0026', '&').replace(r'\/', '/').strip()
        name = re.sub(r'[\.\s]+$', '', name)
        docs.append({'id': doc_id, 'name': name})

print(f"Total documents found in folder: {len(docs)}")
for idx, d in enumerate(docs, 1):
    print(f"[{idx:02d}] {d['name']} -> {d['id']}")

with open('new_drive_docs.json', 'w', encoding='utf-8') as f:
    json.dump(docs, f, indent=2)
