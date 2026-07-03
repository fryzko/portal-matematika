# Struktur File HTML v1.1

Status: Ditetapkan

Versi : 1.1

Tanggal Penetapan : 6 Juni 2026

Dokumen ini menjadi standar resmi struktur file HTML Portal Ruang Matematika SMP.

Dokumen ini menjelaskan:

* Halaman yang wajib ada
* Fungsi setiap halaman
* Hubungan antar halaman
* Prioritas implementasi
* Standar komponen halaman
* Klasifikasi jenis halaman

---

# Filosofi Struktur HTML

Setiap file HTML harus memiliki tujuan yang jelas.

Hindari membuat halaman yang tidak memiliki fungsi akademik atau navigasi.

Prinsip utama:

* Satu halaman = satu fungsi
* Mudah dinavigasi
* Mudah dipelihara
* Konsisten dengan struktur akademik
* Siap berkembang menjadi ratusan hingga ribuan halaman

---

# Klasifikasi Halaman

Untuk mempermudah pengembangan dan pemeliharaan portal, seluruh halaman dikelompokkan menjadi empat kategori utama.

## 1. Halaman Statis

Halaman yang jarang berubah.

Contoh:

* Beranda
* Tentang
* 404

## 2. Halaman Akademik

Halaman yang mengikuti struktur pembelajaran.

Contoh:

* Kelas
* Elemen
* Topik
* Materi

## 3. Halaman Latihan

Halaman yang berisi aktivitas evaluasi.

Contoh:

* Latihan
* Bank Soal

## 4. Halaman Utilitas

Halaman yang membantu navigasi dan pencarian.

Contoh:

* Pencarian
* Peta Belajar
* Sitemap

Tujuan:

* Mempermudah pengembangan CSS
* Mempermudah pengembangan JavaScript
* Mempermudah pengelolaan portal

---

# Peta Besar Portal

```text
Beranda
│
├── Kelas
│
├── Elemen
│
├── Latihan
│
├── Bank Soal
│
├── Peta Belajar
│
├── Pencarian
│
├── Sitemap
│
└── Tentang
```

---

# Halaman Wajib Tahap 1

Tahap pertama berfokus pada pembelajaran inti.

---

## 1. Beranda

File:

```text
/index.html
```

Fungsi:

Pintu masuk utama portal.

Konten:

* Hero Section
* Sambutan
* Pilihan Kelas
* Akses Cepat
* Peta Belajar Ringkas
* Materi Terbaru

Status:

Wajib dibuat pertama.

---

## 2. Halaman Indeks Kelas

File:

```text
/pages/kelas/index.html
```

Fungsi:

Menampilkan seluruh kelas yang tersedia.

Konten:

* Kelas VII
* Kelas VIII
* Kelas IX

Tujuan:

Menjadi halaman tujuan menu utama "Kelas".

---

## 3. Halaman Kelas

File:

```text
/pages/kelas/vii.html
/pages/kelas/viii.html
/pages/kelas/ix.html
```

Jumlah:

3 halaman

Fungsi:

Menampilkan seluruh informasi kelas sesuai Template Halaman Kelas.

---

## 4. Halaman Indeks Elemen

File:

```text
/pages/elemen/index.html
```

Fungsi:

Menampilkan seluruh elemen matematika SMP.

Konten:

* Bilangan
* Aljabar
* Geometri
* Pengukuran
* Analisis Data dan Peluang

Tujuan:

Menjadi halaman tujuan menu utama "Elemen".

---

## 5. Halaman Elemen

File:

```text
/pages/elemen/bilangan.html
/pages/elemen/aljabar.html
/pages/elemen/geometri.html
/pages/elemen/pengukuran.html
/pages/elemen/analisis-data-peluang.html
```

Jumlah Awal:

5 halaman

Fungsi:

Menampilkan seluruh informasi elemen sesuai Template Halaman Elemen.

---

## 6. Halaman Indeks Topik

File:

```text
/pages/topik/index.html
```

Fungsi:

Menampilkan seluruh topik matematika SMP.

Filter:

* Kelas
* Elemen

Tujuan:

Mempermudah pencarian topik.

---

## 7. Halaman Topik

File:

```text
/pages/topik/bilangan/bilangan-bulat.html
/pages/topik/bilangan/aritmetika-sosial.html
/pages/topik/bilangan/perbandingan.html
```

dan seterusnya.

Jumlah:

Mengikuti struktur akademik.

Fungsi:

Menampilkan seluruh informasi topik sesuai Template Halaman Topik.

---

## 8. Halaman Indeks Materi

File:

```text
/pages/materi/index.html
```

Fungsi:

Menampilkan seluruh materi pembelajaran.

Filter:

* Kelas
* Elemen
* Topik

Tujuan:

Mempermudah pencarian materi secara langsung.

---

## 9. Halaman Materi

File:

```text
/pages/materi/bilangan/bilangan-bulat/mengenal-bilangan-bulat.html
```

dan seterusnya.

Jumlah:

Mengikuti jumlah materi.

Fungsi:

Menampilkan pembelajaran lengkap sesuai Template Halaman Materi.

---

# Halaman Wajib Tahap 2

Catatan:

Folder berikut wajib tersedia pada struktur proyek:

```text
/pages/peta-belajar/
/pages/search/
/pages/tentang/
```

Agar konsisten dengan Struktur Folder Proyek v1.1.

---

## 10. Peta Belajar

File:

```text
/pages/peta-belajar/index.html
```

Fungsi:

Menampilkan hubungan:

Kelas
↓
Elemen
↓
Topik
↓
Materi

Halaman ini menjadi navigasi visual utama portal.

---

## 11. Latihan

File:

```text
/pages/latihan/index.html
```

Fungsi:

Menampilkan seluruh kategori latihan.

---

## 12. Latihan Topik

Contoh:

```text
/pages/latihan/topik/bilangan-bulat.html
/pages/latihan/topik/perbandingan.html
```

Fungsi:

Latihan berdasarkan topik.

---

## 13. Latihan Elemen

Contoh:

```text
/pages/latihan/elemen/bilangan.html
/pages/latihan/elemen/aljabar.html
```

Fungsi:

Latihan gabungan dalam satu elemen.

---

## 14. Latihan Campuran

File:

```text
/pages/latihan/campuran.html
```

Fungsi:

Latihan lintas topik.

---

# Halaman Wajib Tahap 3

---

## 15. Bank Soal

File:

```text
/pages/bank-soal/index.html
```

Fungsi:

Pusat seluruh soal.

---

## 16. Soal Pilihan Ganda

File:

```text
/pages/bank-soal/pilihan-ganda.html
```

---

## 17. Soal Isian

File:

```text
/pages/bank-soal/isian.html
```

---

## 18. Soal Uraian

File:

```text
/pages/bank-soal/uraian.html
```

---

# Halaman Utilitas

---

## 19. Pencarian

File:

```text
/pages/search/index.html
```

Fungsi:

Mencari:

* Materi
* Topik
* Elemen

---

## 20. Tentang

File:

```text
/pages/tentang/index.html
```

Fungsi:

Menjelaskan portal.

Konten:

* Filosofi
* Cara menggunakan portal
* Tujuan pembelajaran

---

## 21. Halaman 404

File:

```text
/pages/404.html
```

Fungsi:

Menampilkan pesan ketika halaman tidak ditemukan.

Konten:

* Pesan kesalahan yang ramah
* Tombol kembali ke Beranda
* Tombol menuju Peta Belajar
* Kotak pencarian

Tujuan:

Meningkatkan pengalaman pengguna.

Status:

Wajib tersedia sebelum portal dipublikasikan.

---

## 22. Sitemap

File:

```text
/pages/sitemap.html
```

Fungsi:

Menampilkan daftar seluruh halaman portal.

Konten:

* Kelas
* Elemen
* Topik
* Materi
* Latihan
* Bank Soal

Tujuan:

* Membantu navigasi
* Membantu SEO
* Mempermudah pengelolaan portal

---

# Struktur Hubungan Halaman

```text
Beranda

↓

Kelas

↓

Elemen

↓

Topik

↓

Materi

↓

Latihan

↓

Bank Soal
```

Ini merupakan jalur belajar utama.

---

# Breadcrumb Wajib

Setiap halaman akademik harus memiliki breadcrumb.

Contoh:

```text
Beranda
>
Kelas VII
>
Bilangan
>
Bilangan Bulat
>
Mengenal Bilangan Bulat
```

Tujuan:

* Navigasi cepat
* Menunjukkan posisi siswa

---

# Komponen Wajib pada Semua Halaman

Setiap file HTML harus memiliki:

```text
Header

Navigasi Utama

Breadcrumb

Konten Utama

Navigasi Lanjutan

Tautan Materi Sebelumnya

Tautan Materi Selanjutnya

Footer
```

Struktur umum:

```html
<header></header>

<nav></nav>

<main></main>

<footer></footer>
```

---

# Prioritas Implementasi

## Tahap 1

Wajib dibuat terlebih dahulu:

```text
index.html

kelas/
elemen/
topik/
materi/
```

Karena merupakan inti portal.

---

## Tahap 2

Tambahkan:

```text
peta-belajar/
latihan/
```

---

## Tahap 3

Tambahkan:

```text
bank-soal/
search/
tentang/
404.html
sitemap.html
```

---

# Estimasi Jumlah Halaman

Fase Awal:

```text
1 Beranda
3 Kelas
5 Elemen
20 Topik
80 Materi

≈ 109 halaman
```

Fase Menengah:

```text
1 Beranda
3 Kelas
5 Elemen
50 Topik
300 Materi

≈ 359 halaman
```

Fase Penuh:

```text
1 Beranda
3 Kelas
5 Elemen
100 Topik
600 Materi

≈ 709 halaman
```

Struktur ini dirancang agar tetap stabil pada seluruh skala tersebut.

---

# Struktur HTML Final

Portal Ruang Matematika SMP

├── Beranda
├── Kelas
├── Elemen
├── Topik
├── Materi
├── Peta Belajar
├── Latihan
├── Bank Soal
├── Pencarian
├── Sitemap
├── Tentang
└── 404

Dokumen ini menjadi acuan resmi seluruh file HTML Portal Ruang Matematika SMP.
