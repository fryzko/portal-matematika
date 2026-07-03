# Struktur CSS v1.1

Status: Ditetapkan

Versi : 1.1

Tanggal Penetapan : 6 Juni 2026

Dokumen ini menjadi standar resmi arsitektur CSS Portal Ruang Matematika SMP.

Dokumen ini menjelaskan:

* Struktur file CSS
* Fungsi setiap file CSS
* Hubungan antar file
* Sistem desain portal
* Standar penamaan CSS
* Standar pengembangan CSS
* Strategi skalabilitas jangka panjang

---

# Filosofi CSS

CSS pada Portal Ruang Matematika SMP tidak dirancang berdasarkan halaman.

CSS dirancang sebagai Design System yang dapat digunakan ulang pada seluruh portal.

Tujuan:

* Konsisten
* Mudah dirawat
* Mudah dikembangkan
* Mengurangi duplikasi kode
* Mempercepat pengembangan halaman baru
* Siap untuk ratusan hingga ribuan halaman

Prinsip utama:

Satu Fungsi = Satu File CSS

Komponen yang sama harus menggunakan CSS yang sama.

---

# Filosofi Visual Portal

Portal Ruang Matematika SMP mengadopsi prinsip:

* Guru Mengajar
* Math Is Fun
* Pembelajaran Mendalam

Karena itu tampilan portal harus:

* Bersih
* Ramah siswa SMP
* Fokus pada keterbacaan
* Minim distraksi
* Mendukung eksplorasi belajar
* Nyaman digunakan dalam waktu lama

---

# Struktur Folder CSS

Lokasi:

```text
assets/css/
```

Struktur resmi:

```text
assets/css/

├── main.css
│
├── base/
│
├── layout/
│
├── components/
│   ├── common/
│   └── learning/
│
├── pages/
│
├── utilities/
│
└── themes/
```

---

# Arsitektur CSS

CSS dibagi menjadi 7 lapisan utama:

```text
1. Base

2. Layout

3. Components

4. Learning Components

5. Pages

6. Utilities

7. Themes
```

Urutan ini wajib dipatuhi.

---

# File Utama

## main.css

File CSS pertama yang dipanggil oleh seluruh halaman.

Lokasi:

```text
assets/css/main.css
```

Fungsi:

Menghubungkan seluruh file CSS lainnya.

Contoh:

```css
@import url("base/reset.css");
@import url("base/variables.css");
@import url("base/typography.css");
@import url("base/global.css");

@import url("layout/container.css");
@import url("layout/header.css");

@import url("components/common/button.css");
@import url("components/common/card.css");

@import url("components/learning/tujuan-belajar.css");

@import url("pages/home.css");
```

Prinsip:

Tidak boleh menulis styling langsung di dalam main.css.

---

# Folder base/

Fondasi seluruh sistem desain.

```text
base/

├── reset.css
├── variables.css
├── typography.css
├── global.css
└── animations.css
```

---

## reset.css

Menghapus perbedaan bawaan browser.

---

## variables.css

Menyimpan seluruh variabel desain portal.

Contoh struktur:

```css
:root {

  /* Warna */

  --color-primary;
  --color-secondary;

  --color-success;
  --color-warning;
  --color-danger;

  --color-text;
  --color-text-light;

  --color-background;
  --color-surface;

  /* Font */

  --font-heading;
  --font-body;
  --font-code;

  /* Spacing */

  --space-xs;
  --space-sm;
  --space-md;
  --space-lg;
  --space-xl;

  /* Radius */

  --radius-sm;
  --radius-md;
  --radius-lg;

  /* Shadow */

  --shadow-sm;
  --shadow-md;
  --shadow-lg;

}
```

Prinsip:

Tidak boleh menulis nilai warna langsung di komponen.

---

## typography.css

Mengatur:

* Heading
* Paragraf
* Daftar
* Tabel
* Kutipan
* Rumus
* Keterangan gambar

---

## global.css

Mengatur:

* body
* img
* a
* ul
* ol
* table

dan elemen dasar lainnya.

---

## animations.css

Animasi ringan portal.

Contoh:

* Fade In
* Slide Up
* Hover Card

Prinsip:

Animasi digunakan secukupnya.

---

# Folder layout/

Mengatur kerangka halaman.

```text
layout/

├── container.css
├── header.css
├── navigation.css
├── sidebar.css
├── footer.css
├── grid.css
└── section.css
```

---

## container.css

Lebar maksimal halaman.

---

## header.css

Header portal.

---

## navigation.css

Menu utama.

---

## sidebar.css

Sidebar navigasi.

---

## footer.css

Footer portal.

---

## grid.css

Grid responsif.

---

## section.css

Jarak dan konsistensi antar section.

---

# Folder components/common/

Komponen umum yang dapat digunakan ulang.

```text
components/common/

├── button.css
├── card.css
├── badge.css
├── alert.css
├── breadcrumb.css
├── table.css
├── form.css
├── accordion.css
├── tabs.css
├── modal.css
├── pagination.css
├── tooltip.css
└── search-box.css
```

---

## button.css

Seluruh tombol portal.

---

## card.css

Digunakan untuk:

* Kelas
* Elemen
* Topik
* Materi

---

## breadcrumb.css

Navigasi breadcrumb.

Komponen ini digunakan hampir pada seluruh halaman akademik.

---

## search-box.css

Kotak pencarian.

Digunakan pada:

* Pencarian
* Sitemap
* Indeks Materi
* Indeks Topik

---

# Folder components/learning/

Komponen khusus pembelajaran.

Ini merupakan komponen paling penting dalam portal.

```text
components/learning/

├── tujuan-belajar.css
├── prasyarat.css
├── apersepsi.css
├── contoh.css
├── aktivitas.css
├── latihan.css
├── refleksi.css
├── rangkuman.css
├── glosarium.css
├── fakta-matematika.css
├── tips.css
└── navigasi-materi.css
```

---

## tujuan-belajar.css

Kotak tujuan pembelajaran.

---

## prasyarat.css

Kotak prasyarat belajar.

---

## apersepsi.css

Bagian pengantar materi.

---

## contoh.css

Menampilkan contoh soal dan penyelesaian.

---

## aktivitas.css

Aktivitas eksplorasi siswa.

---

## latihan.css

Latihan dalam materi.

---

## refleksi.css

Refleksi pembelajaran.

---

## rangkuman.css

Ringkasan materi.

---

## glosarium.css

Istilah matematika.

---

## fakta-matematika.css

Fakta menarik matematika.

---

## tips.css

Tips belajar.

---

## navigasi-materi.css

Tombol:

* Materi Sebelumnya
* Materi Selanjutnya

---

# Folder pages/

CSS khusus halaman.

```text
pages/

├── home.css
├── tentang.css
│
├── akademik/
│   ├── kelas.css
│   ├── elemen.css
│   ├── topik.css
│   └── materi.css
│
└── fitur/
    ├── latihan.css
    ├── bank-soal.css
    ├── peta-belajar.css
    ├── search.css
    ├── sitemap.css
    └── error-404.css
```

Prinsip:

Hanya berisi styling yang benar-benar unik.

---

# Folder utilities/

Utility classes ringan.

```text
utilities/

├── spacing.css
├── colors.css
├── display.css
├── typography.css
└── helpers.css
```

---

## spacing.css

Contoh:

```css
.mt-sm
.mt-md

.mb-sm
.mb-md
```

---

## display.css

Contoh:

```css
.flex
.grid
.hidden
.block
```

---

## typography.css

Contoh:

```css
.text-center
.text-left
.text-right

.text-bold

.text-small
.text-large
```

---

## helpers.css

Utility tambahan.

---

# Folder themes/

Tema visual portal.

```text
themes/

├── light.css
└── dark.css
```

Saat ini:

Light Mode digunakan sebagai standar utama.

Dark Mode disiapkan untuk pengembangan masa depan.

---

# Sistem Warna Portal

Semua warna wajib berasal dari:

```text
base/variables.css
```

Kategori warna:

* Primary
* Secondary
* Success
* Warning
* Danger
* Surface
* Background
* Text

Prinsip:

Tidak boleh menggunakan kode warna langsung pada komponen.

---

# Sistem Tipografi

Jenis font:

```text
Heading

Body

Code
```

Prinsip:

Maksimal 2–3 keluarga font.

Fokus pada keterbacaan.

---

# Sistem Spasi

Skala resmi:

```css
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-2xl
```

Digunakan pada seluruh komponen.

---

# Sistem Responsif

Portal wajib mendukung:

* Desktop
* Tablet
* Mobile

Breakpoint resmi:

```css
--breakpoint-sm
--breakpoint-md
--breakpoint-lg
--breakpoint-xl
```

Didefinisikan dalam variables.css.

---

# Standar Penamaan CSS

Gunakan:

* Huruf kecil
* Kebab Case
* Deskriptif

Contoh:

```css
.topik-card

.materi-navigation

.learning-map
```

Hindari:

```css
.TopikCard

topikCard

card1
```

---

# Konvensi BEM Lite

Untuk komponen kompleks gunakan pola:

```css
.card

.card-title

.card-content

.card-footer
```

atau

```css
.materi-card

.materi-card-title

.materi-card-content
```

Tujuan:

Menghindari konflik CSS ketika portal berkembang besar.

---

# Urutan Pemanggilan CSS

```text
1. reset.css

2. variables.css

3. typography.css

4. global.css

5. animations.css

6. layout/

7. components/common/

8. components/learning/

9. pages/

10. utilities/

11. themes/
```

Urutan ini wajib dipatuhi.

---

# Prinsip Pengembangan

1. Hindari CSS duplikat.

2. Gunakan variabel untuk seluruh warna dan ukuran.

3. Gunakan komponen reusable.

4. Pisahkan layout dan komponen.

5. Pisahkan komponen dan halaman.

6. Dokumentasikan perubahan besar.

7. Optimalkan keterbacaan kode.

8. Siapkan CSS untuk pertumbuhan jangka panjang.

---

# Arsitektur CSS Final

```text
assets/css/

├── main.css
│
├── base/
│
├── layout/
│
├── components/
│   ├── common/
│   └── learning/
│
├── pages/
│
├── utilities/
│
└── themes/
```

Dokumen ini menjadi acuan resmi pengembangan CSS Portal Ruang Matematika SMP.
