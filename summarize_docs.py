import glob

files = glob.glob('drive_docs/*.txt')
for f in files:
    with open(f, 'r', encoding='utf-8') as infile:
        content = infile.read()
    lines = [l.strip() for l in content.split('\n') if l.strip()]
    first_q = [l for l in lines if l.startswith('1.') or l.startswith('1 ')]
    total_qs = [l for l in lines if l and l[0].isdigit() and ('. ' in l[:6] or ') ' in l[:6])]
    print(f"{f}: {len(content)} chars | ~{len(total_qs)} questions | First line: {lines[0] if lines else 'empty'}")
