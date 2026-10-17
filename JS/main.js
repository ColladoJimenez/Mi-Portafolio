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

/* ========================================
   SOBRE MÍ — ANIMACIÓN GSAP
   DESTROYER PRIME CODEFORGE
======================================== */

(() => {
    const aboutSection = document.querySelector("#sobre-mi");

    if (!aboutSection) return;

    // Comprobar que GSAP y ScrollTrigger estén cargados
    if (typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined") {
        console.warn("GSAP o ScrollTrigger no están cargados.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Acceder a los elementos de Sobre mí
    const label = aboutSection.querySelector(".about-label");
    const titleWhite = aboutSection.querySelector(".about-title-white");
    const titleRed = aboutSection.querySelector(".about-title-red");
    const description = aboutSection.querySelector(".about-description");
    const reactor = aboutSection.querySelector(".about-visual");

    // Respetar la preferencia de movimiento reducido
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    // Crear la secuencia de entrada
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: "top 75%",
            once: true
        }
    });

    // 1. Etiqueta: entrada desde la izquierda
    timeline.from(label, {
        autoAlpha: 0,
        x: -25,
        duration: 0.8,
        ease: "power2.out"
    });

    // 2. Título blanco: aparece desde abajo
    timeline.from(titleWhite, {
        autoAlpha: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out"
    }, "-=0.35");

    // 3. Título rojo: aparición destacada
    timeline.from(titleRed, {
        autoAlpha: 0,
        y: 30,
        duration: 1.1,
        ease: "power3.out"
    }, "-=0.5");

    // 4. Descripción: fundido suave
    timeline.from(description, {
        autoAlpha: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    }, "-=0.45");

    // 5. Reactor: entrada cinematográfica desde la derecha
    timeline.from(reactor, {
        autoAlpha: 0,
        x: 65,
        scale: 0.88,
        rotation: 6,
        duration: 1.5,
        ease: "power3.out"
    }, "-=1.1");

})();


/* =========================================
   ENTRADA ANIMADA: HABILIDADES
   DESTROYER PRIME CODEFORGE
========================================= */

if (typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    const skillsSection = document.querySelector("#habilidades");

    if (skillsSection) {

        const skillsLabel = skillsSection.querySelector(".skills-label");
        const skillsTitleWhite = skillsSection.querySelector(".skills-title-white");
        const skillsTitleRed = skillsSection.querySelector(".skills-title-red");
        const skillsDescription = skillsSection.querySelector(".skills-description");
        const skillsCarousel = skillsSection.querySelector(".skills-carousel");

        const skillsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: skillsSection,
                start: "top 75%",
                toggleActions: "play none none none",
                once: true
            }
        });

        // 1. Etiqueta HABILIDADES
        if (skillsLabel) {
            skillsTimeline.fromTo(
                skillsLabel,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out"
                }
            );
        }

        // 2. Título blanco
        if (skillsTitleWhite) {
            skillsTimeline.fromTo(
                skillsTitleWhite,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out"
                },
                "-=0.25"
            );
        }

        // 3. Título rojo con un ligero brillo
        if (skillsTitleRed) {
            skillsTimeline.fromTo(
                skillsTitleRed,
                {
                    opacity: 0,
                    y: 30,
                    textShadow: "0 0 0 rgba(255, 0, 0, 0)"
                },
                {
                    opacity: 1,
                    y: 0,
                    textShadow: "0 0 14px rgba(255, 16, 40, 0.2)",
                    duration: 0.8,
                    ease: "power3.out"
                },
                "-=0.4"
            );
        }

        // 4. Descripción
        if (skillsDescription) {
            skillsTimeline.fromTo(
                skillsDescription,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out"
                },
                "-=0.35"
            );
        }

        // 5. Entrada del carrusel sin alterar su movimiento infinito
        if (skillsCarousel) {
            skillsTimeline.fromTo(
                skillsCarousel,
                {
                    opacity: 0,
                    y: 25,
                    scale: 0.98
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out"
                },
                "-=0.2"
            );
        }
    }
}

