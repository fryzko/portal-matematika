const fs = require('fs');
const path = require('path');

function getMdxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getMdxFiles(filePath, fileList);
    } else if (filePath.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const materiDir = path.join(__dirname, 'src', 'content', 'materi');
const files = getMdxFiles(materiDir);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('<AlertKesalahan>')) {
    // Remove the import
    const importRegex = /^import AlertKesalahan from '.*?';\r?\n/m;
    content = content.replace(importRegex, '');
    
    // Remove <AlertKesalahan> and </AlertKesalahan>
    content = content.replace(/<AlertKesalahan>\s*/g, '');
    content = content.replace(/\s*<\/AlertKesalahan>/g, '');
    
    fs.writeFileSync(file, content, 'utf8');
  }
}
console.log('Reverted.');
