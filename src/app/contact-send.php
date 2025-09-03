<?php
$token = $_POST['cf-turnstile-response'] ?? '';
$secret = '0x4AAAAAAByF13PsL9PQjeCii9YpKDzkj-Y';
$verify = file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, stream_context_create([
  'http' => [
    'method' => 'POST',
    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
    'content' => http_build_query(['secret' => $secret, 'response' => $token, 'remoteip' => $_SERVER['REMOTE_ADDR'] ?? null]),
    'timeout' => 5,
  ],
]));
$ok = json_decode($verify, true)['success'] ?? false;
if (!$ok) { header('Location: /contact?sent=0'); exit; }

// contact-send.php
// --- Réglages prudents ---
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Méthode requise
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Méthode non autorisée'); }
function field($k){ return trim($_POST[$k] ?? ''); }

// Honeypot (champ caché "website" doit rester vide)
if (!empty($_POST['website'] ?? '')) { http_response_code(200); exit('OK'); }

// Anti-refresh simple
// session_start();
// if (!isset($_SESSION['form_time'])) $_SESSION['form_time'] = time();
// if (time() - $_SESSION['form_time'] < 3) { http_response_code(429); exit('Trop de requêtes'); }
// $_SESSION['form_time'] = time();

// Champs
$name    = field('name');
$email   = field('email');
$phone   = field('phone');
$company = field('company');
$message = field('message');

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
  http_response_code(400); exit('Champs obligatoires manquants');
}

// === PHPMailer (sans Composer) ===
// Assure-toi QUE CES FICHIERS EXISTENT BIEN :
require_once __DIR__ . '/contact/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/contact/phpmailer/src/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer(true);

try {
  // Pas de SMTP : utilise le MTA local (sendmail/exim)
  $mail->isMail();
  $mail->CharSet = 'UTF-8';

  // Expéditeur & destinataires (expéditeur = ton domaine)
  $mail->setFrom('web@agencedigitale.ca', 'Formulaire site');
  $mail->Sender = 'web@agencedigitale.ca'; // Return-Path
  $mail->addAddress('web@agencedigitale.ca', 'Digitale');
  $mail->addReplyTo($email, $name);

  // Contenu
  $mail->isHTML(true);
  $mail->Subject = 'Nouveau message — Formulaire de contact';
  $body = nl2br(
    "Nom: {$name}\nEmail: {$email}\nTéléphone: {$phone}\nEntreprise: {$company}\n\nMessage:\n{$message}"
  );
  $mail->Body    = $body;
  $mail->AltBody = "Nom: {$name}\nEmail: {$email}\nTéléphone: {$phone}\nEntreprise: {$company}\n\nMessage:\n{$message}";

  $mail->send();
  header('Location: /contact?sent=1'); exit;
} catch (Throwable $e) {
  // Log serveur si besoin : error_log($e->getMessage());
  header('Location: /contact?sent=0'); exit;
}

