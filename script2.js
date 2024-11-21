document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar"); // Sélectionne la navbar
    const homeSection = document.getElementById("home"); // Sélectionne la section "home" (accueil)

    // Créer un observateur pour détecter quand la section "home" est dans la vue
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // Si la section "home" n'est pas visible (quand on scroll vers le bas)
                if (!entry.isIntersecting) {
                    navbar.classList.add("transparent"); // Ajoute la classe "transparent"
                } else {
                    navbar.classList.remove("transparent"); // Retire la classe "transparent"
                }
            });
        },
        {
            root: null, // Utilise la fenêtre comme point de vue
            threshold: 0, // Le seuil est à 0, ce qui signifie que dès que la section disparaît, cela déclenche l'événement
        }
    );

    // Observer la section "home"
    observer.observe(homeSection);
});
