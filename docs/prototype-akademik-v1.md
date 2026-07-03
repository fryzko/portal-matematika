# Prototype Akademik v1.1

Status: Ditetapkan

Versi : 1.1

Tanggal Penetapan : 6 Juni 2026

Dokumen ini menjadi acuan resmi pembangunan Prototype Akademik Portal Ruang Matematika SMP.

Prototype Akademik merupakan implementasi nyata pertama dari seluruh dokumen perencanaan yang telah ditetapkan sebelumnya.

Dokumen ini berfungsi sebagai jembatan antara:

```text
Perencanaan
↓
Implementasi
```

Tujuan utama prototype adalah menguji seluruh rancangan sebelum portal dikembangkan secara masif.

---

# Latar Belakang

Portal Ruang Matematika SMP telah memiliki fondasi berupa:

* Struktur Akademik
* Struktur Menu
* Struktur Folder
* Struktur HTML
* Struktur CSS
* Struktur JavaScript
* Design System
* Master Development Roadmap

Sebelum membuat ratusan halaman materi, diperlukan pengujian terhadap struktur yang telah dirancang.

Karena itu dibuat Prototype Akademik.

---

# Tujuan Prototype

Prototype dibuat untuk memastikan bahwa:

* Struktur akademik dapat diterapkan dengan baik
* Navigasi mudah digunakan
* Layout nyaman dibaca
* Design System berjalan dengan benar
* Template akademik dapat digunakan secara konsisten
* Portal siap dikembangkan dalam skala besar

---

# Ruang Lingkup Prototype

Prototype hanya mencakup satu jalur pembelajaran lengkap.

Struktur yang digunakan:

```text
Kelas VII
↓
Bilangan
↓
Bilangan Bulat
↓
Mengenal Bilangan Bulat
```

Jalur ini dipilih karena merupakan fondasi awal pembelajaran matematika SMP.

---

# Halaman Prototype

## 1. Halaman Kelas

File:

```text
/pages/kelas/vii.html
```

Menggunakan:

```text
Template Halaman Kelas
```

Fungsi:

Menjadi pintu masuk pembelajaran Kelas VII.

Komponen yang diuji:

* Header
* Navigasi
* Breadcrumb
* Ringkasan Kelas
* Peta Pembelajaran
* Card Elemen
* Footer

---

## 2. Halaman Elemen

File:

```text
/pages/elemen/bilangan.html
```

Menggunakan:

```text
Template Halaman Elemen
```

Fungsi:

Menampilkan keseluruhan elemen Bilangan.

Komponen yang diuji:

* Ringkasan Elemen
* Tujuan Elemen
* Peta Topik
* Card Topik
* Navigasi Akademik

---

## 3. Halaman Topik

File:

```text
/pages/topik/bilangan/bilangan-bulat.html
```

Menggunakan:

```text
Template Halaman Topik
```

Fungsi:

Menampilkan keseluruhan topik Bilangan Bulat.

Komponen yang diuji:

* Gambaran Topik
* Prasyarat
* Tujuan Topik
* Peta Materi
* Card Materi

---

## 4. Halaman Materi

File:

```text
/pages/materi/bilangan/bilangan-bulat/mengenal-bilangan-bulat.html
```

Menggunakan:

```text
Template Halaman Materi
```

Fungsi:

Menjadi contoh implementasi materi lengkap.

Komponen yang diuji:

* Tujuan Belajar
* Prasyarat
* Apersepsi
* Materi Inti
* Contoh
* Latihan
* Refleksi
* Rangkuman
* Navigasi Materi

---

# File Prototype yang Harus Dibangun

Prototype Akademik tidak hanya menguji halaman akademik, tetapi juga menguji fondasi teknis portal.

---

## File HTML

```text
/index.html

/pages/kelas/vii.html

/pages/elemen/bilangan.html

/pages/topik/bilangan/bilangan-bulat.html

/pages/materi/bilangan/bilangan-bulat/mengenal-bilangan-bulat.html
```

---

## File CSS

```text
/assets/css/main.css

/assets/css/base/
assets/css/layout/
assets/css/components/
assets/css/pages/
```

Minimal struktur CSS sudah dapat digunakan oleh seluruh halaman prototype.

---

## File JavaScript

```text
/assets/js/main.js

/assets/js/components/navigation.js

/assets/js/components/breadcrumb.js
```

JavaScript pada fase ini masih sederhana dan berfokus pada navigasi dasar.

---

# Komponen Global yang Harus Diuji

Seluruh halaman prototype wajib menguji komponen berikut.

---

## Header

Menampilkan:

* Logo Portal
* Menu Utama

---

## Navigasi

Menampilkan:

* Beranda
* Kelas
* Elemen
* Latihan
* Bank Soal
* Peta Belajar
* Pencarian
* Tentang

---

## Breadcrumb

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

---

## Footer

Menampilkan:

* Informasi Portal
* Navigasi Tambahan
* Hak Cipta

---

# Komponen Akademik yang Harus Diuji

Prototype wajib menampilkan seluruh komponen akademik yang telah ditetapkan dalam Design System.

Komponen:

```text
Tujuan Belajar
Prasyarat
Apersepsi
Contoh
Latihan
Refleksi
Rangkuman
Pesan untuk Siswa
Catatan Penting
Tahukah Kamu?
Kesalahan Umum
```

Tujuan:

Memastikan seluruh komponen memiliki tampilan yang konsisten.

---

# Pengujian Design System

Prototype wajib menguji seluruh elemen visual yang telah ditetapkan.

---

## Warna

* Primary
* Secondary
* Success
* Warning
* Danger
* Info

---

## Tipografi

* H1
* H2
* H3
* H4
* Body
* Small
* Caption

---

## Card

Jenis:

* Card Kelas
* Card Elemen
* Card Topik
* Card Materi

---

## Button

Jenis:

* Primary
* Secondary
* Outline
* Disabled

---

# Pengujian Responsif

Prototype wajib diuji pada:

---

## Mobile

```text
≤ 576px
```

---

## Tablet

```text
577px – 768px
```

---

## Laptop

```text
769px – 1199px
```

---

## Desktop

```text
≥ 1200px
```

---

# Checklist Verifikasi Prototype

Checklist ini digunakan untuk memastikan seluruh prototype telah memenuhi standar yang ditetapkan.

---

## Verifikasi Umum

```text
□ Seluruh file dapat dibuka

□ Tidak ada link rusak

□ Tidak ada halaman kosong

□ Tidak ada error JavaScript

□ Tidak ada error CSS
```

---

## Verifikasi Navigasi

```text
□ Menu utama berfungsi

□ Breadcrumb benar

□ Navigasi antar halaman berfungsi

□ Navigasi materi berfungsi
```

---

## Verifikasi Design System

```text
□ Warna sesuai Design System

□ Tipografi sesuai Design System

□ Card sesuai Design System

□ Button sesuai Design System

□ Komponen akademik sesuai Design System
```

---

## Verifikasi Responsif

```text
□ Mobile

□ Tablet

□ Laptop

□ Desktop
```

---

## Verifikasi Akademik

```text
□ Template Kelas berjalan baik

□ Template Elemen berjalan baik

□ Template Topik berjalan baik

□ Template Materi berjalan baik

□ Struktur akademik konsisten
```

---

# Kriteria Keberhasilan Prototype

Prototype dianggap berhasil apabila:

1. Seluruh halaman dapat dibuka tanpa error.

2. Navigasi bekerja dengan baik.

3. Breadcrumb benar.

4. Layout konsisten.

5. Design System diterapkan dengan benar.

6. Komponen akademik tampil sesuai standar.

7. Responsif pada seluruh ukuran layar.

8. Mudah digunakan siswa SMP.

9. Seluruh checklist verifikasi terpenuhi.

---

# Output Prototype

Prototype menghasilkan:

```text
1 Halaman Kelas

1 Halaman Elemen

1 Halaman Topik

1 Halaman Materi
```

yang menjadi acuan seluruh pembangunan portal berikutnya.

---

# Output Akhir Fase 3

Fase Prototype Akademik dianggap selesai apabila menghasilkan:

```text
✓ Template HTML Final

✓ Template CSS Final

✓ Template JavaScript Final

✓ Halaman Kelas Prototype

✓ Halaman Elemen Prototype

✓ Halaman Topik Prototype

✓ Halaman Materi Prototype

✓ Sistem Navigasi Dasar

✓ Design System Terimplementasi

✓ Standar Implementasi Siap Digandakan
```

---

# Langkah Setelah Prototype

Apabila seluruh checklist verifikasi telah terpenuhi dan output fase telah tercapai, maka pengembangan dilanjutkan ke:

```text
FASE 4
Konten Pilot
```

Target awal:

```text
1 Elemen

2 Topik

5–10 Materi
```

Fase ini bertujuan menguji pembelajaran nyata menggunakan konten sesungguhnya sebelum produksi materi dalam skala besar.

---

# Status Dokumen

```text
Prototype Akademik v1.1

Status : FREEZE

Kategori :
Dokumen Implementasi Awal

Tahap :
FASE 3 — Prototype Akademik
```

Dokumen ini menjadi acuan resmi implementasi pertama Portal Ruang Matematika SMP.
