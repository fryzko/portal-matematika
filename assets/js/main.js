import { initNavigation } from "./components/navigation.js";
import { initBreadcrumb } from "./components/breadcrumb.js";
import { initSearch } from "./components/search.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initBreadcrumb();
    initSearch();
});
