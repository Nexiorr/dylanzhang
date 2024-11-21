document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, header"); // Inclut maintenant 'header' aussi
    const navLinks = document.querySelectorAll(".navbar-links a"); // Liens de la navbar

    // Fonction pour détecter la section visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Récupérer l'ID de la section visible
                    const sectionId = entry.target.getAttribute("id");

                    // Mettre à jour les classes actives sur les liens
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
            root: null, // Utilise la fenêtre comme viewport
            threshold: 0.6, // Au moins 60% de la section doit être visible
        }
    );

    // Observer chaque section et le header "home"
    sections.forEach((section) => observer.observe(section));

    // Ajout d'un état "actif" à la première section ("Accueil") par défaut
    if (document.getElementById("home")) {
        const homeLink = document.querySelector('a[href="#home"]');
        homeLink.classList.add("active");
    }
});
