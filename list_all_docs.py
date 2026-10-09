import os
import re

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst')

docs = []
for i in range(1, len(parts)):
    prev = parts[i-1]
    curr = parts[i]
    # Check if doc ID is in prev
    # It looks like \x22<ID>\x22,\x5b\x22 or similar
    id_m = re.search(r'\\x22([a-zA-Z0-9_-]{28,45})\\x22,\s*\\x5b\\x22$', prev)
    if not id_m:
        id_m = re.search(r'\"([a-zA-Z0-9_-]{28,45})\",\s*\[\"$', prev)
    
    # Check for name in curr
    # Pattern: \x22\x5d,\x22<NAME>\x22,\x22application
    name_m = re.search(r'\\x22\\x5d,\\x22(.*?)\\x22,\\x22application[\\/]vnd\.google-apps\.document', curr[:300])
    if not name_m:
        name_m = re.search(r'\"\]\s*,\s*\"(.*?)\"\s*,\s*\"application[\\/]vnd\.google-apps\.document', curr[:300])

    if id_m and name_m:
        doc_id = id_m.group(1)
        name = name_m.group(1).replace(r'\\u0026', '&').replace(r'\u0026', '&').strip()
        docs.append((doc_id, name))
        print(f"[{len(docs)}] {name} -> {doc_id}")

print(f"\nTotal Docs Found: {len(docs)}")
