import os
import re
import json

path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

print('Length of file:', len(text))
# Check for document titles, folder names, or items in Google Drive JSON payload
# In Drive folders, data is often in AF_initDataCallback or window._DRIVE_
callbacks = re.findall(r'AF_initDataCallback\((\{.*?\})\);', text, re.DOTALL)
print('AF_initDataCallbacks found:', len(callbacks))

# Also search for filenames
doc_names = re.findall(r'\"([^\"]{3,100}\.(?:docx?|pdf|txt|csv|xlsx?|gdoc))\"', text)
print('Document extensions found:', set(doc_names))

# Also search for generic strings that might be topic names or documents
titles = re.findall(r'\[\"([a-zA-Z0-9_\-\. ]+)\",\[\"1[a-zA-Z0-9_\-]{25,}\"\]', text)
print('Title-ID pairs:', titles[:15])

# Search for any occurrences of keywords like "Aptitude", "Reasoning", "Mathematics", "Test", "Question", "MCQ"
keywords = ['aptitude', 'reasoning', 'verbal', 'quantitative', 'easy', 'medium', 'hard', 'previous', 'question', 'coc']
for kw in keywords:
    count = len(re.findall(kw, text, re.IGNORECASE))
    print(f'Keyword "{kw}": {count}')
