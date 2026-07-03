const fs = require('fs');
const path = require('path');
const counts = { 'Grade 7': 0, 'Grade 8': 0, 'Grade 9': 0 };
let total = 0;
const grades = { 'Grade 7': [], 'Grade 8': [], 'Grade 9': [] };
function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.mdx')) {
      const content = fs.readFileSync(full, 'utf8');
      const match = content.match(/difficulty:\s*(['"]?)(.+?)\1/);
      if (match) {
        if (counts[match[2]] !== undefined) {
           counts[match[2]]++;
           const titleMatch = content.match(/title:\s*(['"]?)(.+?)\1/);
           grades[match[2]].push(titleMatch ? titleMatch[2] : full);
        }
      }
      total++;
    }
  }
}
walk('src/content/materi');
console.log('Total files:', total);
console.log('Counts:', counts);
for (const [grade, items] of Object.entries(grades)) {
  console.log(`\n--- ${grade} (${items.length}) ---`);
  items.forEach(item => console.log('- ' + item));
}
