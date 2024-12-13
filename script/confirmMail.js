document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var captchaResponse = grecaptcha.getResponse();

    if (captchaResponse.length === 0) {
        alert("Veuillez vérifier que vous n'êtes pas un robot.");

        document.querySelector('.g-recaptcha').style.border = "2px solid red";
    } else {
        this.submit();
    }
});
