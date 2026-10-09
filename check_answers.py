with open('sample_doc.txt', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
print(f"Total lines: {len(lines)}")
# Find Answer or Explanation occurrences
import re
ans_lines = [i for i, l in enumerate(lines) if re.search(r'(?:Answer|Ans|Correct|Solution|Key)', l, re.IGNORECASE)]
print(f"Answer lines found: {len(ans_lines)}")
for idx in ans_lines[:15]:
    start = max(0, idx - 2)
    end = min(len(lines), idx + 5)
    print(f"--- Around line {idx} ---")
    for j in range(start, end):
        print(f"{j}: {lines[j]}")
