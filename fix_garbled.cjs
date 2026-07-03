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
  if (content.includes('<AlertKesalahan>')) {
    const regex = /(### ⚠️ Jebakan & Kesalahan Umum[^\n]*\n)<AlertKesalahan>\n\n([\s\S]*?)\n\n<\/AlertKesalahan>/;
    const match = content.match(regex);
    if (!match) continue;
    
    const g1 = match[1];
    const garbled = match[2];
    
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
    
    if (simulateReplace(garbled) === garbled) {
        foundA = garbled;
    } else {
        // Fast approach: We can just undo $10 and $1, and if $2 was there, we find the verbatim A!
        // Undo $10, $11, etc.
        let recovered = garbled;
        recovered = recovered.split(g1 + '0').join('$10');
        recovered = recovered.split(g1 + '1').join('$11');
        recovered = recovered.split(g1 + '2').join('$12');
        recovered = recovered.split(g1 + '3').join('$13');
        recovered = recovered.split(g1 + '4').join('$14');
        recovered = recovered.split(g1 + '5').join('$15');
        recovered = recovered.split(g1).join('$1');
        
        // Now recovered only has A expanded where $2 was.
        // We know A is a substring of recovered.
        const len = recovered.length;
        outer: for (let l = len; l >= 1; l--) {
            for (let i = 0; i <= len - l; i++) {
                const sub = recovered.substring(i, i + l);
                if (simulateReplace(sub) === garbled) {
                    foundA = sub;
                    break outer;
                }
            }
        }
    }
    
    if (foundA !== null) {
        // Re-wrap correctly
        // But this time using a function so replace doesn't parse $!
        const correct = `${g1}<AlertKesalahan>\n\n${foundA.trim()}\n\n</AlertKesalahan>`;
        content = content.replace(regex, () => correct);
        fs.writeFileSync(file, content, 'utf8');
        fixedCount++;
        console.log(`Fixed: ${file}`);
    } else {
        console.log(`Failed to find A for: ${file}`);
    }
  }
}
console.log(`Total fixed: ${fixedCount}`);
