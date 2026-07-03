---
title: "Ruang Matematika SMP - Portal Pembelajaran Matematika Fase D"
topic: "Dokumentasi Root"
difficulty: "Grade 7 - 9"
needInteractive: false
---

# Ruang Matematika SMP

Portal pembelajaran matematika SMP berbasis **Kurikulum Merdeka Fase D**.

## Status Proyek

**Fase 3 — Prototype Akademik** ✓

Jalur pembelajaran prototype yang sudah dapat digunakan:

```text
Beranda → Kelas VII → Bilangan → Bilangan Bulat → Mengenal Bilangan Bulat
```

## Struktur Folder

```text
portal-matematika/
├── index.html              # Beranda
├── pages/                  # Halaman portal
├── assets/
│   ├── css/                # Design System
│   └── js/                 # Navigasi & pencarian
├── data/                   # Indeks pencarian
└── docs/                   # Dokumentasi standar
```

## Menjalankan Lokal

Buka `index.html` di browser, atau gunakan server lokal agar fitur pencarian (fetch JSON) berfungsi:

```bash
npx serve .
```

## Dokumentasi

Standar lengkap ada di folder [`docs/`](docs/README.md).
