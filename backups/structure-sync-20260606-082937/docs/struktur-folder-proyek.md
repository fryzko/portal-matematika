# Struktur Folder Proyek v1.1

Status: Ditetapkan

Versi : 1.1

Tanggal Penetapan : 6 Juni 2026

Dokumen ini menjadi standar resmi struktur folder Portal Ruang Matematika SMP.

Struktur folder dirancang berdasarkan prinsip:

* Mudah dipahami
* Mudah dikembangkan
* Konsisten dengan struktur akademik
* Siap untuk ratusan hingga ribuan materi
* Ramah bagi pengembang tunggal maupun tim

---

# Filosofi Struktur Folder

Struktur folder harus mengikuti struktur akademik portal.

Struktur Akademik:

Kelas
↓
Elemen
↓
Topik
↓
Materi

Semakin dalam struktur akademik, semakin terorganisasi pula struktur folder.

Tujuannya agar portal tetap rapi meskipun berkembang selama bertahun-tahun.

---

# Struktur Folder Utama

```text
portal-matematika-smp/

├── index.html
│
├── docs/
│
├── pages/
│
├── assets/
│
├── data/
│
├── scripts/
│
└── README.md
```

---

# Folder docs/

Menyimpan seluruh dokumen perencanaan dan standar proyek.

```text
docs/

├── struktur-akademik-portal.md
├── struktur-menu-portal.md
├── struktur-folder-proyek.md
├── struktur-file-html.md
├── struktur-css.md
├── struktur-javascript.md
│
├── template-halaman-kelas.md
├── template-halaman-elemen.md
├── template-halaman-topik.md
├── template-halaman-materi.md
│
└── catatan-pengembangan.md
```

Tujuan:

Menjadi pusat dokumentasi proyek.

---

# Folder pages/

Menyimpan seluruh halaman portal.

```text
pages/

├── kelas/
├── elemen/
├── topik/
├── materi/
├── latihan/
├── bank-soal/
├── search/
└── tentang/
```

Semua halaman portal berada di dalam folder ini.

---

# Folder pages/kelas/

```text
pages/
└── kelas/

    ├── vii.html
    ├── viii.html
    └── ix.html
```

---

# Folder pages/elemen/

```text
pages/
└── elemen/

    ├── bilangan.html
    ├── aljabar.html
    ├── geometri.html
    ├── pengukuran.html
    └── analisis-data-peluang.html
```

---

# Folder pages/topik/

Topik dikelompokkan berdasarkan elemen.

```text
pages/
└── topik/

    ├── bilangan/
    │   ├── bilangan-bulat.html
    │   ├── aritmetika-sosial.html
    │   ├── perbandingan.html
    │   └── ...
    │
    ├── aljabar/
    ├── geometri/
    ├── pengukuran/
    └── analisis-data-peluang/
```

Tujuan:

Menghindari penumpukan puluhan atau ratusan file dalam satu folder.

---

# Folder pages/materi/

Materi dikelompokkan berdasarkan:

Elemen
↓
Topik
↓
Materi

```text
pages/
└── materi/

    ├── bilangan/
    │
    │   ├── bilangan-bulat/
    │   │
    │   │   ├── mengenal-bilangan-bulat.html
    │   │   ├── membandingkan-bilangan-bulat.html
    │   │   ├── mengurutkan-bilangan-bulat.html
    │   │   └── operasi-bilangan-bulat.html
    │   │
    │   ├── aritmetika-sosial/
    │   └── ...
    │
    ├── aljabar/
    ├── geometri/
    ├── pengukuran/
    └── analisis-data-peluang/
```

Prinsip:

Satu materi = satu file HTML.

---

# Folder pages/latihan/

```text
pages/
└── latihan/

    ├── index.html
    │
    ├── topik/
    ├── elemen/
    └── campuran/
```

---

# Folder pages/bank-soal/

```text
pages/
└── bank-soal/

    ├── index.html
    │
    ├── pilihan-ganda/
    ├── isian/
    └── uraian/
```

---

# Folder pages/search/

```text
pages/
└── search/

    └── index.html
```

Digunakan untuk fitur pencarian portal.

---

# Folder pages/tentang/

```text
pages/
└── tentang/

    └── index.html
```

Menjelaskan identitas portal.

---

# Folder assets/

Menyimpan seluruh aset visual dan teknis portal.

```text
assets/

├── css/
├── js/
├── images/
├── icons/
└── fonts/
```

---

# Folder assets/css/

```text
assets/css/

├── main.css
├── layout.css
├── navigation.css
├── cards.css
├── kelas.css
├── elemen.css
├── topik.css
├── materi.css
├── latihan.css
└── bank-soal.css
```

Prinsip:

Satu fungsi = satu file CSS.

---

# Folder assets/js/

```text
assets/js/

├── main.js
├── navigation.js
├── search.js
├── latihan.js
├── bank-soal.js
└── peta-belajar.js
```

---

# Folder assets/images/

```text
assets/images/

├── logo/
├── ilustrasi/
├── elemen/
├── topik/
└── materi/
```

---

# Folder data/

Menyimpan seluruh data yang dapat digunakan ulang.

```text
data/

├── akademik/
│
│   ├── kelas.json
│   ├── elemen.json
│   ├── topik.json
│   └── materi.json
│
├── latihan/
│
│   ├── latihan-topik.json
│   ├── latihan-elemen.json
│   └── latihan-campuran.json
│
└── bank-soal/
    ├── pilihan-ganda.json
    ├── isian.json
    └── uraian.json
```

Tujuan:

Mempermudah pengembangan fitur dinamis.

---

# Folder scripts/

Digunakan untuk utilitas pengembangan.

```text
scripts/

├── generate-topik.py
├── generate-materi.py
├── update-index.py
└── validasi-link.py
```

Folder ini bersifat opsional.

Digunakan ketika jumlah halaman mulai besar.

---

# Struktur URL Portal

Prinsip:

* Hierarkis
* Mudah dibaca
* SEO Friendly
* Konsisten dengan struktur akademik

Contoh:

/kelas/vii/

/elemen/bilangan/

/topik/bilangan/bilangan-bulat/

/materi/bilangan/bilangan-bulat/mengenal-bilangan-bulat/

---

# Aturan Penamaan File

Gunakan:

* Huruf kecil
* Tanda hubung (-)
* Nama yang deskriptif

Contoh:

bilangan-bulat.html

mengenal-bilangan-bulat.html

teorema-pythagoras.html

Hindari:

Bilangan Bulat.html

BilanganBulat.html

materi1.html

---

# Prinsip Pengembangan

1. Struktur folder mengikuti struktur akademik.

2. Satu materi = satu file.

3. Hindari file duplikat.

4. Dokumentasikan perubahan besar pada folder docs/.

5. Gunakan penamaan yang konsisten.

6. Siapkan struktur untuk pertumbuhan jangka panjang.

---

# Struktur Proyek Final

portal-matematika-smp/

├── docs/
├── pages/
│   ├── kelas/
│   ├── elemen/
│   ├── topik/
│   ├── materi/
│   ├── latihan/
│   ├── bank-soal/
│   ├── search/
│   └── tentang/
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── data/
│   ├── akademik/
│   ├── latihan/
│   └── bank-soal/
│
├── scripts/
│
├── README.md
│
└── index.html

Dokumen ini menjadi acuan resmi struktur folder Portal Ruang Matematika SMP.
