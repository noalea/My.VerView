<?php

$data = file_get_contents("php://input");
$receivedData = json_decode($data);

$business = $receivedData->business;
$website = $receivedData->website;
$email = $receivedData->email;
$phone = $receivedData->phone;
$address = $receivedData->address;
$country = $receivedData->country;
$postal = $receivedData->postal;
$province = $receivedData->province;
$images = $receivedData->images;
$packageType = $receivedData->package_type;
$images_list = "";

foreach ($images as $image) {
    $images_list = $images_list . $image . ", ";
}


require 'class.phpmailer.php';
require 'class.smtp.php';

//PHPMailer Object
$mail = new PHPMailer;

$mail->IsSMTP();
$mail->Host = "smtp.iopw.com";

$mail->From = $email;
$mail->FromName = $business;

$mail->addAddress("anthony.han@iopw.com", "My.VerView Get Started");

$mail->isHTML(true);

$mail->Subject = "My.VerView Sign Up";
$mail->Body = "Business: " . $business . "<br /><br />Website: " . $website . "<br /><br />Email: " . $email .  "<br /><br />Phone: " . $phone . "<br /><br />Address: " . $address . "<br /><br />Country: " . $country .  "<br /><br />Postal: " . $postal .  "<br /><br />Province: " . $province .  "<br /><br />Package Type: " . $packageType .  "<br /><br />Images: " . $images_list;
$mail->AltBody = "Business: " . $business . " Website: " . $website . " Email: " . $email .  " Phone: " . $phone . " Phone: " . $phone . " Address: " . $address .  " Country: " . $country . " Postal: " . $postal . " Province: " . $province .  "Package Type: " . $packageType . " Images: " . $images_list;

if(!$mail->send())
{
    echo json_encode("Mailer Error: " . $mail->ErrorInfo);
}
else
{
    echo json_encode("Form submitted successfully!");
}


?>
