# Uji Template Halaman Materi - Uji Coba Matematika Fase D

Berkas ini berisi materi uji coba pembelajaran matematika SMP Fase D yang telah diststandardisasi berdasarkan **MathsIsFun Blueprint** dan disiapkan untuk diintegrasikan ke dalam framework Astro.

---

## Uji 1 — Mengenal Bilangan Bulat

```yaml
title: "Mengenal Bilangan Bulat"
topic: "Bilangan"
difficulty: "Grade 7"
needInteractive: true
```

### Pendahuluan / Pengantar
Bayangkan kamu sedang berada di puncak gunung salju yang sangat dingin. Termometer di sana menunjukkan angka di bawah nol derajat, misalnya $-5^\circ\text{C}$. Apa artinya? Artinya suhu di sana lebih dingin daripada titik beku air ($0^\circ\text{C}$).

Atau bayangkan ketika kamu meminjam uang Rp5.000 dari temanmu untuk membeli makanan di kantin. Karena uang tersebut harus dikembalikan, kondisi keuanganmu saat itu memiliki "utang" sebesar Rp5.000. Dalam matematika, keadaan memiliki utang ini dapat ditulis sebagai $-5.000$.

Tanda minus ($-$) di depan angka membantu kita menggambarkan situasi yang nilainya kurang dari nol, atau berlawanan arah dengan nilai positif biasa. Bilangan-bilangan seperti $-5$ dan $-5.000$ inilah yang kita sebut sebagai **bilangan bulat negatif**.

---

### Teori Utama & Rumus
Himpunan bilangan bulat (dilambangkan dengan $\mathbb{Z}$) adalah gabungan dari tiga kelompok bilangan:

1. **Bilangan Bulat Positif**: Bilangan yang nilainya lebih besar dari nol.
   $$\text{Contoh: } 1, 2, 3, 4, 5, \dots$$
2. **Nol ($0$)**: Bilangan netral yang tidak bernilai positif maupun negatif. Nol berfungsi sebagai batas pemisah.
3. **Bilangan Bulat Negatif**: Bilangan yang nilainya lebih kecil dari nol. Bilangan ini selalu ditulis dengan tanda minus ($-$) di depannya.
   $$\text{Contoh: } -1, -2, -3, -4, -5, \dots$$

#### Visualisasi pada Garis Bilangan
Untuk mempermudah membandingkan nilainya, kita dapat menggunakan garis bilangan:

```text
  Negatif (< 0)                     Nol                     Positif (> 0)
<---------------|----|----|----|-----|-----|-----|----|----|--------------->
               -4   -3   -2   -1     0     1     2    3    4
```

**Aturan Penting Garis Bilangan:**
- **Semakin ke kanan**, nilai bilangan akan **semakin besar**. Contoh: $3 > 1$ dan $0 > -2$.
- **Semakin ke kiri**, nilai bilangan akan **semakin kecil**. Contoh: $-4 < -1$ dan $-100 < 1$.

---

### Contoh Soal & Pembahasan

#### Contoh 1 (Mudah)
Kelompokkan bilangan-bilangan berikut berdasarkan jenisnya:
$$-7, \quad 4, \quad 0, \quad -2, \quad 8, \quad -5, \quad 1$$

**Pembahasan:**
- Bilangan yang memiliki tanda minus ($-$) di depannya termasuk **Bilangan Bulat Negatif**: $-7, -2, -5$.
- Angka **Nol**: $0$.
- Bilangan positif tanpa tanda minus (dan bukan nol) termasuk **Bilangan Bulat Positif**: $4, 8, 1$.

#### Contoh 2 (Menengah)
Sisipkan tanda perbandingan yang tepat ($>$ atau $<$) di antara pasangan bilangan berikut:
1. $-6$ dan $-2$
2. $-3$ dan $1$

**Pembahasan:**
1. Pada garis bilangan, posisi $-6$ terletak di sebelah kiri $-2$. Karena letaknya lebih ke kiri, nilainya lebih kecil. Jadi:
   $$-6 < -2$$
2. Bilangan negatif selalu terletak di sebelah kiri bilangan positif, sehingga nilainya pasti lebih kecil. Jadi:
   $$-3 < 1$$

#### Contoh 3 (Menantang)
Seekor lumba-lumba berenang pada kedalaman $8\text{ meter}$ di bawah permukaan laut. Di atasnya, seekor burung camar terbang pada ketinggian $5\text{ meter}$ di atas permukaan laut. 
1. Nyatakan posisi lumba-lumba dan burung camar menggunakan lambang bilangan bulat (ambil permukaan laut sebagai titik acuan $0$).
2. Berapakah jarak vertikal antara burung camar dan lumba-lumba tersebut?

**Pembahasan:**
1. Karena lumba-lumba berada di bawah permukaan laut (di bawah nol), posisinya ditulis sebagai bilangan bulat negatif: **$-8\text{ meter}$**. Burung camar berada di atas permukaan laut (di atas nol), posisinya ditulis sebagai bilangan bulat positif: **$5\text{ meter}$** (atau $+5\text{ meter}$).
2. Jarak vertikal dihitung dengan mencari selisih posisi tertinggi dengan posisi terendah:
   $$\text{Jarak} = \text{Posisi Camar} - \text{Posisi Lumba-lumba}$$
   $$\text{Jarak} = 5 - (-8)$$
   $$\text{Jarak} = 5 + 8 = 13\text{ meter}$$
   Jadi, jarak vertikal antara keduanya adalah **$13\text{ meter}$**.

---

### Simulasi Interaktif
Di bawah ini adalah area simulasi interaktif untuk membantu kamu memvisualisasikan posisi bilangan bulat pada garis bilangan.

<!-- INTERACTIVE_WIDGET: GARIS_BILANGAN_INTERAKTIF -->

---

### Asah Kemampuan / Kuis Singkat

#### Pertanyaan 1
Manakah di antara bilangan berikut yang nilainya paling kecil?
A. $-1$
B. $0$
C. $-10$
D. $-5$

#### Pertanyaan 2
Suhu udara di dalam ruang pembeku daging adalah $7^\circ\text{C}$ di bawah nol. Lambang bilangan bulat yang menyatakan suhu tersebut adalah...
A. $7$
B. $-7$
C. $0,7$
D. $-0,7$

#### Pertanyaan 3
Perhatikan pernyataan berikut:
(i) $-4 > -8$  
(ii) $-3 < -6$  
(iii) $0 > -2$  
(iv) $-5 > 2$  
Pernyataan yang benar adalah...
A. (i) dan (ii)
B. (i) dan (iii)
C. (ii) dan (iv)
D. (iii) dan (iv)

#### Pertanyaan 4
Urutan bilangan bulat berikut: $-8, 3, -1, 0, -5, 4$ dari yang terkecil ke terbesar adalah...
A. $-8, -5, -1, 0, 3, 4$
B. $-1, -5, -8, 0, 3, 4$
C. $4, 3, 0, -1, -5, -8$
D. $-8, -1, -5, 0, 3, 4$

#### Pertanyaan 5
Kapal selam berada pada kedalaman $200\text{ meter}$ di bawah permukaan laut. Kapal tersebut kemudian bergerak naik sejauh $40\text{ meter}$. Posisi kedalaman kapal selam sekarang adalah...
A. $-240\text{ meter}$
B. $-160\text{ meter}$
C. $160\text{ meter}$
D. $240\text{ meter}$

#### Kunci Jawaban
<details>
<summary>Klik di sini untuk melihat Kunci Jawaban & Pembahasan</summary>

1. **C** - Pada garis bilangan, semakin ke kiri letak suatu bilangan negatif, nilainya akan semakin kecil. Karena $-10$ terletak paling kiri dibanding $-5$, $-1$, dan $0$, maka $-10$ memiliki nilai terkecil.
2. **B** - Kata "di bawah nol" menunjukkan bilangan bulat negatif, sehingga $7$ di bawah nol ditulis sebagai $-7$.
3. **B** - Pernyataan (i) $-4 > -8$ benar karena $-4$ di sebelah kanan $-8$. Pernyataan (iii) $0 > -2$ juga benar karena nol selalu lebih besar dari bilangan bulat negatif.
4. **A** - Urutan dari yang terkecil dimulai dari bilangan negatif dengan angka terbesar: $-8$, dilanjutkan dengan $-5$, $-1$, $0$, dan bilangan positif dari terkecil: $3, 4$.
5. **B** - Posisi awal kapal selam adalah $-200$. Karena bergerak naik (bertambah), posisinya menjadi $-200 + 40 = -160\text{ meter}$ (atau $160\text{ meter}$ di bawah permukaan laut).
</details>

---
---

## Uji 2 — Mengenal Pola Bilangan

```yaml
title: "Mengenal Pola Bilangan"
topic: "Aljabar"
difficulty: "Grade 7"
needInteractive: true
```

### Pendahuluan / Pengantar
Pernahkah kamu memperhatikan kelopak bunga matahari atau susunan ubin di lantai rumahmu? Semuanya terlihat begitu rapi, teratur, dan memiliki keindahan karena tersusun mengikuti pola tertentu.

Dalam matematika, keteraturan ini disebut sebagai **pola**. Bayangkan jika kamu menyusun korek api membentuk barisan segitiga seperti di bawah ini:
- Segitiga pertama membutuhkan $3$ batang korek api.
- Segitiga kedua membutuhkan $5$ batang korek api.
- Segitiga ketiga membutuhkan $7$ batang korek api.

Susunan batang korek api tersebut membentuk barisan angka: $3, 5, 7, \dots$. Jika pola ini terus berlanjut, bisakah kamu menebak berapa batang korek api yang dibutuhkan untuk membuat segitiga keempat? 

Ya, benar! Jawabannya adalah $9$. Kamu bisa mengetahuinya dengan cepat karena ada aturan yang teratur, yaitu selalu bertambah $2$ batang korek api untuk segitiga berikutnya!

---

### Teori Utama & Rumus
**Pola Bilangan** adalah susunan bilangan yang dibentuk dengan mengikuti aturan tertentu secara konsisten. 

Berikut adalah beberapa jenis pola bilangan sederhana yang sering kita temukan:

1. **Pola Bilangan Ganjil**: Susunan bilangan ganjil positif.
   $$1, 3, 5, 7, 9, \dots$$
   Rumus suku ke-$n$ ($U_n$):
   $$U_n = 2n - 1$$
2. **Pola Bilangan Genap**: Susunan bilangan genap positif.
   $$2, 4, 6, 8, 10, \dots$$
   Rumus suku ke-$n$ ($U_n$):
   $$U_n = 2n$$
3. **Pola Bilangan Aritmetika (Beda Tetap)**: Pola bilangan di mana selisih antar dua suku yang berurutan selalu tetap (selisih ini disebut beda atau $b$).
   $$\text{Contoh: } 3, 8, 13, 18, \dots \quad (\text{selalu bertambah } 5)$$
   Rumus mencari suku ke-$n$ ($U_n$) barisan aritmetika:
   $$U_n = a + (n - 1)b$$
   *Keterangan:*
   - $a$ = suku pertama ($U_1$)
   - $b$ = beda atau selisih ($U_2 - U_1$)
   - $n$ = urutan suku yang dicari

---

### Contoh Soal & Pembahasan

#### Contoh 1 (Mudah)
Tentukan dua suku berikutnya dari barisan bilangan berikut: 
$$4, \quad 7, \quad 10, \quad 13, \dots$$

**Pembahasan:**
- Amati selisih antara suku-suku yang berurutan:
  $$7 - 4 = 3$$
  $$10 - 7 = 3$$
  $$13 - 10 = 3$$
- Aturan pola barisan ini adalah **"selalu bertambah $3$"**.
- Suku kelima: $13 + 3 = 16$.
- Suku keenam: $16 + 3 = 19$.
- Jadi, dua suku berikutnya adalah **$16$ dan $19$**.

#### Contoh 2 (Menengah)
Sebuah barisan aritmetika memiliki suku pertama $a = 5$ dan beda selisih $b = 4$. Tentukan nilai dari suku ke-12 ($U_{12}$)!

**Pembahasan:**
- Gunakan rumus suku ke-$n$ barisan aritmetika:
  $$U_n = a + (n - 1)b$$
- Masukkan nilai yang diketahui ($a = 5, b = 4, n = 12$):
  $$U_{12} = 5 + (12 - 1) \times 4$$
  $$U_{12} = 5 + 11 \times 4$$
  $$U_{12} = 5 + 44 = 49$$
- Jadi, suku ke-12 dari barisan tersebut adalah **$49$**.

#### Contoh 3 (Menantang)
Dalam sebuah aula pertemuan, kursi penonton diatur dalam beberapa baris. Baris paling depan (baris pertama) terdiri dari $15$ kursi. Baris di belakangnya selalu memuat $4$ kursi lebih banyak dari baris di depannya. Jika dalam aula tersebut terdapat total $10$ baris kursi, tentukan:
1. Banyaknya kursi pada baris terakhir (baris ke-10).
2. Jumlah seluruh kursi di dalam aula tersebut.

**Pembahasan:**
1. Masalah ini merupakan barisan aritmetika dengan suku pertama $a = 15$ dan beda $b = 4$. Banyaknya kursi pada baris ke-10 ($U_{10}$):
   $$U_10 = a + (10 - 1)b$$
   $$U_10 = 15 + 9 \times 4 = 15 + 36 = 51\text{ kursi}$$
   Jadi, baris terakhir memiliki **$51\text{ kursi}$**.
2. Untuk mencari total seluruh kursi ($S_{10}$), kita menggunakan rumus jumlah $n$ suku pertama deret aritmetika:
   $$S_n = \frac{n}{2} (a + U_n)$$
   $$S_{10} = \frac{10}{2} (a + U_{10})$$
   $$S_{10} = 5 \times (15 + 51)$$
   $$S_{10} = 5 \times 66 = 330\text{ kursi}$$
   Jadi, jumlah total kursi di dalam aula adalah **$330\text{ kursi}$**.

---

### Simulasi Interaktif
Cobalah bereksperimen dengan generator pola di bawah ini untuk melihat bagaimana perubahan nilai beda ($b$) memengaruhi pertumbuhan pola bilangan.

<!-- INTERACTIVE_WIDGET: GENERATOR_POLA_BILANGAN -->

---

### Asah Kemampuan / Kuis Singkat

#### Pertanyaan 1
Tiga suku berikutnya dari pola bilangan $3, 7, 11, 15, \dots$ adalah...
A. $19, 23, 27$
B. $18, 21, 24$
C. $19, 22, 25$
D. $20, 25, 30$

#### Pertanyaan 2
Rumus suku ke-$n$ dari barisan bilangan $5, 10, 15, 20, \dots$ adalah...
A. $U_n = n + 5$
B. $U_n = 5^n$
C. $U_n = 5n$
D. $U_n = 4n + 1$

#### Pertanyaan 3
Suku ke-20 dari barisan bilangan yang dirumuskan dengan $U_n = 3n - 2$ adalah...
A. $58$
B. $60$
C. $62$
D. $64$

#### Pertanyaan 4
Pola bilangan segitiga memiliki suku-suku: $1, 3, 6, 10, \dots$. Rumus suku ke-$n$ dari pola ini adalah $U_n = \frac{n(n+1)}{2}$. Suku ke-8 dari pola bilangan segitiga adalah...
A. $28$
B. $36$
C. $45$
D. $55$

#### Pertanyaan 5
Banyaknya lingkaran kecil pada pola noktah ke-1 adalah 2, pola ke-2 adalah 6, pola ke-3 adalah 12, dan pola ke-4 adalah 20 (pola persegi panjang). Banyak noktah pada pola ke-7 adalah...
A. $42$
B. $49$
C. $56$
D. $72$

#### Kunci Jawaban
<details>
<summary>Klik di sini untuk melihat Kunci Jawaban & Pembahasan</summary>

1. **A** - Barisan tersebut memiliki beda selisih $+4$. Tiga suku berikutnya: $15+4=19$, $19+4=23$, $23+4=27$.
2. **C** - Suku-suku barisan merupakan kelipatan $5$. Suku ke-$1 = 5(1)$, Suku ke-$2 = 5(2)$, dst. Maka rumusnya adalah $U_n = 5n$.
3. **A** - Substitusi nilai $n = 20$ ke dalam rumus $U_n = 3n - 2$:
   $$U_{20} = 3(20) - 2 = 60 - 2 = 58$$
4. **B** - Substitusi nilai $n = 8$ ke dalam rumus $U_n = \frac{n(n+1)}{2}$:
   $$U_8 = \frac{8(8+1)}{2} = 4 \times 9 = 36$$
5. **C** - Pola persegi panjang dirumuskan dengan $U_n = n(n+1)$. Untuk pola ke-7 ($n = 7$):
   $$U_7 = 7 \times (7 + 1) = 7 \times 8 = 56$$
</details>

---
---

## Uji 3 — Mengenal Teorema Pythagoras

```yaml
title: "Mengenal Teorema Pythagoras"
topic: "Geometri"
difficulty: "Grade 8"
needInteractive: true
```

### Pendahuluan / Pengantar
Pernahkah kamu melihat seorang tukang bangunan mengukur sudut ruangan saat membuat fondasi rumah? Agar bangunan berdiri kokoh dan tegak lurus, sudut pertemuan antar dinding harus membentuk sudut siku-siku yang sempurna ($90^\circ$).

Untuk memastikannya, para tukang sering menggunakan teknik kuno dengan seutas tali pembatas yang memiliki perbandingan ukuran $3\text{ meter}$, $4\text{ meter}$, dan $5\text{ meter}$. Ketika ketiga sisi ini disatukan membentuk segitiga, secara ajaib sudut yang terbentuk pasti siku-siku!

Mengapa perbandingan angka ini selalu menghasilkan sudut siku-siku yang sempurna? 

Jawabannya ada pada aturan matematika luar biasa yang ditemukan oleh seorang filsuf dan matematikawan Yunani kuno bernama **Pythagoras** sekitar 2.500 tahun yang lalu. Aturan ini dinamakan **Teorema Pythagoras**, yang menjelaskan hubungan erat antara panjang sisi-sisi pada segitiga siku-siku.

---

### Teori Utama & Rumus
Teorema Pythagoras menyatakan bahwa pada setiap **segitiga siku-siku**, kuadrat panjang sisi miring (hipotenusa) sama dengan jumlah kuadrat panjang kedua sisi siku-sikunya.

Hipotenusa (sisi miring) adalah sisi terpanjang pada segitiga siku-siku dan letaknya selalu berada **tepat di depan sudut siku-siku**.

```text
               /|
              / |
          c  /  |  b (Sisi Tegak)
            /   |
           /____|
             a
      (Sisi Mendatar)
```

Jika panjang sisi-sisi siku-sikunya adalah $a$ dan $b$, serta panjang sisi miringnya adalah $c$, maka berlaku rumus:
$$a^2 + b^2 = c^2$$

Rumus turunan untuk mencari panjang masing-masing sisi:
- **Mencari sisi miring ($c$):**
  $$c = \sqrt{a^2 + b^2}$$
- **Mencari sisi mendatar ($a$):**
  $$a = \sqrt{c^2 - b^2}$$
- **Mencari sisi tegak ($b$):**
  $$b = \sqrt{c^2 - a^2}$$

---

### Contoh Soal & Pembahasan

#### Contoh 1 (Mudah)
Sebuah segitiga siku-siku memiliki panjang sisi siku-siku mendatar $a = 6\text{ cm}$ dan sisi tegak $b = 8\text{ cm}$. Tentukan panjang sisi miring ($c$) dari segitiga tersebut!

**Pembahasan:**
- Gunakan rumus Teorema Pythagoras untuk mencari sisi miring ($c$):
  $$c = \sqrt{a^2 + b^2}$$
- Masukkan nilai $a = 6$ dan $b = 8$:
  $$c = \sqrt{6^2 + 8^2}$$
  $$c = \sqrt{36 + 64}$$
  $$c = \sqrt{100} = 10\text{ cm}$$
- Jadi, panjang sisi miring segitiga tersebut adalah **$10\text{ cm}$**.

#### Contoh 2 (Menengah)
Diketahui panjang sisi miring sebuah segitiga siku-siku adalah $c = 13\text{ cm}$ dan panjang salah satu sisi siku-sikunya adalah $a = 5\text{ cm}$. Berapakah panjang sisi siku-siku lainnya ($b$)?

**Pembahasan:**
- Gunakan rumus turunan untuk mencari sisi siku-siku tegak ($b$):
  $$b = \sqrt{c^2 - a^2}$$
- Masukkan nilai $c = 13$ dan $a = 5$:
  $$b = \sqrt{13^2 - 5^2}$$
  $$b = \sqrt{169 - 25}$$
  $$b = \sqrt{144} = 12\text{ cm}$$
- Jadi, panjang sisi siku-siku lainnya adalah **$12\text{ cm}$**.

#### Contoh 3 (Menantang)
Sebuah tangga yang panjangnya $2,5\text{ meter}$ disandarkan pada dinding sebuah bangunan tegak. Jika jarak kaki tangga di lantai ke dinding adalah $0,7\text{ meter}$, berapakah tinggi dinding yang dapat dicapai oleh ujung atas tangga tersebut?

**Pembahasan:**
- Tangga, dinding, dan permukaan tanah membentuk segitiga siku-siku.
  - Sisi miring (panjang tangga) $c = 2,5\text{ meter}$.
  - Sisi siku-siku mendatar (jarak kaki tangga ke dinding) $a = 0,7\text{ meter}$.
  - Sisi siku-siku tegak (tinggi dinding) $b$ adalah variabel yang dicari.
- Gunakan rumus Pythagoras untuk mencari $b$:
  $$b = \sqrt{c^2 - a^2}$$
  $$b = \sqrt{2,5^2 - 0,7^2}$$
  $$b = \sqrt{6,25 - 0,49}$$
  $$b = \sqrt{5,76} = 2,4\text{ meter}$$
- Jadi, tinggi dinding yang dapat dicapai oleh ujung atas tangga adalah **$2,4\text{ meter}$**.

---

### Simulasi Interaktif
Gunakan widget di bawah ini untuk menarik sudut-sudut segitiga siku-siku dan perhatikan bagaimana nilai kuadrat $a^2 + b^2$ akan selalu sama dengan $c^2$.

<!-- INTERACTIVE_WIDGET: VISUALISASI_SEGITIGA_PYTHAGORAS -->

---

### Asah Kemampuan / Kuis Singkat

#### Pertanyaan 1
Manakah di antara kelompok tiga bilangan berikut yang merupakan Tripel Pythagoras?
A. $3, 4, 6$
B. $5, 12, 13$
C. $6, 8, 12$
D. $8, 15, 18$

#### Pertanyaan 2
Sebuah segitiga siku-siku memiliki panjang hipotenusa $17\text{ cm}$ dan panjang salah satu sisi siku-sikunya adalah $15\text{ cm}$. Panjang sisi siku-siku yang lain adalah...
A. $8\text{ cm}$
B. $9\text{ cm}$
C. $10\text{ cm}$
D. $12\text{ cm}$

#### Pertanyaan 3
Suatu segitiga siku-siku memiliki sisi siku-siku mendatar $a = 9\text{ cm}$ dan sisi siku-siku tegak $b = 12\text{ cm}$. Panjang sisi miring ($c$) segitiga tersebut adalah...
A. $13\text{ cm}$
B. $14\text{ cm}$
C. $15\text{ cm}$
D. $16\text{ cm}$

#### Pertanyaan 4
Segitiga siku-siku memiliki panjang sisi siku-siku mendatar $a = 12\text{ cm}$ dan sisi miring $c = 20\text{ cm}$. Luas dari segitiga tersebut adalah...
A. $120\text{ cm}^2$
B. $96\text{ cm}^2$
C. $80\text{ cm}^2$
D. $60\text{ cm}^2$
*(Petunjuk: Cari panjang sisi siku-siku tegak $b$ terlebih dahulu, kemudian gunakan rumus luas segitiga $L = \frac{1}{2} \times a \times b$)*

#### Pertanyaan 5
Seorang anak berjalan kaki ke arah timur sejauh $8\text{ meter}$, kemudian berbelok ke arah utara sejauh $6\text{ meter}$. Jarak terpendek anak tersebut saat ini dari titik awal ia mulai berjalan adalah...
A. $10\text{ meter}$
B. $12\text{ meter}$
C. $14\text{ meter}$
D. $16\text{ meter}$

#### Kunci Jawaban
<details>
<summary>Klik di sini untuk melihat Kunci Jawaban & Pembahasan</summary>

1. **B** - Kelompok bilangan $5, 12, 13$ memenuhi persamaan Pythagoras karena:
   $$5^2 + 12^2 = 25 + 144 = 169 = 13^2$$
2. **A** - Sisi siku-siku yang dicari adalah $b = \sqrt{c^2 - a^2}$:
   $$b = \sqrt{17^2 - 15^2} = \sqrt{289 - 225} = \sqrt{64} = 8\text{ cm}$$
3. **C** - Sisi miring $c = \sqrt{a^2 + b^2}$:
   $$c = \sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15\text{ cm}$$
4. **B** - Langkah pertama, cari tinggi segitiga $b = \sqrt{20^2 - 12^2} = \sqrt{400 - 144} = \sqrt{256} = 16\text{ cm}$. Langkah kedua, hitung luas:
   $$L = \frac{1}{2} \times 12 \times 16 = 6 \times 16 = 96\text{ cm}^2$$
5. **A** - Rute timur dan utara membentuk sudut siku-siku. Jarak terpendek adalah sisi miring ($c$):
   $$c = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = \sqrt{100} = 10\text{ meter}$$
</details>
