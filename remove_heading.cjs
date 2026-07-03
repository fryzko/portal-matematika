const fs = require('fs');
const path = require('path');

const materiDir = path.join(__dirname, 'src', 'content', 'materi');
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

const files = getMdxFiles(materiDir);
let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Match heading optionally followed by spaces/newlines, then <AlertKesalahan>
  const regex = /### ⚠️ Jebakan & Kesalahan Umum[\s]*<AlertKesalahan>/g;
  
  if (regex.test(content)) {
    // Replace with just <AlertKesalahan>
    const newContent = content.replace(regex, '<AlertKesalahan>');
    
    // Safety check: ensure we didn't wipe out the whole file
    if (newContent.length > 50 && newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      changedCount++;
      console.log(`Updated: ${file}`);
    }
  }
}

console.log(`Total files updated: ${changedCount}`);
