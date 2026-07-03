const fs = require('fs');
const path = require('path');
let count = 0;
function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.mdx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/correctAnswer\s*=\s*['"][a-d]['"]/g);
      if (matches) {
        console.log(fullPath, matches);
        content = content.replace(/correctAnswer\s*=\s*(['"])([a-d])\1/g, (match, quote, letter) => {
          return `correctAnswer=${quote}${letter.toUpperCase()}${quote}`;
        });
        fs.writeFileSync(fullPath, content);
        count++;
      }
    }
  }
}
walk('src/content/materi');
console.log('Fixed:', count);
