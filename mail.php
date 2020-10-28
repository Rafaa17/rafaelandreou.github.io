<?php

$address = "";
$first_name = "";
$subject = "";
$msg = "";

if (isset($_POST['email'])) {
    $address = $_POST['email'];
}

if (isset($_POST['msg'])) {
    $msg = $_POST['msg'];
}

if (isset($_POST['subject'])) {
    $subject = $_POST['subject'];
}

if (isset($_POST['name'])) {
    $first_name = $_POST['name'];
}

$message = "New email For Rafael Andreou \r\n" .$first_name. " " . " wrote the following:" . "\n\n" . $msg;

$headers = "From: " . $address. "\r\n";

// send email
mail("rafandreou17@gmail.com", "Email For Rafael Andreou : Subject " . $subject, $message, $headers);

echo "Message Received. We will Contact you soon!";

?>
