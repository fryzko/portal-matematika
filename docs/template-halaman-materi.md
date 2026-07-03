# Template Halaman Materi (Blueprint Math Is Fun)

Setiap file materi (`.mdx`) di dalam portal ini WAJIB mengikuti filosofi **Discovery Learning** dengan struktur 8 Seksi berikut secara berurutan. Jangan langsung memberikan rumus di awal!

## Frontmatter Wajib
Pastikan setiap file memiliki metadata berikut di baris paling atas:
```mdx
---
title: "Judul Materi (Menarik & Atraktif)"
topic: "Kategori Elemen"
difficulty: "Grade X"
needInteractive: true
---
import WidgetName from '../../../../components/WidgetName.astro';
```

---

## Seksi 1: Pancing Rasa Ingin Tahu (`### Pancing Rasa Ingin Tahu`)
**Tujuan:** Membuat siswa penasaran sebelum membaca lebih lanjut.
- Jangan sekadar memberi analogi pasif. Berikan **pertanyaan yang belum terjawab** atau anomali yang menggelitik.
- *Contoh:* "Kalau kamu membagi pizza menjadi 3 bagian dan memakan 1 bagian, kamu makan 1/3 pizza. Tapi... 1/3 itu angka berapa tepatnya? Coba ketik di kalkulator: 1 ÷ 3. Hasilnya 0.333333... tidak pernah berhenti. Kok bisa?"

## Seksi 2: Ayo Temukan Sendiri (`### Ayo Temukan Sendiri`)
**Tujuan:** Memberi ruang bagi siswa untuk menemukan pola secara mandiri.
- Integrasikan **Widget Interaktif** (Astro component) di sini.
- Berikan instruksi jelas apa yang harus mereka klik/ubah di widget tersebut, dan tanyakan apa yang mereka amati.
- *Contoh:* `<NumberLineInteractive />` Coba masukkan angka 5, lalu kurangi dengan -3. Ke mana arah panah menghadap? Kenapa hasilnya malah bertambah besar?

## Seksi 3: Teori & Definisi Formal (`### Teori & Definisi Formal`)
**Tujuan:** Mengkonfirmasi penemuan siswa dengan bahasa matematika baku.
- Berikan definisi yang tepat.
- Gunakan blok rumus LaTeX (dimulai dengan `$$` dan diakhiri `$$`) agar terlihat profesional. Rumus di sini berfungsi sebagai "Aha!" momen, bukan hafalan buta.

## Seksi 4: Visualisasi / Diagram (`### Visualisasi Konsep`)
**Tujuan:** Mendukung teori bagi pelajar visual.
- Bisa berupa tabel perbandingan, diagram SVG *inline*, atau gambar pendukung konsep. Otak siswa SMP sangat mengandalkan visual spasial.

## Seksi 5: Contoh Soal Berjenjang (`### Contoh Soal & Pembahasan`)
**Tujuan:** Memberikan contoh penerapan langsung dari tingkat terendah hingga HOTS.
- **Contoh 0 (Sangat Mudah):** Kasus trivial untuk pemula absolut yang masih bingung.
- **Contoh 1 (Mudah):** Aplikasi rumus dasar.
- **Contoh 2 (Menengah):** Butuh sedikit manipulasi aljabar atau dua langkah penyelesaian.
- **Contoh 3 (Menantang):** Soal cerita (pemodelan) tingkat lanjut.
- *Catatan:* Selalu sertakan langkah penyelesaian *(step-by-step)*.

## Seksi 6: ⚠️ Jebakan & Kesalahan Umum (`### ⚠️ Jebakan & Kesalahan Umum`)
**Tujuan:** Memperbaiki miskonsepsi (salah kaprah) yang paling sering dialami siswa.
- Eksplisitkan kesalahan. Siswa belajar lebih banyak ketika mereka tahu apa yang *jangan* dilakukan.
- *Contoh:* "Banyak yang mengira $-3^2 = 9$. SALAH! Yang benar adalah $-3^2 = -9$. Kalau mau positif harus diberi kurung: $(-3)^2 = 9$."

## Seksi 7: Koneksi Dunia Nyata & Profesi (`### Koneksi Dunia Nyata`)
**Tujuan:** Menjawab pertanyaan abadi siswa: "Buat apa sih belajar ginian?"
- Jangan hanya kembali ke analogi di seksi 1. Sebutkan contoh **profesi** atau teknologi nyata yang menggunakan konsep ini.
- *Contoh:* "Konsep vektor dan koordinat Pythagoras ini dipakai oleh *Game Developer* untuk menghitung jarak tembakan peluru ke karakter musuh."

## Seksi 8: Kuis Interaktif (`### Asah Kemampuan Mandiri`)
**Tujuan:** Latihan dan asesmen formatif.
- Minimal 5 soal dengan level berjenjang.
- **WAJIB:** Sertakan minimal 1 soal tipe "Manakah pernyataan di bawah ini yang SALAH?" untuk melatih cara berpikir kritis dan evaluatif.
- Gunakan tag `<details>` dan `<summary>` untuk menyembunyikan kunci jawaban dan pembahasan.
