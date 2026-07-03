const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content', 'materi');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Task A: Revert "### Memahami [Topik] Secara Formal" to "### Teori & Definisi Formal"
    content = content.replace(/^### Memahami .* Secara Formal$/gm, '### Teori & Definisi Formal');

    // Task B: Format "Contoh Soal & Pembahasan"
    // Format heading
    content = content.replace(/^\*\*(Contoh \d+)[^()]*\(([^)]+)\)[^*]*\*\*\s*/gm, '#### $1 ($2)\n\n');
    
    // Format Pembahasan
    content = content.replace(/\s*\*\*Pembahasan:\*\*\s*/g, '\n\n**Pembahasan:**\n\n');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
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
console.log('Done processing MDX files.');
