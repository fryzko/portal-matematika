# Transformation Log: Audit dan Restrukturisasi Konten Matematika (.md)

Dokumen ini mencatat detail audit mendalam, perbaikan sintaks, konversi LaTeX, restrukturisasi konten ke **MathsIsFun Blueprint**, serta rekomendasi widget interaktif pada proyek **Ruang Matematika SMP**.

---

## 1. Berkas yang Berhasil Diubah & Distandardisasi

Semua berkas Markdown di dalam folder proyek telah melalui proses standardisasi tata letak, penambahan **Frontmatter** (YAML metadata) di bagian atas, dan perbaikan sintaks markdown.

| Lokasi Berkas | Perubahan yang Dilakukan | Status |
| :--- | :--- | :---: |
| [README.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/README.md) | Standardisasi formatting dan review keselarasan link. | Selesai |
| [docs/academic-structure.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/academic-structure.md) | Penambahan Frontmatter, konversi rumus ke LaTeX, perbaikan heading. | Selesai |
| [docs/topic-mapping.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/topic-mapping.md) | Penambahan Frontmatter, audit formatting list, standardisasi notasi matematika ke LaTeX. | Selesai |
| [docs/template-halaman-materi.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/template-halaman-materi.md) | Penulisan ulang template acuan materi agar mengikuti struktur MathsIsFun Blueprint secara ketat. | Selesai |
| [docs/codex-rules.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/codex-rules.md) | **Koreksi Kritis**: Diisi kembali dengan aturan pengodean (HTML/CSS/JS) yang sebelumnya berada di berkas *struktur-database.md*. | Selesai |
| [docs/struktur-database.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/struktur-database.md) | **Koreksi Kritis**: Diisi kembali dengan struktur database SQLite yang sebelumnya berada di berkas *codex-rules.md*. | Selesai |
| [docs/uji-template-materi.md](file:///d:/MINGGU%20PERTAMA/portal-matematika/docs/uji-template-materi.md) | **Restrukturisasi Total**: Penerapan struktur MathsIsFun pada Uji 1 (Bilangan Bulat), Uji 2 (Pola Bilangan), dan Uji 3 (Pythagoras). Dilengkapi dengan analogi nyata, LaTeX, 3 contoh soal berjenjang, kuis 5 PG, dan spoiler jawaban `<details>`. | Selesai |

---

## 2. Rincian Perbaikan Rumus Matematika (LaTeX)

Semua bentuk notasi matematika dalam dokumen di atas telah diststandardisasikan ke dalam standar sintaks LaTeX agar dirender sempurna oleh library visualisasi matematika (seperti KaTeX di Astro):

- **Variabel Aljabar**: Mengubah penulisan variabel biasa (seperti `x` dan `y`) menjadi `$x$` dan `$y$`.
- **Fungsi Linear**: Mengubah tulisan bentuk umum fungsi linear menjadi `$y = ax + b$` (sebaris) atau `$$y = ax + b$$` (baris baru).
- **Bilangan Bulat**: Lambang himpunan bilangan bulat diubah menjadi $\mathbb{Z}$ (`$\mathbb{Z}$`), dan penulisan derajat suhu diubah menjadi $-5^\circ\text{C}$ (`$-5^\circ\text{C}$`).
- **Teorema Pythagoras**: Mengubah penulisan rumus kuadrat dari `a2 + b2 = c2` menjadi `$a^2 + b^2 = c^2$` (sebaris) atau `$$a^2 + b^2 = c^2$$` (baris baru).
- **Rumus Deret Aritmetika**: Suku ke-$n$ barisan aritmetika ditulis menjadi `$U_n = a + (n-1)b$`, dan jumlah deretnya ditulis menjadi `$S_n = \frac{n}{2} (a + U_n)$`.

---

## 3. Rekomendasi Spesifikasi Widget Interaktif

Sebagai arsitek frontend senior, berikut adalah spesifikasi rekomendasi untuk komponen/widget interaktif yang akan dibuat pada langkah pemrograman Astro berikutnya menggunakan JavaScript (atau framework seperti Svelte/React):

### A. Garis Bilangan Interaktif (`GARIS_BILANGAN_INTERAKTIF`)
- **Tujuan**: Membantu siswa kelas VII memahami konsep bilangan positif, negatif, dan perbandingannya secara visual.
- **Fitur Utama**:
  - Slider interaktif yang dapat digeser ke kiri dan kanan melewati titik acuan $0$.
  - Animasi termometer naik-turun dan kapal selam menyelam/naik yang bergerak sinkron saat slider digeser.
  - Perbandingan dinamis antara dua angka yang dipilih siswa (menampilkan simbol $<$ atau $>$ secara langsung).

### B. Generator Pola Bilangan (`GENERATOR_POLA_BILANGAN`)
- **Tujuan**: Membantu siswa memvisualisasikan bagaimana variabel suku pertama ($a$) dan beda ($b$) memengaruhi susunan angka aritmetika.
- **Fitur Utama**:
  - Input field untuk menentukan suku pertama ($a$) dan selisih beda ($b$).
  - Animasi penambahan noktah/titik secara bertahap saat tombol "Next" ditekan.
  - Kalkulator instan untuk menghitung nilai suku ke-$n$ ($U_n$) lengkap dengan penjabaran langkah rumusnya secara dinamis.

### C. Visualisasi Teorema Pythagoras (`VISUALISASI_SEGITIGA_PYTHAGORAS`)
- **Tujuan**: Membuktikan kebenaran teorema $a^2 + b^2 = c^2$ secara visual (luas daerah) dan interaktif.
- **Fitur Utama**:
  - Segitiga siku-siku dengan sudut $90^\circ$ di mana ujung-ujungnya dapat ditarik (*draggable vertices*).
  - Tiga buah persegi besar yang menempel pada masing-masing sisi segitiga ($a$, $b$, dan $c$). Persegi ini akan membesar/mengecil secara otomatis mengikuti ukuran sisi segitiga.
  - Kalkulator live yang menunjukkan nilai $a^2$, $b^2$, dan $c^2$ secara *real-time* untuk membuktikan bahwa luas persegi $a$ + luas persegi $b$ selalu sama dengan luas persegi $c$.
