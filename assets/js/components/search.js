/**
 * Search — Portal Ruang Matematika SMP
 */

export function initSearch() {
    const searchContainer = document.getElementById("search");
    if (!searchContainer) return;

    if (typeof PagefindUI !== 'undefined') {
        new PagefindUI({ 
            element: "#search", 
            showSubResults: true,
            translations: {
                placeholder: "Ketik kata kunci pencarian...",
                clear_search: "Bersihkan",
                load_more: "Muat lebih banyak",
                search_label: "Pencarian",
                filters_label: "Filter",
                zero_results: "Tidak ada materi yang cocok dengan '[SEARCH_TERM]'",
                many_results: "Ditemukan [COUNT] hasil untuk '[SEARCH_TERM]'",
                one_result: "Ditemukan [COUNT] hasil untuk '[SEARCH_TERM]'",
                alt_search: "Tidak ada materi yang cocok dengan '[SEARCH_TERM]'. Menampilkan hasil untuk '[DIFFERENT_TERM]'",
                search_suggestion: "Tidak ada materi yang cocok dengan '[SEARCH_TERM]'. Coba pencarian berikut:",
                searching: "Mencari..."
            }
        });
    } else {
        searchContainer.innerHTML = `
            <div style="padding: 2rem; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
              <p style="margin:0; color: #856404;">
                <strong>Pencarian sedang dalam mode Development.</strong><br>
                Untuk menggunakan fitur pencarian Pagefind, Anda harus melakukan *build* proyek terlebih dahulu dengan perintah:
                <br><br><code>npm run build && npm run preview</code>
              </p>
            </div>
        `;
    }
}
