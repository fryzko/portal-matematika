const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content', 'materi');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix <div slot="explanation"> formatting
    content = content.replace(/<div slot="explanation">\s*\*\*Pembahasan:\*\*\s*([\s\S]*?)\s*<\/div>/g, '<div slot="explanation">**Pembahasan:** $1</div>');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed Quiz explanation: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.mdx')) {
            processFile(fullPath);
        }
    }
}

walkDir(contentDir);
console.log('Done fixing Quiz explanations.');
