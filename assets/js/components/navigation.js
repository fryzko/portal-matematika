/**
 * Navigation — Portal Ruang Matematika SMP
 * Menandai halaman aktif pada menu utama.
 */

export function initNavigation() {
    const currentPath = normalizePath(window.location.pathname);
    const navLinks = document.querySelectorAll(".navigation-list a[href]");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const linkPath = normalizePath(resolvePath(href));

        if (linkPath === currentPath) {
            link.setAttribute("aria-current", "page");
        }
    });
}

function normalizePath(path) {
    return path
        .replace(/\\/g, "/")
        .replace(/\/index\.html$/i, "/")
        .replace(/\.html$/i, "")
        .replace(/\/+$/, "")
        .toLowerCase();
}

function resolvePath(href) {
    try {
        return new URL(href, window.location.href).pathname;
    } catch {
        return href;
    }
}
