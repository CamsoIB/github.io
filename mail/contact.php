<?php /*?><?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

//$to = "info@example.com"; // Change this email to your //
$to = "";
$subject = "$m_subject:  $name";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage: $message";
$header = "From: $email";
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
<?php */?>
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(500);
    exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$mail = new PHPMailer(true);

try {
    // Paramètres du serveur
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Spécifiez le serveur SMTP principal de votre hébergeur
    $mail->SMTPAuth = true;
    $mail->Username = 'your-email'; // Votre adresse e-mail SMTP
    $mail->Password = 'password'; // Votre mot de passe SMTP
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Destinataires
    $mail->setFrom($email, $name);
    $mail->addAddress('your-email'); // Ajoutez un destinataire
    $mail->addReplyTo($email, $name);

    // Contenu de l'e-mail
    $mail->isHTML(true);
    $mail->Subject = $m_subject;
    $mail->Body    = "You have received a new message from your website contact form.<br><br>" .
                     "Here are the details:<br><br>" .
                     "Name: $name<br><br>" .
                     "Email: $email<br><br>" .
                     "Subject: $m_subject<br><br>" .
                     "Message: $message";
    $mail->AltBody = "You have received a new message from your website contact form.\n\n" .
                     "Here are the details:\n\n" .
                     "Name: $name\n\n" .
                     "Email: $email\n\n" .
                     "Subject: $m_subject\n\n" .
                     "Message: $message";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    http_response_code(500);
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
