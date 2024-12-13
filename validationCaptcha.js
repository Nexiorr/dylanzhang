document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire pour la validation

    // Récupère la réponse du reCAPTCHA
    var captchaResponse = grecaptcha.getResponse();

    // Si la réponse est vide, cela signifie que l'utilisateur n'a pas validé le CAPTCHA
    if (captchaResponse.length === 0) {
        // Ajoute une bordure rouge autour du reCAPTCHA pour indiquer l'erreur
        document.querySelector('.g-recaptcha').style.border = "2px solid red";
        
        // Affiche une alerte
        alert("Veuillez vérifier que vous n'êtes pas un robot.");
    } else {
        // Si le reCAPTCHA est validé, soumettre le formulaire
        this.submit();
    }
});
