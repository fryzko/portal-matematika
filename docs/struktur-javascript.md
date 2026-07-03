# Struktur JavaScript v1.1

Status: Ditetapkan

Versi : 1.1

Tanggal Penetapan : 6 Juni 2026

Dokumen ini menjadi standar resmi arsitektur JavaScript Portal Ruang Matematika SMP.

Dokumen ini menjelaskan:

* Filosofi penggunaan JavaScript
* Struktur folder JavaScript
* Fungsi setiap file JavaScript
* Hubungan antar modul
* Pengelolaan data
* Standar penamaan
* Sistem komunikasi antar fitur
* Prioritas implementasi
* Strategi pengembangan jangka panjang

---

# Filosofi JavaScript

JavaScript digunakan untuk meningkatkan pengalaman belajar siswa.

JavaScript bukan pengganti HTML.

JavaScript bukan pengganti CSS.

Prinsip utama:

HTML
= Struktur

CSS
= Tampilan

JavaScript
= Perilaku

JavaScript hanya digunakan ketika benar-benar diperlukan.

Portal harus tetap dapat digunakan meskipun sebagian besar JavaScript tidak berjalan.

---

# Tujuan Penggunaan JavaScript

JavaScript digunakan untuk:

* Navigasi interaktif
* Pencarian materi
* Peta belajar
* Latihan interaktif
* Bank soal
* Bookmark materi
* Progress belajar
* Statistik belajar
* Analitik penggunaan portal
* Ekspor data sederhana
* Pengelolaan data JSON

JavaScript tidak digunakan untuk:

* Menulis seluruh halaman secara dinamis
* Menggantikan struktur HTML utama
* Membuat ketergantungan pada framework berat
* Membuat portal tidak dapat digunakan tanpa JavaScript

---

# Prinsip Arsitektur JavaScript

Prinsip utama:

1. Satu file = satu tanggung jawab.
2. Pisahkan data dan logika.
3. Hindari kode duplikat.
4. Gunakan modul reusable.
5. Mudah dipelihara.
6. Mudah dikembangkan.
7. Siap untuk ratusan hingga ribuan halaman.
8. Data tidak boleh bercampur dengan tampilan.
9. Fitur tidak boleh saling bergantung secara langsung.

---

# Struktur Folder JavaScript

Lokasi:

```text
assets/js/
```

Struktur resmi:

```text
assets/js/

├── main.js
│
├── core/
│
├── components/
│   ├── common/
│   └── learning/
│
├── features/
│
├── pages/
│
├── data/
│
├── services/
│
└── utils/
```

---

# Arsitektur JavaScript

JavaScript dibagi menjadi tujuh lapisan utama:

```text
1. Core

2. Components

3. Features

4. Pages

5. Data

6. Services

7. Utilities
```

Urutan ini wajib dipatuhi.

---

# File Utama

## main.js

Lokasi:

```text
assets/js/main.js
```

Fungsi:

Titik masuk seluruh JavaScript portal.

Tugas:

* Memuat konfigurasi
* Menginisialisasi modul
* Mengaktifkan komponen global
* Menjalankan proses startup

Prinsip:

Tidak boleh berisi logika bisnis yang kompleks.

---

# Folder core/

Fondasi seluruh sistem JavaScript.

```text
core/

├── app.js
├── config.js
├── storage.js
├── event-bus.js
└── router.js
```

---

## app.js

Menginisialisasi seluruh sistem portal.

---

## config.js

Konfigurasi global.

Contoh:

```javascript
const CONFIG = {

  siteName: "Portal Ruang Matematika SMP",

  version: "1.1",

  searchLimit: 20

};
```

---

## storage.js

Mengelola localStorage.

Digunakan untuk:

* Bookmark
* Progress
* Preferensi pengguna
* Riwayat belajar

---

## event-bus.js

Mengatur komunikasi antar fitur.

Semua komunikasi antar fitur wajib menggunakan Event Bus.

Contoh:

```text
Bookmark Ditambahkan
↓
Progress Diperbarui
↓
Statistik Diperbarui
```

Tanpa saling memanggil secara langsung.

Tujuan:

Mengurangi ketergantungan antar modul.

---

## router.js

Mengelola navigasi internal yang membutuhkan JavaScript.

---

# Folder components/

Komponen interaktif reusable.

---

## components/common/

```text
components/common/

├── navigation.js
├── breadcrumb.js
├── accordion.js
├── tabs.js
├── modal.js
├── tooltip.js
├── pagination.js
├── search-box.js
├── notification.js
└── theme-switcher.js
```

---

### navigation.js

Menu navigasi utama.

---

### breadcrumb.js

Navigasi breadcrumb.

---

### accordion.js

Accordion interaktif.

---

### tabs.js

Komponen tab.

---

### modal.js

Popup.

---

### tooltip.js

Tooltip.

---

### pagination.js

Navigasi halaman panjang.

---

### search-box.js

Kotak pencarian.

---

### notification.js

Notifikasi ringan.

---

### theme-switcher.js

Persiapan Light Mode dan Dark Mode.

---

## components/learning/

Komponen khusus pembelajaran.

```text
components/learning/

├── latihan-inline.js
├── refleksi.js
├── rangkuman.js
├── navigasi-materi.js
├── tujuan-belajar.js
├── prasyarat.js
├── apersepsi.js
└── contoh-interaktif.js
```

---

### latihan-inline.js

Latihan langsung pada materi.

---

### refleksi.js

Refleksi pembelajaran.

---

### rangkuman.js

Ringkasan materi.

---

### navigasi-materi.js

Materi sebelumnya dan selanjutnya.

---

### tujuan-belajar.js

Komponen tujuan pembelajaran.

---

### prasyarat.js

Komponen prasyarat.

---

### apersepsi.js

Komponen apersepsi.

---

### contoh-interaktif.js

Contoh soal interaktif.

---

# Folder features/

Fitur utama portal.

```text
features/

├── search/
├── latihan/
├── bank-soal/
├── peta-belajar/
├── bookmark/
├── progress/
├── statistik/
├── analytics/
└── export/
```

---

# Feature Search

```text
features/search/

├── search-engine.js
├── search-index.js
├── search-filter.js
└── search-ui.js
```

Fungsi:

Pencarian materi, topik, dan elemen.

---

# Feature Latihan

```text
features/latihan/

├── latihan-engine.js
├── latihan-checker.js
├── latihan-score.js
└── latihan-ui.js
```

Fungsi:

Mengelola latihan interaktif.

---

# Feature Bank Soal

```text
features/bank-soal/

├── soal-engine.js
├── filter-soal.js
├── randomizer.js
└── soal-ui.js
```

Fungsi:

Mengelola bank soal.

---

# Feature Peta Belajar

```text
features/peta-belajar/

├── map-engine.js
├── map-data.js
└── map-ui.js
```

Fungsi:

Menampilkan hubungan:

```text
Kelas
↓
Elemen
↓
Topik
↓
Materi
```

---

# Feature Bookmark

```text
features/bookmark/

├── bookmark-manager.js
└── bookmark-ui.js
```

Fungsi:

Menyimpan materi favorit.

---

# Feature Progress

```text
features/progress/

├── progress-manager.js
├── progress-storage.js
└── progress-ui.js
```

Fungsi:

Menyimpan kemajuan belajar.

---

# Feature Statistik

```text
features/statistik/

├── statistik-engine.js
└── statistik-ui.js
```

Fungsi:

Menampilkan statistik belajar.

Contoh:

* Materi yang telah dipelajari
* Topik yang telah diselesaikan
* Jumlah latihan yang dikerjakan

---

# Feature Analytics

```text
features/analytics/

├── analytics-engine.js
└── analytics-reports.js
```

Fungsi:

Mengumpulkan data penggunaan portal.

Contoh:

* Materi paling sering dibuka
* Topik paling populer
* Latihan paling sering digunakan

---

# Feature Export

```text
features/export/

├── pdf-export.js
├── print-export.js
└── export-ui.js
```

Fungsi:

Mendukung:

* Cetak materi
* Cetak latihan
* Cetak bank soal

---

# Folder pages/

JavaScript khusus halaman.

```text
pages/

├── home.js
├── kelas.js
├── elemen.js
├── topik.js
├── materi.js
├── latihan.js
├── bank-soal.js
├── peta-belajar.js
├── search.js
├── sitemap.js
├── tentang.js
└── error-404.js
```

Prinsip:

Hanya berisi logika yang benar-benar unik untuk halaman tersebut.

---

# Folder data/

Mengelola data akademik.

```text
data/

├── akademik.js
├── latihan.js
├── bank-soal.js
│
└── loaders/
    ├── akademik-loader.js
    ├── latihan-loader.js
    └── soal-loader.js
```

---

## Loader

Bertugas memuat file JSON.

Contoh:

```javascript
fetch("/data/akademik/topik.json");
```

Tujuan:

Memisahkan logika pemuatan data dari fitur.

---

# Folder services/

Lapisan layanan data.

```text
services/

├── api.js
├── data-service.js
├── storage-service.js
├── search-service.js
├── bookmark-service.js
└── progress-service.js
```

Tujuan:

Menjadi penghubung antara data dan fitur.

Jika suatu saat portal menggunakan database atau API, perubahan cukup dilakukan pada folder ini.

---

# Folder utils/

Fungsi utilitas umum.

```text
utils/

├── dom.js
├── format.js
├── validator.js
├── debounce.js
├── throttle.js
├── slug.js
├── logger.js
├── error-handler.js
└── helpers.js
```

---

## error-handler.js

Mengelola kesalahan sistem.

Contoh:

* JSON gagal dimuat
* Data tidak ditemukan
* Link rusak
* Error JavaScript

Tujuan:

Menjaga portal tetap stabil.

---

# Sistem Data

Data utama portal berasal dari:

```text
data/akademik/

├── kelas.json
├── elemen.json
├── topik.json
└── materi.json
```

Prinsip:

Data wajib dipisahkan dari logika JavaScript.

---

# Sistem Penyimpanan Lokal

Menggunakan:

```javascript
localStorage
```

Digunakan untuk:

* Bookmark
* Progress belajar
* Preferensi tampilan
* Riwayat belajar

Tidak digunakan untuk menyimpan materi utama.

---

# Standar Penamaan File

Gunakan:

```text
huruf kecil

kebab-case
```

Contoh:

```text
bookmark-manager.js
search-engine.js
progress-ui.js
```

Hindari:

```text
BookmarkManager.js
searchEngine.js
script1.js
```

---

# Standar Penamaan Variabel

Gunakan:

```javascript
camelCase
```

Contoh:

```javascript
currentTopic
searchResults
bookmarkList
```

---

# Standar Penamaan Konstanta

Gunakan:

```javascript
UPPER_SNAKE_CASE
```

Contoh:

```javascript
MAX_RESULTS
DEFAULT_PAGE_SIZE
```

---

# Standar Penamaan Fungsi

Gunakan nama yang menjelaskan tindakan.

Contoh:

```javascript
loadTopics()
saveBookmark()
renderLearningMap()
calculateScore()
```

---

# Roadmap Implementasi

## Fase 1 — Navigasi Portal

```text
main.js
core/
navigation.js
breadcrumb.js
```

---

## Fase 2 — Data Akademik

```text
loader.js
data/
services/
```

---

## Fase 3 — Pencarian

```text
features/search/
```

---

## Fase 4 — Peta Belajar

```text
features/peta-belajar/
```

---

## Fase 5 — Latihan

```text
features/latihan/
```

---

## Fase 6 — Bank Soal

```text
features/bank-soal/
```

---

## Fase 7 — Bookmark dan Progress

```text
features/bookmark/
features/progress/
```

---

## Fase 8 — Statistik dan Analytics

```text
features/statistik/
features/analytics/
```

---

## Fase 9 — Export dan Dark Mode

```text
features/export/
theme-switcher.js
```

---

# Prinsip Pengembangan

1. Hindari kode duplikat.
2. Gunakan modul reusable.
3. Pisahkan data dan logika.
4. Gunakan localStorage secara bijak.
5. Gunakan Event Bus untuk komunikasi fitur.
6. Optimalkan performa.
7. Utamakan keterbacaan kode.
8. Dokumentasikan perubahan besar.
9. Siapkan struktur untuk pertumbuhan jangka panjang.

---

# Arsitektur JavaScript Final

```text
assets/js/

├── main.js
│
├── core/
│
├── components/
│   ├── common/
│   └── learning/
│
├── features/
│
├── pages/
│
├── data/
│
├── services/
│
└── utils/
```

Dokumen ini menjadi acuan resmi pengembangan JavaScript Portal Ruang Matematika SMP.
