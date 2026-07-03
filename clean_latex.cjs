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
  let newContent = content.replace(/\$\$\$/g, '$$');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Cleaned ${file}`);
  }
});
