import urllib.request
import json
import os
import time

os.makedirs('drive_docs_3', exist_ok=True)

with open('folder_3_docs.json', 'r', encoding='utf-8') as f:
    docs = json.load(f)

print(f"Downloading {len(docs)} documents from Google Drive Folder 3...")

for idx, doc in enumerate(docs, 1):
    doc_id = doc['id']
    name = doc['name']
    safe_name = "".join(c for c in name if c.isalnum() or c in (' ', '_', '-', '.', '&')).strip()
    out_path = os.path.join('drive_docs_3', f"{idx:02d}_{safe_name}.txt")
    
    if os.path.exists(out_path):
        print(f"[{idx}/{len(docs)}] Already exists: {safe_name}")
        continue

    url = f"https://docs.google.com/document/d/{doc_id}/export?format=txt"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = resp.read().decode('utf-8-sig')
        with open(out_path, 'w', encoding='utf-8') as out_f:
            out_f.write(data)
        print(f"[{idx}/{len(docs)}] Downloaded {safe_name} ({len(data)} chars)")
    except Exception as e:
        print(f"[{idx}/{len(docs)}] ERROR downloading {safe_name}: {e}")
    time.sleep(0.4)

print("All downloads for folder 3 finished!")
