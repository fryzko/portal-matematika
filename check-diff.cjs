const fs = require('fs');
const path = require('path');
const difficulties = new Set();
function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.mdx')) {
      const content = fs.readFileSync(full, 'utf8');
      const match = content.match(/difficulty:\s*(['"]?)(.+?)\1/);
      if (match) difficulties.add(match[2]);
    }
  }
}
walk('src/content/materi');
console.log([...difficulties]);
