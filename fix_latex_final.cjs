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
  
  // Keep replacing until no more consecutive $$ blocks are found
  let prevContent;
  do {
    prevContent = newContent;
    newContent = newContent.replace(/\$\$([ \t\r\n]*)\$\$/g, (match, whitespace) => {
      // If they are already separated by 2 or more newlines, leave them alone!
      if ((whitespace.match(/\n/g) || []).length >= 2) {
        return match;
      }
      return '$$\n\n$$';
    });
  } while (prevContent !== newContent);
  
  // Also, for Contoh 2 in 01-kesebangunan-bangun-datar.mdx, the user wanted explanations:
  if (file.includes('01-kesebangunan-bangun-datar.mdx')) {
    newContent = newContent.replace(
      'Karena sebangun, rasionya sebanding:\n$$\\frac{AB}{DE} = \\frac{BC}{EF}$$\n\n$$\\frac{6}{9} = \\frac{8}{EF}$$\nKali silang: $6 \\times EF = 9 \\times 8$\n$6 \\times EF = 72 \\implies EF = \\frac{72}{6} = 12\\text{ cm}$.',
      'Karena sebangun, rasionya sebanding:\n\n$$\\frac{AB}{DE} = \\frac{BC}{EF}$$\n\nSubstitusikan nilai yang diketahui:\n\n$$\\frac{6}{9} = \\frac{8}{EF}$$\n\nKali silang kedua sisi:\n\n$$6 \\times EF = 9 \\times 8$$\n\n$$6 \\times EF = 72$$\n\n$$EF = \\frac{72}{6} = 12\\text{ cm}$$'
    );
    // Also, handle the case if my regex didn't catch the exact string above (due to whitespace). Let's use a more flexible replace for it.
    // Wait, since I just ran git restore, the original file should be exactly that. Let's make sure.
  }
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed ${file}`);
  }
});
