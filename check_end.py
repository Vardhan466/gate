with open('sample_doc.txt', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
print("Total lines:", len(lines))
print("\n--- Last 50 lines ---")
for l in lines[-50:]:
    print(l)
