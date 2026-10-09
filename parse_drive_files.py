import os
import re
import json

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern in Drive: [\"<DOC_ID>\",[\"<PARENT_ID>\"],\"<DOC_NAME>\",\"application\/vnd.google-apps.document\"
# Note that text has unicode escapes like \\x5b, \\x22, etc., or direct characters.
# Let's decode or search using regex.
pattern = re.compile(r'(?:\\x5b|\[)(?:\\x22|\")([a-zA-Z0-9_-]{25,})(?:\\x22|\"),(?:\\x5b|\[)(?:\\x22|\")18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst(?:\\x22|\")(?:\\x5d|\]),(?:\\x22|\")(.*?)(?:\\x22|\"),(?:\\x22|\")application[\\/]vnd\.google-apps\.(document|folder|spreadsheet)(?:\\x22|\")')

matches = pattern.findall(text)
print(f'Total items found with parent folder: {len(matches)}')
docs = []
for doc_id, name, mime in matches:
    clean_name = name.encode().decode('unicode_escape').replace(r'\/', '/')
    print(f'- ID: {doc_id} | Type: {mime} | Name: {clean_name}')
    docs.append({'id': doc_id, 'name': clean_name, 'type': mime})

with open('drive_docs_list.json', 'w', encoding='utf-8') as f:
    json.dump(docs, f, indent=2)
print('Saved to drive_docs_list.json')
