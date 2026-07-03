# Master Development Roadmap v1.1

Status: Ditetapkan

Versi : 1.1

Tanggal Penetapan : 6 Juni 2026

Dokumen ini menjadi peta jalan utama pengembangan Portal Ruang Matematika SMP.

Dokumen ini menjadi acuan resmi seluruh proses pembangunan, pengembangan, evaluasi, dan penyempurnaan portal (berbasis arsitektur **Framework Astro**).

Dokumen ini menjelaskan:

* Tahapan pengembangan
* Prioritas pekerjaan
* Target setiap fase
* Kriteria penyelesaian
* Risiko proyek
* Strategi implementasi
* Arah pengembangan jangka panjang

---

# Filosofi Pengembangan

Portal tidak dibangun sekaligus.

Portal dibangun secara bertahap.

Setiap tahap harus menghasilkan sistem yang:

* Berfungsi
* Stabil
* Dapat digunakan
* Dapat dikembangkan

Prinsip utama:

```text
Bangun Fondasi
↓
Bangun Desain
↓
Bangun Prototype
↓
Bangun Konten
↓
Bangun Fitur
↓
Bangun Kualitas
↓
Bangun Ekosistem
```

---

# Filosofi Prioritas

Prioritas utama proyek adalah:

```text
Konten
↓
Navigasi Pembelajaran
↓
Latihan
↓
Bank Soal
↓
Fitur Tambahan
```

Bukan sebaliknya.

Portal pendidikan harus unggul pada kualitas pembelajaran terlebih dahulu sebelum menambah fitur-fitur tambahan.

---

# Visi Akhir Portal

Portal Ruang Matematika SMP menjadi:

* Portal belajar matematika SMP berbasis Kurikulum Merdeka
* Ramah siswa
* Ramah guru
* Mendukung pembelajaran mandiri
* Memiliki ratusan materi berkualitas
* Memiliki latihan terintegrasi
* Memiliki bank soal terstruktur
* Mudah dikembangkan dalam jangka panjang

---

# Status Saat Ini

Dokumen fondasi telah selesai.

```text
✓ Struktur Akademik

✓ Struktur Menu

✓ Struktur Folder

✓ Struktur HTML

✓ Struktur CSS

✓ Struktur JavaScript
```

Status:

```text
FASE 1
SELESAI
```

---

# FASE 1

# Fondasi Proyek

Status:

Selesai

Tujuan:

Menetapkan seluruh arsitektur portal.

Output:

* Struktur Akademik
* Struktur Menu
* Struktur Folder
* Struktur HTML
* Struktur CSS
* Struktur JavaScript

Kriteria Selesai:

Seluruh dokumen fondasi berstatus Freeze.

---

# FASE 2

# Sistem Desain Visual

Tujuan:

Membangun identitas visual portal.

Fokus:

Konsistensi tampilan.

---

## Target

Menentukan:

* Warna utama portal
* Tipografi
* Sistem kartu
* Sistem ikon
* Sistem ilustrasi
* Sistem layout
* Sistem spacing

---

## Output

Dokumen dan implementasi awal Design System.

---

## Kriteria Selesai

Portal memiliki identitas visual yang konsisten.

---

# FASE 3

# Prototype Akademik

Tujuan:

Menguji seluruh template akademik.

---

## Target

Membangun contoh:

```text
Kelas VII

Bilangan

Bilangan Bulat

Mengenal Bilangan Bulat
```

---

## Fokus

* Navigasi
* Layout
* Keterbacaan
* Responsif

---

## Kriteria Selesai

Seluruh jenis halaman dapat diuji secara nyata.

---

# FASE 4

# Konten Pilot

Tujuan:

Menguji sistem menggunakan konten nyata.

---

## Target

Minimal:

```text
1 Elemen

2 Topik

5–10 Materi
```

---

## Fokus

* Kualitas materi
* Struktur pembelajaran
* Navigasi materi

---

## Kriteria Selesai

Portal dapat digunakan untuk belajar pada satu jalur pembelajaran lengkap.

---

# FASE 5

# Produksi Konten Inti

Tujuan:

Mengisi portal dengan materi utama.

---

## Prioritas

Kelas VII terlebih dahulu.

---

## Target Minimum

```text
Kelas VII

5 Elemen

20+ Topik

80+ Materi
```

---

## Fokus

* Konsistensi kualitas
* Kelengkapan pembelajaran
* Keselarasan dengan Kurikulum Merdeka

---

## Kriteria Selesai

Portal dapat digunakan sebagai sumber belajar utama Kelas VII.

---

# FASE 6

# Sistem Peta Belajar

Tujuan:

Membantu siswa memahami posisi belajar.

---

## Fitur

* Peta Kelas
* Peta Elemen
* Peta Topik
* Jalur Belajar

---

## Kriteria Selesai

Siswa dapat melihat hubungan antar materi.

---

# FASE 7

# Sistem Pencarian

Tujuan:

Mempermudah pencarian materi.

---

## Fitur

* Cari Topik
* Cari Materi
* Cari Kata Kunci

---

## Kriteria Selesai

Materi dapat ditemukan dengan cepat.

---

# FASE 8

# Sistem Latihan

Tujuan:

Mendukung pembelajaran mandiri.

---

## Fitur

* Latihan Topik
* Latihan Elemen
* Latihan Campuran

---

## Kriteria Selesai

Siswa dapat mengerjakan latihan secara mandiri.

---

# FASE 9

# Sistem Bank Soal

Tujuan:

Membangun pusat soal matematika SMP.

---

## Kategori

* Pilihan Ganda
* Isian
* Uraian

---

## Filter

* Kelas
* Elemen
* Topik

---

## Kriteria Selesai

Guru dan siswa dapat menggunakan bank soal secara efektif.

---

# FASE 10

# Bookmark dan Progress

Tujuan:

Mendukung personalisasi pembelajaran.

---

## Fitur

* Bookmark
* Progress Belajar
* Riwayat Belajar

---

## Penyimpanan

localStorage

---

## Kriteria Selesai

Siswa dapat melanjutkan pembelajaran dari posisi terakhir.

---

# FASE 11

# Statistik dan Analytics

Tujuan:

Menganalisis penggunaan portal.

---

## Statistik

* Materi dipelajari
* Latihan diselesaikan
* Topik selesai

---

## Analytics

* Materi populer
* Topik populer
* Halaman teratas

---

## Kriteria Selesai

Portal mampu menghasilkan informasi penggunaan yang bermanfaat.

---

# FASE 12

# Sistem Export

Tujuan:

Mendukung kebutuhan guru.

---

## Fitur

* Cetak Materi
* Cetak Latihan
* Cetak Bank Soal
* Export PDF

---

## Kriteria Selesai

Konten dapat digunakan secara offline.

---

# FASE 13

# Quality Assurance

Tujuan:

Menjamin kualitas portal.

---

## Audit

* Audit Materi
* Audit Link
* Audit Navigasi
* Audit Mobile
* Audit Responsif
* Audit Aksesibilitas

---

## Kriteria Selesai

Tidak ditemukan masalah kritis.

---

# FASE 14

# Beta Testing

Tujuan:

Menguji portal dengan pengguna nyata.

---

## Pengguna

* Guru
* Siswa
* Rekan sejawat

---

## Fokus

* Kemudahan penggunaan
* Kualitas materi
* Stabilitas portal

---

## Kriteria Selesai

Masukan utama telah diperbaiki.

---

# FASE 15

# Peluncuran Publik

Tujuan:

Merilis portal secara resmi.

---

## Persiapan

* Domain
* Hosting
* Backup
* Monitoring

---

## Kriteria Selesai

Portal dapat diakses publik secara stabil.

---

# Risiko Utama Proyek

## Risiko Konten

Pembuatan materi lebih lambat dari perkiraan.

Mitigasi:

Fokus pada satu kelas terlebih dahulu.

---

## Risiko Fitur

Terlalu banyak fitur sebelum konten selesai.

Mitigasi:

Konten selalu menjadi prioritas utama.

---

## Risiko Konsistensi

Materi tidak seragam.

Mitigasi:

Gunakan seluruh template resmi.

---

## Risiko Dokumentasi

Perubahan tidak terdokumentasi.

Mitigasi:

Perbarui dokumen setiap perubahan besar.

---

# Roadmap Prioritas Praktis

Urutan pengerjaan yang direkomendasikan:

```text
1. Sistem Desain Visual

2. Prototype Akademik

3. Konten Pilot

4. Produksi Konten Inti

5. Peta Belajar

6. Pencarian

7. Latihan

8. Bank Soal

9. Bookmark dan Progress

10. Statistik dan Analytics

11. Export

12. Quality Assurance

13. Beta Testing

14. Peluncuran Publik
```

---

# Prinsip Pengembangan

1. Selesaikan satu fase sebelum berpindah ke fase berikutnya.

2. Konten lebih penting daripada fitur.

3. Portal harus selalu dapat digunakan pada setiap fase.

4. Dokumentasikan perubahan besar.

5. Pertahankan konsistensi dengan dokumen fondasi.

6. Hindari pembangunan fitur yang belum diperlukan.

7. Utamakan kualitas daripada kecepatan.

---

# Status Roadmap

```text
FASE 1
SELESAI

FASE 2
SELESAI

FASE 3
SELESAI

FASE 4
BERIKUTNYA (Migrasi Astro & Konten Pilot)
```

Fokus pengembangan berikutnya:

```text
Sistem Desain Visual (SELESAI)
Migrasi Astro dan Konten Pilot

- Setup arsitektur Astro
- Dynamic Routing
- Astro Content Collections
- Integrasi LaTeX (KaTeX)
- Pembuatan widget interaktif
```

---

# Status Dokumen

```text
Master Development Roadmap v1.1

Status:
FREEZE

Kategori:
Dokumen Induk Pengembangan Portal
```

Dokumen ini menjadi acuan resmi seluruh pengembangan Portal Ruang Matematika SMP.
