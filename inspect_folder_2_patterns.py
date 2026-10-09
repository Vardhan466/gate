import glob
import re

files = sorted(glob.glob('drive_docs_2/*.txt'))

for f in files:
    with open(f, 'r', encoding='utf-8') as infile:
        content = infile.read()
    p1 = re.findall(r'(\d+)[\.\)]\s*(.*?)\n\s*(?:[\*\-]\s*)?A[\)\.]', content)
    p2 = re.findall(r'(\d+)[\.\)]\s*(.*?)\s+A[\)\.]', content)
    cnt = max(len(p1), len(p2))
    print(f"{f}: {len(content)} chars | ~{cnt} questions | Sample line: {content.splitlines()[0][:80]}")
