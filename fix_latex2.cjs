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
  
  // Repair the damage:
  // If we see $\n\n$ that is surrounded by something else that makes it the result of my bad replace...
  // My bad replace replaced `$$\n$$` with `$\n\n$`.
  // So it might look like: `12 - 5$\n\n$x = 7`
  // We can just replace `$\n\n$` with `$$\n\n$$` globally.
  // Wait, in JS replace string, `$$$$` means `$$`. 
  // Let's just use a replacer function to avoid `$$` issues!
  
  // Actually let's first fix the broken $\n\n$
  newContent = newContent.replace(/\$[ \t]*\n\n[ \t]*\$/g, () => '$$\n\n$$');
  
  // Also we had `\$\$[ \t]+\$\$` replaced by `$\n\n$`. So `$[ \t]*\n\n[ \t]*\$` covers both cases, since it became $\n\n$.
  // Let's just replace all `$\n\n$` with `$$\n\n$$` globally.
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Repaired ${file}`);
  }
});
