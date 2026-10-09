import glob
import re

files = glob.glob('drive_docs/*.txt')

def test_parse(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Try regex matching question patterns:
    # Pattern 1: Multi-line bullet format
    # 1. Question text
    #    * A) ...
    #    * B) ...
    #    * C) ...
    #    * D) ...
    #
    # Pattern 2: Single-line format
    # 1. Question text A) ... B) ... C) ... D) ...
    
    p1 = re.findall(r'(\d+)[\.\)]\s*(.*?)\n\s*(?:[\*\-]\s*)?A[\)\.](.*?)\n\s*(?:[\*\-]\s*)?B[\)\.](.*?)\n\s*(?:[\*\-]\s*)?C[\)\.](.*?)\n\s*(?:[\*\-]\s*)?D[\)\.](.*?)(?=\n\s*\d+[\.\)]|\n\s*Part|\Z)', text, re.DOTALL)
    
    p2 = re.findall(r'(\d+)[\.\)]\s*(.*?)\s+A[\)\.](.*?)\s+B[\)\.](.*?)\s+C[\)\.](.*?)\s+D[\)\.](.*?)(?=\s*\d+[\.\)]|\Z)', text)
    
    print(f"{filepath}:")
    print(f"  Pattern 1 matches: {len(p1)}")
    print(f"  Pattern 2 matches: {len(p2)}")

for f in files[:8]:
    test_parse(f)
