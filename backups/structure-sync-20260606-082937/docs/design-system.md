# Design System Portal Ruang Matematika SMP v1.1

Status: Ditetapkan

Versi : 1.1

Tanggal Penetapan : 6 Juni 2026

Dokumen ini menjadi standar resmi sistem desain (Design System) Portal Ruang Matematika SMP.

Dokumen ini menjadi acuan seluruh pengembangan:

* HTML
* CSS
* JavaScript
* Komponen UI
* Halaman Akademik

Tujuan utama Design System adalah menjaga konsistensi visual seluruh portal.

---

# Filosofi Visual

Portal Ruang Matematika SMP dibangun berdasarkan tiga filosofi utama:

* Guru Mengajar
* Math Is Fun
* Pembelajaran Mendalam

Karena itu tampilan portal harus:

* Ramah siswa SMP
* Bersih dan sederhana
* Fokus pada isi pembelajaran
* Mudah dibaca dalam waktu lama
* Cepat dimuat
* Tidak penuh ornamen yang mengganggu
* Mendukung pembelajaran mandiri

Prinsip utama:

```text
Konten adalah fokus utama.
Desain berfungsi mendukung pembelajaran.
```

---

# Karakter Visual

Portal menggunakan gaya:

```text
Hybrid Academic Learning
```

Gabungan antara:

* Kesederhanaan Math Is Fun
* Keteraturan portal pendidikan modern
* Keterbacaan tinggi

Karakter visual:

* Bersih
* Terang
* Profesional
* Bersahabat
* Tidak kaku

---

# Design Tokens

Seluruh implementasi CSS wajib menggunakan token berikut.

```css
:root {

  --color-primary: #2563EB;
  --color-secondary: #F8FAFC;

  --color-text: #1E293B;
  --color-border: #CBD5E1;

  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-danger: #DC2626;
  --color-info: #0891B2;

  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.10);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.12);

}
```

Prinsip:

Jangan menulis nilai visual secara langsung pada komponen.

---

# Sistem Warna

## Primary

```text
#2563EB
```

Digunakan untuk:

* Tombol utama
* Link
* Navigasi aktif
* Aksi utama

---

## Secondary

```text
#F8FAFC
```

Digunakan untuk:

* Background
* Area konten

---

## Text

```text
#1E293B
```

Digunakan untuk:

* Judul
* Paragraf
* Navigasi

---

## Border

```text
#CBD5E1
```

Digunakan untuk:

* Card
* Tabel
* Garis pemisah

---

## Warna Status

Success

```text
#16A34A
```

Warning

```text
#F59E0B
```

Danger

```text
#DC2626
```

Info

```text
#0891B2
```

---

# Tipografi

## Font Utama

```text
Arial, sans-serif
```

Alasan:

* Ringan
* Cepat dimuat
* Mudah dibaca
* Tersedia di seluruh perangkat

---

## Ukuran Judul

H1 : 36px

H2 : 28px

H3 : 22px

H4 : 18px

---

## Ukuran Teks

Body : 16px

Small : 14px

Caption : 12px

---

## Tinggi Baris

Body:

```text
1.6
```

---

# Sistem Spacing

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
```

Prinsip:

Tidak menggunakan nilai acak.

---

# Layout System

## Max Width

```text
1200px
```

---

## Content Width

```text
90%
```

---

## Struktur Halaman

```text
Header
↓
Navigasi
↓
Breadcrumb
↓
Konten Utama
↓
Navigasi Lanjutan
↓
Footer
```

Digunakan pada seluruh portal.

---

# Sistem Grid

Desktop

```text
12 Kolom
```

Tablet

```text
6 Kolom
```

Mobile

```text
1 Kolom
```

---

# Sistem Navigasi

Navigasi merupakan komponen utama portal.

---

## Menu Utama

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

Format:

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

## Navigasi Materi

Menampilkan:

* Materi Sebelumnya
* Materi Selanjutnya

---

## Navigasi Topik

Menampilkan:

* Daftar Materi Topik
* Progress Belajar

---

# Sistem Link

Link harus mudah dikenali.

---

## Normal

Warna:

Primary

---

## Hover

Lebih gelap dari warna utama.

---

## Active

Diberi indikator aktif.

---

## Visited

Tetap mudah dibedakan.

---

# Border Radius

Small : 6px

Medium : 10px

Large : 16px

---

# Shadow

Ringan:

```css
0 1px 3px rgba(0,0,0,0.10)
```

Sedang:

```css
0 4px 8px rgba(0,0,0,0.12)
```

---

# Sistem Tombol

## Primary Button

* Background Primary
* Teks Putih

Digunakan untuk:

* Mulai Belajar
* Buka Materi
* Kerjakan Latihan

---

## Secondary Button

* Abu Muda
* Teks Gelap

---

## Outline Button

* Border Primary
* Background Transparan

---

## Disabled Button

* Abu-abu
* Tidak aktif

---

# Sistem Card

Digunakan untuk:

* Kelas
* Elemen
* Topik
* Materi
* Latihan
* Bank Soal

---

## Struktur Card

```text
Ikon
Judul
Deskripsi
Aksi
```

---

## Gaya Card

Border:

```text
1px solid #CBD5E1
```

Radius:

```text
10px
```

Padding:

```text
20px
```

---

## Hover

* Shadow bertambah
* Sedikit terangkat
* Transisi halus

---

# Sistem Alert

## Success

Untuk:

* Jawaban benar
* Tugas selesai

---

## Warning

Untuk:

* Catatan penting
* Perhatian

---

## Danger

Untuk:

* Kesalahan
* Peringatan

---

## Info

Untuk:

* Informasi tambahan

---

# Sistem Tabel

Digunakan untuk:

* Data
* Statistika
* Ringkasan

Prinsip:

* Mudah dibaca
* Responsif
* Border jelas

---

# Sistem Form

Digunakan untuk:

* Pencarian
* Filter
* Input sederhana

Karakter:

* Bersih
* Ringan
* Responsif

---

# Standar Gambar dan Ilustrasi

Portal menggunakan:

* Ilustrasi edukatif
* Diagram matematika
* Gambar pendukung konsep

---

## Aturan Gambar

* Tidak berlebihan
* Mendukung pemahaman
* Tidak mengganggu fokus belajar

---

## Alt Text

Seluruh gambar wajib memiliki:

```html
alt=""
```

yang deskriptif.

---

# Komponen Akademik

Komponen akademik wajib konsisten.

---

## Tujuan Belajar

Ikon:

Target

Warna:

Info

---

## Prasyarat

Ikon:

Checklist

Warna:

Warning

---

## Apersepsi

Ikon:

Lampu Ide

Warna:

Info

---

## Contoh

Ikon:

Pensil

Warna:

Primary

---

## Latihan

Ikon:

Buku Latihan

Warna:

Success

---

## Refleksi

Ikon:

Cermin

Warna:

Secondary

---

## Rangkuman

Ikon:

Dokumen

Warna:

Primary

---

## Pesan untuk Siswa

Ikon:

Percakapan

Warna:

Info

---

## Catatan Penting

Ikon:

Tanda Seru

Warna:

Warning

---

## Tahukah Kamu?

Ikon:

Bintang

Warna:

Info

---

## Kesalahan Umum

Ikon:

Peringatan

Warna:

Danger

---

# Sistem Ikon

Ikon harus:

* Sederhana
* Konsisten
* Mudah dikenali siswa

Hindari ikon dekoratif yang tidak memiliki fungsi.

---

# Responsive Design

Portal wajib mendukung:

* Desktop
* Laptop
* Tablet
* Mobile

---

## Breakpoint

Mobile

```text
≤ 576px
```

Tablet

```text
577px – 768px
```

Laptop

```text
769px – 1199px
```

Desktop

```text
≥ 1200px
```

---

# Accessibility

Portal harus:

* Memiliki kontras warna yang cukup
* Dapat digunakan dengan keyboard
* Mendukung pembaca layar
* Memiliki alt text gambar
* Mudah dibaca siswa

---

# Prinsip Pengembangan Visual

1. Konten lebih penting daripada dekorasi.

2. Konsistensi lebih penting daripada variasi.

3. Sederhana lebih baik daripada rumit.

4. Cepat lebih baik daripada efek berlebihan.

5. Selalu mengutamakan keterbacaan.

6. Selalu mengutamakan kebutuhan siswa.

---

# Status Design System

```text
Design System Portal Ruang Matematika SMP

Versi : 1.1

Status : FREEZE
```

Dokumen ini menjadi acuan resmi seluruh pengembangan tampilan Portal Ruang Matematika SMP.
