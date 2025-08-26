<?php
// Change this to your real email
$receiving_email_address = 'your-email@example.com';

// Include PHP Email Form library if exists
$php_email_form_path = __DIR__ . '/../assets/vendor/php-email-form/php-email-form.php';

if (file_exists($php_email_form_path)) {
    include($php_email_form_path);
} else {
    // Fallback: Simple PHP mail() if library not found
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name    = strip_tags($_POST['name']);
        $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = strip_tags($_POST['subject']);
        $message = strip_tags($_POST['message']);

        $headers = "From: $name <$email>\r\nReply-To: $email\r\n";
        if (mail($receiving_email_address, $subject, $message, $headers)) {
            echo 'OK';
        } else {
            echo 'Failed to send message.';
        }
    }
    exit;
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

// Uncomment below to use SMTP (if needed)
/*
$contact->smtp = array(
    'host' => 'smtp.yourserver.com',
    'username' => 'your_username',
    'password' => 'your_password',
    'port' => '587'
);
*/

$contact->add_message($_POST['name'], 'From');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

echo $contact->send();
?>
