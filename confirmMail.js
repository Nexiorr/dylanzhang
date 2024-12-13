document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire immédiatement

    var captchaResponse = grecaptcha.getResponse(); // Récupère la réponse du reCAPTCHA

    if (captchaResponse.length === 0) {
        // Si la réponse est vide, afficher une erreur
        alert("Veuillez vérifier que vous n'êtes pas un robot.");

        // Ajouter une bordure rouge sur le reCAPTCHA pour signaler l'erreur
        document.querySelector('.g-recaptcha').style.border = "2px solid red";
    } else {
        // Si le CAPTCHA est validé, soumettre le formulaire
        this.submit(); // Soumet le formulaire
    }
});
