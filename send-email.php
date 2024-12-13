<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Clé secrète de reCAPTCHA
    $secretKey = "YOUR_SECRET_KEY_HERE"; // Remplace par ta clé secrète
    
    // Vérification du reCAPTCHA
    $captcha = $_POST['g-recaptcha-response'];
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha");
    $responseKeys = json_decode($response, true);
    
    // Si reCAPTCHA est validé
    if(intval($responseKeys["success"]) !== 1) {
        echo "Vous n'êtes pas un humain!";
    } else {
        // Si le CAPTCHA est validé, envoyer l'email
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Destinataire de l'email
        $to = "example@example.com"; // Remplace par ton email
        $subject = "Nouveau message de contact";
        
        // Corps du message
        $body = "Nom: $name\nEmail: $email\nMessage: $message";
        
        // En-têtes
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Envoi de l'email
        if(mail($to, $subject, $body, $headers)) {
            echo "Message envoyé avec succès!";
        } else {
            echo "Erreur lors de l'envoi du message.";
        }
    }
}
?>
