const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.astro')) results.push(file);
    }
  });
  return results;
}

const files = walk('d:/MINGGU PERTAMA/portal-matematika/src/pages');
let fixedCount = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('/backups/old_static/pages/')) {
    content = content.replace(/\/backups\/old_static\/pages\//g, '/');
    fs.writeFileSync(file, content);
    console.log('Fixed links in:', file);
    fixedCount++;
  }
});
console.log('Total files fixed:', fixedCount);
