const fs = require('fs');
let c = fs.readFileSync('src/content/materi/bilangan/bilangan-bulat/01-mengenal-bilangan-bulat.mdx', 'utf8');
c = c.replace(/### ⚠️ Jebakan & Kesalahan Umum[\s\S]*?(?=### Koneksi Dunia Nyata)/, `### ⚠️ Jebakan & Kesalahan Umum

<AlertKesalahan>

- **Salah Kaprah "Angka Besar"**: Banyak siswa mengira $-10$ lebih besar dari $-2$ karena angka $10$ terlihat lebih besar dari $2$. **INI SALAH!**
- **Logika Benar**: Dalam dunia negatif, semakin besar angkanya, semakin dalam/kecil nilainya (utang 10 juta lebih buruk daripada utang 2 juta). Jadi, $-10 < -2$.

</AlertKesalahan>

`);
if (!c.includes('import AlertKesalahan')) {
    c = `import AlertKesalahan from '../../../components/AlertKesalahan.astro';\n\n` + c;
}
fs.writeFileSync('src/content/materi/bilangan/bilangan-bulat/01-mengenal-bilangan-bulat.mdx', c);
