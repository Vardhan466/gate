import os
import re
import json

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst')
print('Split parts count:', len(parts))

items = []
for p_idx, part in enumerate(parts[1:]):
    # part contains the doc name after 18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst
    # and previous part (parts[p_idx]) contains the doc ID right before the split!
    prev = parts[p_idx]
    # doc ID is the 25-50 char string before the split
    id_match = re.search(r'([a-zA-Z0-9_-]{28,45})[^\w]*$', prev)
    doc_id = id_match.group(1) if id_match else None

    # In `part`, look for the document name and mime type
    # Example snippet: \x22\x5d,\x22Boat \\u0026 Stream downstream.previous 400\x22,\x22application\/vnd.google-apps.document\x22
    name_match = re.search(r'[^\w]+([^\\]+?)(?:\\x22|\")[^\"]*?(?:application|vnd\.google-apps)', part[:300])
    
    # Or let's inspect the first 200 chars of part
    part_head = part[:200]
    m_name = re.search(r'\\x22\\x5d,\\x22(.*?)\\x22,\\x22application', part_head)
    if not m_name:
        m_name = re.search(r'\",\s*\"(.*?)\",\s*\"application', part_head)

    if doc_id and m_name:
        name = m_name.group(1).replace(r'\\u0026', '&').replace(r'\u0026', '&').strip()
        items.append({'id': doc_id, 'name': name})
        print(f"Found: {name} -> {doc_id}")

print(f"Total parsed: {len(items)}")
with open('drive_items.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, indent=2)
