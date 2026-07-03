/**
 * Breadcrumb — Portal Ruang Matematika SMP
 * Memastikan breadcrumb terakhir memiliki aria-current.
 */

export function initBreadcrumb() {
    const breadcrumbs = document.querySelectorAll(".breadcrumb-list");

    breadcrumbs.forEach((list) => {
        const lastItem = list.querySelector("li:last-child span");

        if (lastItem && !lastItem.hasAttribute("aria-current")) {
            lastItem.setAttribute("aria-current", "page");
        }
    });
}
