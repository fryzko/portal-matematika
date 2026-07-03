const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content', 'materi');

function getTopicFromTitle(content) {
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (!titleMatch) return "Materi";
    let title = titleMatch[1];
    // Split by colon and take the first part
    title = title.split(':')[0].trim();
    return title;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const topic = getTopicFromTitle(content);
    
    let modified = false;

    const replacements = [
        {
            search: /^### Pancing Rasa Ingin Tahu$/m,
            replace: `### Mari Memahami ${topic}`
        },
        {
            search: /^### Ayo Temukan Sendiri$/m,
            replace: `### Yuk, Temukan Sendiri ${topic}`
        },
        {
            search: /^### Teori & Definisi Formal$/m,
            replace: `### Memahami ${topic} Secara Formal`
        },
        {
            search: /^### Visualisasi Konsep$/m,
            replace: `### Visualisasi: ${topic}`
        }
    ];

    let newContent = content;
    for (const r of replacements) {
        if (newContent.match(r.search)) {
            newContent = newContent.replace(r.search, r.replace);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, newContent, 'utf8');
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
