# Analisis Kelengkapan Konten Matematika dan Dokumentasi Proyek

Laporan ini menyajikan hasil pemeriksaan (audit) kelengkapan konten matematika, ketersediaan berkas fisik, dan keutuhan dokumentasi standar pada proyek **Ruang Matematika SMP** sebelum dilakukan migrasi ke framework **Astro**.

---

## 1. Ringkasan Kelengkapan Kurikulum (Fase D)

Berdasarkan berkas kurikulum resmi proyek ([academic-structure.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/academic-structure.md) dan [topic-mapping.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/topic-mapping.md)), pembelajaran Matematika SMP Fase D dibagi menjadi **5 Elemen**, **29 Topik**, dan **264 Sub-materi**.

Berikut adalah rincian pemetaan kurikulum vs. implementasi fisik saat ini:

### A. Ringkasan Distribusi & Status Berkas

| Elemen Pembelajaran | Kode TP | Jumlah Topik | Jumlah Sub-materi Mapped | Jumlah File HTML Topik (Riil) | Jumlah File HTML Materi (Riil) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Bilangan** | B.1 - B.7 | 7 | 57 | 1 dari 7 (`bilangan-bulat.html`) | 1 dari 57 (`mengenal-bilangan-bulat.html`) |
| **Aljabar** | A.1 - A.7 | 7 | 67 | 0 dari 7 | 0 dari 67 |
| **Pengukuran** | P.1 - P.3 | 3 | 34 | 0 dari 3 | 0 dari 34 |
| **Geometri** | G.1 - G.6 | 6 | 53 | 0 dari 6 | 0 dari 53 |
| **Analisis Data & Peluang** | D.1 - D.6 | 6 | 53 | 0 dari 6 | 0 dari 53 |
| **Total** | **Fase D** | **29** | **264** | **1 dari 29 (3,4%)** | **1 dari 264 (0,37%)** |

### B. Konten Uji Coba dalam Dokumentasi
Di dalam berkas dokumentasi [uji-template-materi.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/uji-template-materi.md), terdapat draf konten lengkap untuk **3 sub-materi**:
1. **Uji 1 — Mengenal Bilangan Bulat** (Elemen Bilangan, Topik Bilangan Bulat, Kode B.1)
2. **Uji 2 — Mengenal Pola Bilangan** (Elemen Aljabar, Topik Pola Bilangan, Kode A.1)
3. **Uji 3 — Mengenal Teorema Pythagoras** (Elemen Geometri, Topik Teorema Pythagoras, Kode G.3)

---

## 2. Kesenjangan Konten & Data (Gap Analysis)

Sebelum membangun portal berbasis Astro, terdapat kesenjangan besar pada data terstruktur dan berkas konten:

1. **Berkas Halaman Pembelajaran**: 
   - Terdapat **28 Topik** dan **263 Sub-materi** yang sama sekali belum memiliki berkas HTML/konten pembelajaran fisik di folder `pages/topik/` dan `pages/materi/`.
2. **Ketiadaan Data JSON Terstruktur**:
   - Di dalam folder [data/akademik/](file:///d:/MINGGU%20PERTAMA/portal-matematika/data/akademik/), baru terdapat berkas `kelas.json`.
   - Berkas-berkas penting seperti `elemen.json`, `topik.json`, dan `materi.json` yang didefinisikan dalam panduan struktur folder **belum ada (kosong)**.
3. **Folder Latihan & Bank Soal Kosong**:
   - Folder [data/latihan/](file:///d:/MINGGU%20PERTAMA/portal-matematika/data/latihan/) dan [data/bank-soal/](file:///d:/MINGGU%20PERTAMA/portal-matematika/data/bank-soal/) masih kosong, tidak memiliki berkas JSON pendukung untuk evaluasi interaktif.
   - Folder sub-kategori di dalam `pages/latihan/` dan `pages/bank-soal/` (seperti `pilihan-ganda/`, `isian/`, `topik/`, `elemen/`) belum memiliki struktur folder fisik, hanya ada `index.html` saja di root masing-masing.

---

## 3. Inkonsistensi Dokumentasi Temuan Audit

Pemeriksaan berkas di folder [docs/](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/) menemukan beberapa ketidaksesuaian penting:

### A. Berkas Dokumentasi yang Saling Tertukar (Swapped Files)
- **[codex-rules.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/codex-rules.md)**: Berkas ini memiliki judul `# Struktur Database Portal Matematika` dan mendefinisikan tabel database (Materi, Kamus, Soal, dll.). Isinya sama sekali tidak membahas aturan pengodean (codex).
- **[struktur-database.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/struktur-database.md)**: Berkas ini memiliki judul `# Aturan Pengembangan Portal Matematika` dan mendefinisikan aturan umum HTML, CSS, JavaScript, serta penamaan file. Isinya tidak membahas database.
- *Rekomendasi*: Ganti nama berkas `codex-rules.md` menjadi `struktur-database.md` dan sebaliknya.

### B. Roadmap yang Saling Bertolak Belakang
- **[roadmap.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/roadmap.md)**: Berkas ini sudah usang (outdated) karena merencanakan pengembangan back-end menggunakan Python, Flask, dan SQLite.
- **[master-development-roadmap.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/master-development-roadmap.md)**: Berkas ini memuat 15 fase pengembangan rinci yang berfokus pada client-side/static-first yang jauh lebih modern dan kompatibel dengan transisi Astro.
- *Rekomendasi*: Depresiasi/hapus `roadmap.md` lama dan ubah `master-development-roadmap.md` untuk mencerminkan arsitektur Astro.

### C. Berkas Sampah (Junk Files)
- Terdapat berkas kosong bernama `New Text Document.txt` di dalam folder [docs/](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/) yang tidak diperlukan dan harus dihapus.

---

## 4. Rekomendasi Teknis untuk Migrasi Astro

Mengubah portal statis ini ke Astro memberikan peluang besar untuk mempermudah pemeliharaan konten:

1. **Gunakan Dynamic Routing untuk Topik dan Materi**:
   - Di Astro, Anda tidak perlu membuat 264 file HTML terpisah. 
   - Anda cukup membuat struktur rute dinamis seperti:
     - `src/pages/elemen/[elemen].astro`
     - `src/pages/topik/[elemen]/[topik].astro`
     - `src/pages/materi/[elemen]/[topik]/[materi].astro`
2. **Gunakan Astro Content Collections untuk Konten Pembelajaran**:
   - Pindahkan seluruh sub-materi (termasuk 3 draf di `uji-template-materi.md`) menjadi berkas Markdown (`.md` atau `.mdx`) di folder `src/content/materi/`.
   - Astro akan secara otomatis memverifikasi skema frontmatter (seperti metadata kelas, elemen, topik, dan prasyarat) menggunakan Zod.
3. **Komponen Reusable untuk Elemen Design System**:
   - Komponen-komponen visual dari [design-system.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/design-system.md) (seperti kotak Tujuan Belajar, Apersepsi, Contoh, Catatan Penting, dan Alert status) dapat dibuat menjadi Astro Component terpisah (misal: `Alert.astro`, `Card.astro`, `Breadcrumb.astro`). Hal ini menjamin konsistensi visual 100% tanpa menulis kelas CSS berulang-ulang di setiap halaman.
4. **Rendering Rumus Matematika (LaTeX)**:
   - Karena kurikulum ini memiliki banyak rumus matematika (seperti fungsi linear $y = ax + b$ dan teorema Pythagoras $a^2 + b^2 = c^2$), integrasikan library **remark-math** dan **rehype-katex** di konfigurasi Astro agar penulisan rumus berbasis LaTeX di Markdown dapat dirender dengan indah menjadi HTML MathML/HTML biasa saat build time tanpa membebani browser siswa.
