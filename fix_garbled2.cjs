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

let fixedCount = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the corrupted section
  // It starts with ### ⚠️ Jebakan & Kesalahan Umum
  // and goes up to the next ### or end of file.
  const regex = /(### ⚠️ Jebakan & Kesalahan Umum[^\n]*\n)([\s\S]*?)(?=^### |^<Quiz|$)/m;
  const match = content.match(regex);
  
  if (match) {
    const g1 = match[1];
    let garbled = match[2];
    
    // Check if it's already fixed (i.e. contains AlertKesalahan)
    if (garbled.includes('<AlertKesalahan>')) {
        continue; // Already fixed or handled
    }
    
    // Is it actually garbled?
    // If it has ### ⚠️ Jebakan & Kesalahan Umum inside it, it's garbled!
    if (!garbled.includes('### ⚠️ Jebakan & Kesalahan Umum')) {
        // It might not be garbled, maybe it didn't have any $ signs?
        // Let's just wrap it!
        const correct = `${g1}\n<AlertKesalahan>\n\n${garbled.trim()}\n\n</AlertKesalahan>\n\n`;
        content = content.replace(regex, () => correct);
        
        // Add import
        if (!content.includes('import AlertKesalahan from')) {
            const relPath = path.relative(path.dirname(file), path.join(__dirname, 'src/components/AlertKesalahan.astro')).replace(/\\/g, '/');
            const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
            if (fmRegex.test(content)) {
                content = content.replace(fmRegex, `---\n$1\n---\nimport AlertKesalahan from '${relPath}';\n`);
            } else {
                content = `import AlertKesalahan from '${relPath}';\n\n` + content;
            }
        }
        
        fs.writeFileSync(file, content, 'utf8');
        fixedCount++;
        console.log(`Wrapped clean: ${file}`);
        continue;
    }
    
    // It IS garbled. We must recover A.
    function simulateReplace(A) {
        return A.replace(/\$([$&`']|\d{1,2})/g, (m, p1) => {
            if (p1 === '1') return g1;
            if (p1 === '2') return A;
            if (p1 === '10') return g1 + '0';
            if (p1 === '11') return g1 + '1';
            if (p1 === '12') return g1 + '2';
            if (p1 === '13') return g1 + '3';
            if (p1 === '14') return g1 + '4';
            if (p1 === '15') return g1 + '5';
            return m;
        });
    }

    let foundA = null;
    let recovered = garbled;
    recovered = recovered.split(g1 + '0').join('$10');
    recovered = recovered.split(g1 + '1').join('$11');
    recovered = recovered.split(g1 + '2').join('$12');
    recovered = recovered.split(g1 + '3').join('$13');
    recovered = recovered.split(g1 + '4').join('$14');
    recovered = recovered.split(g1 + '5').join('$15');
    recovered = recovered.split(g1).join('$1');
    
    // Now recovered is A inserted into A.
    // It's possible garbled has trailing/leading whitespace missing because revert_mdx.cjs did:
    // content = content.replace(/<AlertKesalahan>\s*/g, '');
    // This stripped leading spaces of A!
    // Wait, if it stripped leading spaces of A, then simulateReplace(A) might not strictly equal garbled!
    // Let's trim both sides when comparing.
    
    const len = recovered.length;
    outer: for (let l = len; l >= 1; l--) {
        for (let i = 0; i <= len - l; i++) {
            const sub = recovered.substring(i, i + l);
            if (simulateReplace(sub).trim() === garbled.trim()) {
                foundA = sub;
                break outer;
            }
        }
    }
    
    if (foundA !== null) {
        const correct = `${g1}\n<AlertKesalahan>\n\n${foundA.trim()}\n\n</AlertKesalahan>\n\n`;
        content = content.replace(regex, () => correct);
        
        // Add import
        if (!content.includes('import AlertKesalahan from')) {
            const relPath = path.relative(path.dirname(file), path.join(__dirname, 'src/components/AlertKesalahan.astro')).replace(/\\/g, '/');
            const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
            if (fmRegex.test(content)) {
                content = content.replace(fmRegex, `---\n$1\n---\nimport AlertKesalahan from '${relPath}';\n`);
            } else {
                content = `import AlertKesalahan from '${relPath}';\n\n` + content;
            }
        }
        
        fs.writeFileSync(file, content, 'utf8');
        fixedCount++;
        console.log(`Recovered and fixed: ${file}`);
    } else {
        console.log(`Failed to recover A for: ${file}`);
    }
  }
}
console.log(`Total fixed: ${fixedCount}`);
