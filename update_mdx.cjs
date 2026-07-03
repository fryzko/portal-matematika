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
let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('### ⚠️ Jebakan & Kesalahan Umum') && !content.includes('<AlertKesalahan>')) {
    // 1. Wrap content
    // Find the section. It starts with "### ⚠️ Jebakan & Kesalahan Umum"
    // and ends before the next "^### " or end of file.
    const regex = /(^### ⚠️ Jebakan & Kesalahan Umum[^\n]*\n)([\s\S]*?)(?=^### |^<|$)/m;
    const match = content.match(regex);
    
    if (match) {
      const header = match[1];
      const sectionContent = match[2];
      
      const wrapped = `${header}\n<AlertKesalahan>\n\n${sectionContent.trim()}\n\n</AlertKesalahan>\n\n`;
      content = content.replace(regex, wrapped);
      
      // 2. Add import if not present
      if (!content.includes('import AlertKesalahan from')) {
        const componentPath = path.join(__dirname, 'src', 'components', 'AlertKesalahan.astro');
        let relPath = path.relative(path.dirname(file), componentPath).replace(/\\/g, '/');
        
        // Find end of frontmatter
        const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
        if (fmRegex.test(content)) {
          content = content.replace(fmRegex, `---\n$1\n---\nimport AlertKesalahan from '${relPath}';\n`);
        } else {
          // If no frontmatter, just prepend
          content = `import AlertKesalahan from '${relPath}';\n\n` + content;
        }
      }
      
      fs.writeFileSync(file, content, 'utf8');
      updatedCount++;
    }
  }
}

console.log(`Berhasil mengupdate ${updatedCount} file MDX.`);
