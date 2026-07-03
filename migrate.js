import fs from 'fs';
import path from 'path';

const PAGES_DIR = './pages';
const SRC_PAGES_DIR = './src/pages';
const BACKUP_DIR = './backups/old_static/pages';

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function processHtmlFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf8');
    
    // Extract title
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    let title = titleMatch ? titleMatch[1].trim() : 'Portal Matematika';
    title = title.replace(' | Ruang Matematika SMP', '');

    // Extract description
    const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)">/i);
    let description = descMatch ? descMatch[1].trim() : '';

    // Extract main content
    const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/i);
    if (!mainMatch) return null;
    let mainContent = mainMatch[1];

    // Fix links
    mainContent = mainContent.replace(/href="([^"]+)"/g, (match, p1) => {
        if (p1.startsWith('http') || p1.startsWith('#')) return match;
        
        let newLink = p1;
        newLink = newLink.replace(/\.\.\/\.\.\/index\.html/, '/');
        newLink = newLink.replace(/\.\.\/index\.html/, '/');
        newLink = newLink.replace(/index\.html/, '/');
        
        const fileDir = path.dirname(filePath);
        const relDir = path.relative('./pages', fileDir);
        
        if (!p1.startsWith('/')) {
            let resolved = path.posix.join('/', relDir.replace(/\\/g, '/'), p1);
            resolved = resolved.replace(/\.html$/, '');
            if (resolved.endsWith('/index')) {
                 resolved = resolved.replace(/\/index$/, '');
            }
            if (resolved === '') resolved = '/';
            return `href="${resolved}"`;
        }
        
        return `href="${newLink}"`;
    });

    const relPath = path.relative(sourceDir, filePath).replace(/\\/g, '/');
    const relDir = path.dirname(relPath);
    const depth = relDir === '.' ? 0 : relDir.split('/').length;
    const layoutImport = '../'.repeat(depth + 1) + 'layouts/Layout.astro';

    return `---
import Layout from '${layoutImport}';
---

<Layout title="${title}" description="${description}">
${mainContent}
</Layout>
`;
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            const relPath = path.relative(sourceDir, fullPath);
            const astroContent = processHtmlFile(fullPath);
            
            if (astroContent) {
                const outPath = path.join(SRC_PAGES_DIR, relPath.replace(/\.html$/, '.astro'));
                ensureDir(path.dirname(outPath));
                fs.writeFileSync(outPath, astroContent, 'utf8');
                console.log(`Migrated: ${relPath} -> ${outPath}`);
            }
        }
    }
}

const sourceDir = fs.existsSync(PAGES_DIR) ? PAGES_DIR : BACKUP_DIR;

// 1. Process all files
if (fs.existsSync(sourceDir)) {
    processDirectory(sourceDir);

    // 2. Move pages dir to backup if it exists
    if (fs.existsSync(PAGES_DIR)) {
        ensureDir(path.dirname(BACKUP_DIR));
        fs.cpSync(PAGES_DIR, BACKUP_DIR, { recursive: true });
        fs.rmSync(PAGES_DIR, { recursive: true, force: true });
        console.log('Moved old pages to backup.');
    } else {
        console.log('Re-migrating from backup directory.');
    }
}
