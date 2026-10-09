import glob
import re
import json

files = sorted(glob.glob('drive_docs/*.txt'))

def clean_latex(text):
    if not text:
        return ""
    # remove excessive spaces
    t = text.strip()
    return t

def parse_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Determine category from filename
    fname = filepath.lower()
    if 'easy' in fname:
        cat = 'easy'
    elif 'medium' in fname:
        cat = 'medium'
    elif 'hard' in fname:
        cat = 'hard'
    elif 'previous' in fname:
        cat = 'previous'
    else:
        cat = 'medium'

    # Determine topic name
    if 'boat' in fname:
        topic = 'Boat & Stream'
    elif 'roots' in fname:
        topic = 'Nature of Roots'
    elif 'relative' in fname:
        topic = 'Relative Speed'
    elif 'train' in fname:
        topic = 'Train Problems'
    else:
        topic = 'Quantitative Aptitude'

    # Pattern 1 (multiline):
    # 1. Question
    #    * A) ...
    #    * B) ...
    #    * C) ...
    #    * D) ...
    p1 = re.findall(r'(\d+)[\.\)]\s*(.*?)\n\s*(?:[\*\-]\s*)?A[\)\.](.*?)\n\s*(?:[\*\-]\s*)?B[\)\.](.*?)\n\s*(?:[\*\-]\s*)?C[\)\.](.*?)\n\s*(?:[\*\-]\s*)?D[\)\.](.*?)(?=\n\s*\d+[\.\)]|\n\s*Part|\Z)', text, re.DOTALL)

    # Pattern 2 (single-line options):
    p2 = re.findall(r'(\d+)[\.\)]\s*(.*?)\s+A[\)\.](.*?)\s+B[\)\.](.*?)\s+C[\)\.](.*?)\s+D[\)\.](.*?)(?=\s*\d+[\.\)]|\Z)', text)

    raw_list = p1 if len(p1) >= len(p2) else p2
    
    questions = []
    for item in raw_list:
        q_num, q_text, optA, optB, optC, optD = item
        q_text = clean_latex(q_text)
        options = [clean_latex(optA), clean_latex(optB), clean_latex(optC), clean_latex(optD)]
        
        # Verify valid options
        if all(len(o) > 0 for o in options):
            questions.append({
                'q_num': int(q_num),
                'text': q_text,
                'options': options,
                'topic': topic,
                'category': cat,
                'source': filepath
            })
            
    return questions

all_extracted = []
for f in files:
    qs = parse_file(f)
    print(f"{f}: extracted {len(qs)} questions")
    all_extracted.extend(qs)

print(f"\nTOTAL EXTRACTED: {len(all_extracted)}")

by_cat = {'easy': [], 'medium': [], 'hard': [], 'previous': []}
for q in all_extracted:
    by_cat[q['category']].append(q)

for k, v in by_cat.items():
    print(f"Category '{k}': {len(v)} questions")
