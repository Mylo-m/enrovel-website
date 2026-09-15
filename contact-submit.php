<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$company = trim($_POST['company'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$solution = trim($_POST['solution'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit;
}

$to = "info@enrovel.com";
$subject = "Enrovel Website Enquiry — $name";
$body = "Name: $name\nEmail: $email\nCompany: $company\nPhone: $phone\nSolution: $solution\n\nProject Details:\n$message";
$headers = "From: noreply@enrovel.com\r\nReply-To: $email";

mail($to, $subject, $body, $headers);

echo json_encode(["success" => true, "message" => "Thank you. We will be in touch shortly."]);
?>
