// Attendre que la page soit complètement chargée
window.addEventListener('load', () => {
    // Sélectionner la section "À propos"
    const aboutSection = document.querySelector('.about-content'); 

    // Options pour l'IntersectionObserver (quand 50% de la section est visible)
    const options = {
        root: null,  // Le root est le viewport (la fenêtre de l'utilisateur)
        rootMargin: '0px', 
        threshold: 0.5  // 50% de la section doit être visible avant de déclencher l'animation
    };

    // Créer un IntersectionObserver pour observer la section
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Vérifier si la section est visible dans le viewport
            if (entry.isIntersecting) {
                // Ajouter la classe 'animate' pour déclencher l'animation
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Ne plus observer la section après l'animation
            }
        });
    }, options);

    // Observer la section 'À propos'
    observer.observe(aboutSection);
});
