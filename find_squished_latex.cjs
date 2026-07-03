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
    
    // Pattern 1: $$...$$ on consecutive lines (no blank line)
    if (line.startsWith('$$') && i + 1 < lines.length && lines[i+1].trim().startsWith('$$')) {
      console.log(`[CONSECUTIVE_$$] ${file}:${i+1}`);
    }
    
    // Pattern 2: $$...$$ $$...$$ on same line
    if (line.match(/\$\$.*?\$\$.*?\$\$/)) {
      console.log(`[MULTIPLE_$$_SAME_LINE] ${file}:${i+1}`);
    }
    
    // Pattern 3: $...$ $...$ on same line (this might be too noisy if it's just normal text, 
    // let's look for formulas that should probably be broken up, but the prompt says 
    // "bahkan $...$ digabung dalam satu baris/kalimat tanpa baris kosong pemisah yang jelas, lalu pisahkan masing-masing rumus ke barisnya sendiri"
    // Let's print out lines that have multiple $...$ and are part of equations, maybe we can just log lines with at least 3 $ signs.
    // Actually, let's just log those to review them.
    if ((line.match(/\$/g) || []).length > 2 && line.includes('=') && !line.startsWith('$$')) {
       // console.log(`[MULTIPLE_$_SAME_LINE_WITH_EQUALS] ${file}:${i+1}`);
    }
  }
});
