if(!isset($_POST['submit'])) {
    <!-- This page should not be accessed directly. Need to submit the form. -->
    echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

<!-- Validate first -->
if(empty($name)||empty($visitor_email)) {
    echo "Name and email are mandatory!";
    exit;
}

$email_from = 'cyber-website@cyber.com'; 
$email_subject = "Password Change"; 
$email_body = "Your have received a new message from cyber website.\n".
"Please change your password via the following mail:"
$to = "$visitor_email";
$headers = "From: cyber-website@cyber.com";

<!-- Send the mail -->
mail($to, $email_subject, $email_body, $headers);