import os
path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst')

docs = []
for i in range(1, len(parts)):
    prev = parts[i-1]
    curr = parts[i]
    
    # Extract ID from prev: it's inside quotes before ,\x5b
    # Let's search from end of prev backwards for 28-45 char ID
    import re
    id_m = re.findall(r'([a-zA-Z0-9_-]{30,45})', prev[-120:])
    doc_id = id_m[-1] if id_m else None
    
    # Extract Name from curr: it's between \x22\x5d,\x22 and \x22,
    # or after \\x22\\x5d,\\x22
    name_m = re.search(r'\\x22(.*?)\\x22,\\x22application', curr[:250])
    if not name_m:
        name_m = re.search(r'\"(.*?)\",\"application', curr[:250])

    if doc_id and name_m:
        name = name_m.group(1).replace(r'\\\\u0026', '&').replace(r'\\u0026', '&').replace(r'\/', '/').strip()
        docs.append((doc_id, name))
        print(f"[{len(docs)}] {name} (ID: {doc_id})")

print(f"\nTotal Docs Found: {len(docs)}")
import json
with open('all_drive_docs.json', 'w', encoding='utf-8') as f:
    json.dump([{'id': d[0], 'name': d[1]} for d in docs], f, indent=2)
