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


/* =========================================
   MENÚ LATERAL MÓVIL
   DESTROYER PRIME CODEFORGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const logoToggle = document.getElementById("mobile-logo-toggle");
    const navigation = document.getElementById("main-navigation");
    const overlay = document.getElementById("menu-overlay");

    if (!logoToggle || !navigation || !overlay) return;

    const mobileQuery = window.matchMedia("(max-width: 900px)");

    function setMenuOpen(open) {
        navigation.classList.toggle("is-open", open);
        overlay.classList.toggle("is-visible", open);

        logoToggle.setAttribute("aria-expanded", String(open));
        logoToggle.setAttribute(
            "aria-label",
            open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        );

        overlay.setAttribute("aria-hidden", String(!open));

        document.body.style.overflow =
            open && mobileQuery.matches ? "hidden" : "";
    }

    // Pulsar el logo abre o cierra el panel en móvil.
    logoToggle.addEventListener("click", (event) => {
        if (!mobileQuery.matches) return;

        event.preventDefault();

        const isOpen = navigation.classList.contains("is-open");
        setMenuOpen(!isOpen);
    });

    // Pulsar el fondo oscuro cierra el menú.
    overlay.addEventListener("click", () => {
        setMenuOpen(false);
    });

    // Seleccionar una sección cierra el menú.
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });

    // Escape cierra el menú.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });

    // Al volver a escritorio, restablece el estado móvil.
    mobileQuery.addEventListener("change", () => {
        setMenuOpen(false);
    });
});


/* =========================================
   PROYECTOS DESTACADOS — ANIMACIÓN GSAP
   DESTROYER PRIME CODEFORGE
========================================= */

(() => {

    const projectsSection = document.querySelector("#proyectos");

    if (!projectsSection) return;

    // Comprobar que GSAP y ScrollTrigger estén disponibles
    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        console.warn("GSAP o ScrollTrigger no están cargados.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ELEMENTOS DEL ENCABEZADO
    const projectsLabel = projectsSection.querySelector(".projects-label");
    const projectsTitleWhite = projectsSection.querySelector(".projects-title-white");
    const projectsTitleRed = projectsSection.querySelector(".projects-title-red");
    const projectsDescription = projectsSection.querySelector(".projects-description");

    // TARJETAS
    const projectsGrid = projectsSection.querySelector(".projects-grid");
    const projectCards = projectsGrid
        ? projectsGrid.querySelectorAll(".project-card")
        : [];

    // Respetar la preferencia de movimiento reducido
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    // Crear la secuencia de entrada al llegar a la sección
    const projectsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: projectsSection,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true
        }
    });

    // 1. ETIQUETA: entrada desde la izquierda
    if (projectsLabel) {
        projectsTimeline.fromTo(
            projectsLabel,
            {
                autoAlpha: 0,
                x: -30
            },
            {
                autoAlpha: 1,
                x: 0,
                duration: 0.7,
                ease: "power3.out"
            }
        );
    }

    // 2. TÍTULO BLANCO: aparición ascendente
    if (projectsTitleWhite) {
        projectsTimeline.fromTo(
            projectsTitleWhite,
            {
                autoAlpha: 0,
                y: 35
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.3"
        );
    }

    // 3. TÍTULO ROJO: entrada con efecto de energía
    if (projectsTitleRed) {
        projectsTimeline.fromTo(
            projectsTitleRed,
            {
                autoAlpha: 0,
                y: 30,
                textShadow: "0 0 0 rgba(255, 0, 0, 0)"
            },
            {
                autoAlpha: 1,
                y: 0,
                textShadow: "0 0 14px rgba(255, 0, 0, 0.2)",
                duration: 0.9,
                ease: "power3.out"
            },
            "-=0.4"
        );
    }

    // 4. DESCRIPCIÓN: fundido suave
    if (projectsDescription) {
        projectsTimeline.fromTo(
            projectsDescription,
            {
                autoAlpha: 0,
                y: 20
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            },
            "-=0.35"
        );
    }

    // 5. TARJETAS: entrada alternada desde ambos lados
    if (projectCards.length > 0) {

        projectsTimeline.fromTo(
            projectCards,
            {
                autoAlpha: 0,
                x: (index) => index % 2 === 0 ? -55 : 55,
                y: 25,
                scale: 0.96
            },
            {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,

                duration: 1,
                stagger: 0.18,
                ease: "power3.out",

                // Recuperar el control del transform para
                // conservar el hover definido en tu CSS
                onComplete: () => {
                    gsap.set(projectCards, {
                        clearProps: "transform,opacity,visibility"
                    });
                }
            },
            "-=0.15"
        );
    }

})();


/* =========================================
   ACTIVACIÓN DEL REACTOR AL HACER CLIC
========================================= */

document.querySelectorAll(".experience-reactor").forEach((reactor) => {

    reactor.addEventListener("click", () => {

        // Reinicia el efecto si se hace clic varias veces
        reactor.classList.remove("is-activated");

        // Permite volver a ejecutar la animación
        void reactor.offsetWidth;

        // Activa la descarga de energía
        reactor.classList.add("is-activated");

        // Retira la clase al terminar
        setTimeout(() => {
            reactor.classList.remove("is-activated");
        }, 1100);

    });

});


/* =========================================
   EXPERIENCIA — ANIMACIÓN DE ENTRADA GSAP
========================================= */

(() => {
    if (typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined") {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const experienceSection = document.querySelector("#experiencia")
        || document.querySelector(".experience");

    if (!experienceSection) return;

    // Respetar la preferencia de movimiento reducido.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const heading = experienceSection.querySelector(".experience-heading");
    const label = experienceSection.querySelector(".experience-label");
    const title = experienceSection.querySelector(".experience-title");
    const timeline = experienceSection.querySelector(".experience-timeline");

    const nodes = experienceSection.querySelectorAll(
        ".experience-item:not(.experience-item-bottom) .experience-node"
    );

    const cards = experienceSection.querySelectorAll(
        ".experience-item:not(.experience-item-bottom) .experience-card, " +
        ".experience-item-bottom .experience-card-bottom"
    );

    const images = experienceSection.querySelectorAll(
        ".experience-certificate, " +
        ".experience-institution > .experience-institution-logo, " +
        ".experience-institution-link"
    );

    // Evita ejecutar la animación si falta la estructura principal.
    if (!heading || !timeline) return;

    const entrance = gsap.timeline({
        scrollTrigger: {
            trigger: experienceSection,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true
        }
    });

    // 1. Etiqueta: entrada sutil desde arriba.
    if (label) {
        entrance.fromTo(
            label,
            {
                autoAlpha: 0,
                y: 18
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out"
            }
        );
    }

    // 2. Título: aparece desde abajo.
    if (title) {
        entrance.fromTo(
            title,
            {
                autoAlpha: 0,
                y: 28
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            },
            "-=0.25"
        );
    }

    // 3. Reactores: activación progresiva.
    if (nodes.length) {
        entrance.fromTo(
            nodes,
            {
                autoAlpha: 0,
                scale: 0.7,
                y: 18
            },
            {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.16,
                ease: "back.out(1.5)",
                clearProps: "visibility"
            },
            "-=0.15"
        );
    }

    // 4. Tarjetas: aparecen una tras otra.
    if (cards.length) {
        entrance.fromTo(
            cards,
            {
                autoAlpha: 0,
                y: 32
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.18,
                ease: "power3.out",
                clearProps: "visibility"
            },
            "-=0.35"
        );
    }

    // 5. Certificados y escudos: entrada suave.
    if (images.length) {
        entrance.fromTo(
            images,
            {
                autoAlpha: 0,
                y: 20,
                scale: 0.96
            },
            {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "visibility"
            },
            "-=0.3"
        );
    }

})();


/* =========================================
   CONTACTO — ANIMACIÓN GSAP
========================================= */

if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {
    gsap.registerPlugin(ScrollTrigger);

    const contactSection = document.querySelector("#contacto");

    if (
        contactSection &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        const contactInfo = contactSection.querySelector(".contact-info");
        const contactVisual = contactSection.querySelector(".contact-visual");

        const contactLabel = contactSection.querySelector(".contact-label");
        const contactTitle = contactSection.querySelector(".contact-title");
        const contactDescription = contactSection.querySelector(".contact-description");
        const contactLinks = contactSection.querySelectorAll(".contact-link");
        const contactMessage = contactSection.querySelector(".contact-message");

        const contactButton = contactSection.querySelector(
            ".contact-buttonF, .contact-button"
        );

        const contactTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: "top 75%",
                toggleActions: "play none none none",
                once: true
            },
            defaults: {
                ease: "power3.out"
            }
        });

        // COLUMNA IZQUIERDA: ENTRADA PROGRESIVA

        if (contactInfo) {
            contactTimeline
                .from(contactLabel, {
                    y: 20,
                    autoAlpha: 0,
                    duration: 0.5
                }, 0)

                .from(contactTitle, {
                    y: 30,
                    autoAlpha: 0,
                    duration: 0.7
                }, 0.12)

                .from(contactDescription, {
                    y: 20,
                    autoAlpha: 0,
                    duration: 0.6
                }, 0.28)

                .from(contactLinks, {
                    y: 24,
                    autoAlpha: 0,
                    duration: 0.55,
                    stagger: 0.15
                }, 0.42)

                .from(contactMessage, {
                    y: 18,
                    autoAlpha: 0,
                    duration: 0.5
                }, ">-0.15");

            // BOTÓN FINAL

            if (contactButton) {
                contactTimeline.from(contactButton, {
                    y: 18,
                    autoAlpha: 0,
                    duration: 0.5
                }, ">-0.1");
            }
        }

        // COLUMNA DERECHA: LOGO

        if (contactVisual) {
            contactTimeline.from(contactVisual, {
                x: 45,
                autoAlpha: 0,
                scale: 0.96,
                duration: 0.9,
                ease: "power2.out"
            }, 0.25);
        }
    }
}


const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

