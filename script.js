document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".navbar-links a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("id");
                    navLinks.forEach((link) => {
                        if (link.getAttribute("href").substring(1) === sectionId) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        },
        {
            root: null,
            threshold: 0.6,
        }
    );

    sections.forEach((section) => observer.observe(section));

    if (document.getElementById("home")) {
        const homeLink = document.querySelector('a[href="#home"]');
        homeLink.classList.add("active");
    }
});
