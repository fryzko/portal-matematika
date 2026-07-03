const fs = require('fs');
const path = require('path');

const materiDir = path.join('d:', 'MINGGU PERTAMA', 'portal-matematika', 'src', 'content', 'materi');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (filePath.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allMdxFiles = walk(materiDir);

allMdxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Pattern 1: $$...$$ on consecutive lines
    if (line.startsWith('$$') && i + 1 < lines.length && lines[i+1].trim().startsWith('$$')) {
      console.log(`Found consecutive $$ in ${file} at line ${i+1}`);
    }
    
    // Pattern 2: $$...$$ $$...$$ on same line
    if (line.match(/\$\$.*?\$\$.*?\$\$/)) {
      console.log(`Found multiple $$...$$ on same line in ${file} at line ${i+1}`);
    }
  }
});
