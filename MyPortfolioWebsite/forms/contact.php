<?php
// IMPORTANT: change this to YOUR email
$receiving_email_address = "contact@ribkamengiste.com";

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(403);
  echo "Access denied";
  exit;
}

// Sanitize inputs
$name    = trim(strip_tags($_POST["name"] ?? ""));
$email   = trim(strip_tags($_POST["email"] ?? ""));
$subject = trim(strip_tags($_POST["subject"] ?? ""));
$message = trim(strip_tags($_POST["message"] ?? ""));

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
  http_response_code(400);
  echo "Please fill all required fields.";
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Invalid email address.";
  exit;
}

// Email content
$email_subject = "Portfolio Contact: $subject";
$email_body = "You have received a new message.\n\n".
              "Name: $name\n".
              "Email: $email\n\n".
              "Message:\n$message\n";

// Headers (VERY IMPORTANT)
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($receiving_email_address, $email_subject, $email_body, $headers)) {
  echo "OK";
} else {
  http_response_code(500);
  echo "Failed to send email. Please try again later.";
}
