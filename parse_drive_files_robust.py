import os
import re
import json

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search using a regex on whatever surrounds 18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst
# Sample:
# \x5b\x221NHZZj5kACOKy-XJEu4i0MWIvpdkLcnHhNAlgrEgfpHs\x22,\x5b\x2218RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst\x22\x5d,\x22Boat \\u0026 Stream downstream.previous 400\x22,\x22application\/vnd.google-apps.document\x22

entries = []
pattern = re.compile(r'([a-zA-Z0-9_-]{25,})[^\w]+18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst[^\w]+([^\"]{3,120}?)(?:\\x22|\")[^\"]*?(?:application[\\/]vnd\.google-apps\.(document|folder|spreadsheet))')

for m in pattern.finditer(text):
    doc_id, name, mime = m.groups()
    # clean name
    clean_name = name.replace(r'\\u0026', '&').replace(r'\u0026', '&').replace(r'\/', '/').replace(r'\x22', '').strip()
    if clean_name.startswith(r'\x22') or clean_name.startswith('"'):
        clean_name = clean_name[1:]
    entries.append({'id': doc_id, 'name': clean_name, 'type': mime})

print(f'Total extracted: {len(entries)}')
for e in entries:
    print(f"[{e['type']}] {e['name']} -> {e['id']}")

with open('drive_docs_list.json', 'w', encoding='utf-8') as f:
    json.dump(entries, f, indent=2)
