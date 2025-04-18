document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");
    const navLinks = document.querySelectorAll("a.nav-link");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    function updateActiveNavLink() {
        let scrollPosition = window.scrollY + 100;
        let activeLink = null;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            }
        });

        navLinks.forEach((link) => link.classList.remove("active"));
        if (activeLink) {
            activeLink.classList.add("active");
        } else {
            document.querySelector('nav ul li a[href="#home"]').classList.add("active");
        }
    }

    window.addEventListener("scroll", () => {
        revealSections();
        updateActiveNavLink();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth",
            });

            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = "flex";
            if (!navMenu.classList.contains("active")) {
                navMenu.style.display = "none";
            }
        } else {
            hamburger.style.display = "none";
            navMenu.style.display = "flex";
        }
    }

    revealSections();
    updateActiveNavLink();
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
});
