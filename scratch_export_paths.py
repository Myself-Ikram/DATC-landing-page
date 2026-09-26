import json

with open('public/paper_path.json') as f:
    d = json.load(f)

ts_code = f'''// Exact torn paper SVG paths extracted from reference image
export const TORN_PAPER_PATH = "{d['paper']}";
export const TORN_PAPER_TOP = "{d['top']}";
export const TORN_PAPER_BOT = "{d['bot']}";
'''

with open('src/data/tornPaperPaths.ts', 'w') as f:
    f.write(ts_code)

print('Wrote src/data/tornPaperPaths.ts successfully')
