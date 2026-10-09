import urllib.request

doc_id = '1INYySafOUSy-WEAqD1TqNYxtz8bsAbMdnYLYSJJC3jw'
url = f'https://docs.google.com/document/d/{doc_id}/export?format=txt'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    data = resp.read().decode('utf-8-sig')

with open('sample_doc.txt', 'w', encoding='utf-8') as f:
    f.write(data)

print(f"Successfully saved sample_doc.txt ({len(data)} characters)")
lines = data.split('\n')
for line in lines[:25]:
    print(line)
