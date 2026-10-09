import os
path = os.environ.get('SOURCE_DOC_PATH', 'sample_doc.txt')
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('18RaU0s9DyOk9mDOS6Q3FJqq2r_-1Qzst')

for i in range(25, min(45, len(parts))):
    print(f"=== PART {i} ===")
    print("PREV END:", repr(parts[i-1][-120:]))
    print("CURR START:", repr(parts[i][:150]))
