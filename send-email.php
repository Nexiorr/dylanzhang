<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Clé secrète de reCAPTCHA
    $secretKey = "YOUR_SECRET_KEY_HERE"; // Remplace par ta clé secrète

    // Récupère la réponse reCAPTCHA
    $captcha = $_POST['g-recaptcha-response'];
    
    // Envoi de la requête à l'API de validation de reCAPTCHA
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha");
    $responseKeys = json_decode($response, true);

    // Si la validation reCAPTCHA échoue
    if (intval($responseKeys["success"]) !== 1) {
        echo "Erreur : Vous n'êtes pas un humain !";
    } else {
        // Si reCAPTCHA est validé, récupérer les données du formulaire
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Destinataire de l'email
        $to = "ton-email@example.com"; // Remplace par ton email

        // Sujet de l'email
        $subject = "Nouveau message de contact";

        // Corps du message
        $body = "Nom: $name\nEmail: $email\nMessage: $message";

        // En-têtes pour l'email
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message envoyé avec succès!";
        } else {
            echo "Erreur lors de l'envoi du message.";
        }
    }
}
?>
