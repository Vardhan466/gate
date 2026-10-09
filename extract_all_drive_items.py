import os
import re
import json

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace \x22 with ", \x5b with [, \x5d with ]
decoded_text = text.replace(r'\x22', '"').replace(r'\x5b', '[').replace(r'\x5d', ']')

pattern = re.compile(r'\[\"([a-zA-Z0-9_-]{25,})\",\[\"18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst\"\],\"(.*?)\",\"application[\\/]vnd\.google-apps\.(document|folder|spreadsheet)\"')

matches = pattern.findall(decoded_text)
print(f'Total documents/folders in 18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst: {len(matches)}')

items = []
for doc_id, name, mime in matches:
    clean_name = name.replace(r'\\u0026', '&').replace(r'\u0026', '&').replace(r'\/', '/').strip()
    items.append({'id': doc_id, 'name': clean_name, 'type': mime})
    print(f"[{mime}] {clean_name} -> ID: {doc_id}")

with open('drive_items.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, indent=2)
print("Saved to drive_items.json")
