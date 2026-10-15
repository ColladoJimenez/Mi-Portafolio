
/* ========================================
   HEADER — MENÚ RESPONSIVE
======================================== */

(() => {
    const navbar = document.querySelector("#navbar");
    const menuToggle = document.querySelector("#menu-toggle");
    const navigation = document.querySelector("#main-navigation");

    if (!navbar || !menuToggle || !navigation) return;

    const navLinks = navigation.querySelectorAll(".nav-link");

    function closeMenu() {
        navbar.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("menu-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    // Cerrar el menú con Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });

    // Si se vuelve a escritorio, cerrar el menú móvil
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1100) {
            closeMenu();
        }
    });
})();
