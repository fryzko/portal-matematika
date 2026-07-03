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
  let newContent = content;
  
  // Fix $$...$$ $$...$$ on same line (or with spaces)
  // We look for $$ followed by spaces and then $$
  newContent = newContent.replace(/\$\$[ \t]+\$\$/g, '$$\n\n$$');
  
  // Fix consecutive $$ lines
  // We need to loop this because multiple consecutive lines need multiple replacements
  let prevContent;
  do {
    prevContent = newContent;
    // Matches $$ at end of line (possibly with trailing spaces), newline, optional spaces, $$ at start of line
    newContent = newContent.replace(/\$\$[ \t]*\n[ \t]*\$\$/g, '$$\n\n$$');
  } while (prevContent !== newContent);
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed ${file}`);
  }
});
