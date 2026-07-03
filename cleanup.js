import fs from 'fs';
import path from 'path';

const filesToDelete = [
  'src/content/materi/bilangan/bilangan-bulat/mengenal-bilangan-bulat.mdx',
  'src/content/materi/geometri/10-bangun-ruang-dan-jaring-jaring.mdx',
  'src/content/materi/statistika/09-statistika-dan-penyajian-data.mdx',
  'src/pages/materi/[...slug].astro',
  'src/pages/materi/bilangan/bilangan-bulat/mengenal-bilangan-bulat.astro'
];

filesToDelete.forEach(file => {
  const fullPath = path.resolve(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log(`Deleted: ${fullPath}`);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});
