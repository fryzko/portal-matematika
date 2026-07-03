# Panduan Deployment Portal Matematika

Selamat! Portal Matematika Kurikulum Merdeka Fase D Anda yang dibangun menggunakan **Astro** telah selesai. Karena portal ini dirender secara statis (SSG), performanya akan sangat cepat dan aman. 

Berikut adalah opsi hosting gratis terbaik yang direkomendasikan untuk situs Astro Anda:

## Opsi 1: Vercel (Paling Direkomendasikan)
Vercel adalah platform luar biasa untuk situs Astro dengan setup nol-konfigurasi.

**Langkah-langkah:**
1. Push seluruh kode Anda ke repository GitHub/GitLab/Bitbucket.
2. Login ke [Vercel](https://vercel.com) menggunakan akun GitHub Anda.
3. Klik tombol **"Add New"** > **"Project"**.
4. Pilih (Import) repository Portal Matematika Anda.
5. Vercel akan otomatis mendeteksi bahwa ini adalah proyek Astro. 
6. Biarkan pengaturan *Build Command* (`npm run build`) dan *Output Directory* (`dist`) secara default.
7. Klik **"Deploy"**. Dalam 1-2 menit, portal Anda akan online dengan URL gratis `nama-proyek.vercel.app`.

## Opsi 2: Netlify
Netlify juga sangat tangguh untuk situs statis dan memiliki sistem form bawaan jika Anda ingin menambahkan fitur kontak di portal nantinya.

**Langkah-langkah:**
1. Push kode ke GitHub.
2. Login ke [Netlify](https://www.netlify.com).
3. Buka tab **"Sites"** lalu klik **"Add new site"** > **"Import an existing project"**.
4. Hubungkan ke GitHub dan pilih repository Anda.
5. Netlify otomatis mendeteksi Astro. Konfigurasi build adalah:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Klik **"Deploy site"**. Tautan gratis `nama-proyek.netlify.app` akan segera aktif.

## Opsi 3: Cloudflare Pages
Sangat direkomendasikan jika Anda menginginkan jaringan *Content Delivery Network* (CDN) paling ngebut dan keamanan tingkat tinggi.

**Langkah-langkah:**
1. Push kode ke GitHub.
2. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com), lalu pilih menu **"Pages"**.
3. Klik **"Create a project"** > **"Connect to Git"**.
4. Pilih repository Anda.
5. Pada bagian *Build settings*, pilih *Framework preset* menjadi **Astro**.
6. Klik **"Save and Deploy"**. Tautan gratis `nama-proyek.pages.dev` akan tersedia.

---

### Tips Ekstra:
- **Custom Domain:** Ketiga layanan di atas mengizinkan Anda untuk memasang domain sendiri (misalnya `portalmatematika.com`) secara gratis.
- **Pembaruan Otomatis (CI/CD):** Setelah proyek Anda terhubung, setiap kali Anda melakukan *push* materi MDX baru ke *branch* `main` di GitHub, layanan hosting akan otomatis melakukan proses *build* ulang dan memperbarui situs Anda (tanpa perlu campur tangan manual). 

Selamat mengajar dan menyebarkan ilmu! 🚀
