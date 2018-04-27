<?php

$data = file_get_contents("php://input");
$receivedData = json_decode($data);

$fullname = $receivedData->fullname;
$email = $receivedData->email;
$packageType = $receivedData->packageType;

require 'class.phpmailer.php';
require 'class.smtp.php';

//PHPMailer Object
$mail = new PHPMailer;

$mail->IsSMTP();
$mail->Host = "smtp.iopw.com";

$mail->From = "support@verview.com";
$mail->FromName = "My.VerView Support";

$mail->addAddress($email, $fullname);

$mail->isHTML(true);

$mail->Subject = "Thank you for signing up to My.VerView";
$mail->Body = "<meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><meta http-equiv='X-UA-Compatible' content='IE=edge'/><style type='text/css'> /* CLIENT-SPECIFIC STYLES */ body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}/* Prevent WebKit and Windows mobile changing default text sizes */ table, td{mso-table-lspace: 0pt; mso-table-rspace: 0pt;}/* Remove spacing between tables in Outlook 2007 and up */ img{-ms-interpolation-mode: bicubic;}/* Allow smoother rendering of resized image in Internet Explorer */ /* RESET STYLES */ img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}/* iOS BLUE LINKS */ a[x-apple-data-detectors]{color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important;}/* MOBILE STYLES */ @media screen and (max-width: 525px){/* ALLOWS FOR FLUID TABLES */ .wrapper{width: 100% !important; max-width: 100% !important;}/* ADJUSTS LAYOUT OF LOGO IMAGE */ .logo img{margin: 0 auto !important;}/* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */ .mobile-hide{display: none !important;}.img-max{max-width: 100% !important; width: 100% !important; height: auto !important;}/* FULL-WIDTH TABLES */ .responsive-table{width: 100% !important;}/* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */ .padding{padding: 20px 5% 20px 5% !important;}.padding-meta{padding: 30px 5% 0px 5% !important; text-align: center;}.padding-copy{padding: 10px 5% 10px 5% !important; text-align: center;}.no-padding{padding: 0 !important;}.section-padding{padding: 50px 15px 50px 15px !important;}/* ADJUST BUTTONS ON MOBILE */ .mobile-button-container{margin: 0 auto; width: 100% !important;}.mobile-button{padding: 15px !important; border: 0 !important; font-size: 16px !important; display: block !important;}}/* ANDROID CENTER FIX */ div[style*='margin: 16px 0;']{margin: 0 !important;}</style></head><body style='margin: 0 !important; padding: 0 !important;'><div style='display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;'> Thanks for signining up to My.VerView ...</div><table border='0' cellpadding='0' cellspacing='0' width='100%'> <tr> <td bgcolor='#ffffff' align='center'><!--[if (gte mso 9)|(IE)]> <table align='center' border='0' cellspacing='0' cellpadding='0' width='500'> <tr> <td align='center' valign='top' width='500'><![endif]--> <table border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 500px;' class='wrapper'> <tr> <td align='center' valign='top' style='padding: 15px 0 40px;' class='logo'> <a href='http://my.verview.com' target='_blank'> <img alt='Logo' src='https://fs.go.iopw.com/fileserver/customforms/my.verview/images/logo.png' width='184' height='24' style='display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 16px;' border='0'> </a> </td></tr></table><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--> </td></tr><tr> <td bgcolor='#D8F1FF' align='center' style='padding: 70px 15px 70px 15px;' class='section-padding'><!--[if (gte mso 9)|(IE)]> <table align='center' border='0' cellspacing='0' cellpadding='0' width='500'> <tr> <td align='center' valign='top' width='500'><![endif]--> <table border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 500px;' class='responsive-table'> <tr> <td> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' style='font-size: 16px;padding: 10px 0; font-family: Helvetica, Arial, sans-serif; color: #333333;' class='padding'>Hello {$fullname},</td></tr><tr> <td align='left' style='font-size: 16px;padding: 10px 0; font-family: Helvetica, Arial, sans-serif; color: #333333;' class='padding'>Thank you for signing up to VerView {$packageType} Package.</td></tr><tr> <td align='left' style='font-size: 16px;padding: 10px 0; font-family: Helvetica, Arial, sans-serif; color: #333333;' class='padding'>Our team is preparing your VerView account and will notify you when it's ready!</td></tr><tr> <td align='left' style='font-size: 16px;padding: 10px 0; font-family: Helvetica, Arial, sans-serif; color: #333333;' class='padding'>Typically it takes 2 to 3 business days to complete the process.</td></tr><tr> <td align='left' style='font-size: 16px;padding: 10px 0; font-family: Helvetica, Arial, sans-serif; color: #333333;' class='padding'>Should you have any questions please feel free to contact us anytime.</td></tr><tr> <td align='left' style='font-size: 16px;padding: 10px 0; font-family: Helvetica, Arial, sans-serif; color: #333333;' class='padding'>Have an amazing day!</td></tr></table> </td></tr></table> </td></tr></table><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--> </td></tr><tr> <td bgcolor='#ffffff' align='center' style='padding: 20px 0px;'><!--[if (gte mso 9)|(IE)]> <table align='center' border='0' cellspacing='0' cellpadding='0' width='500'> <tr> <td align='center' valign='top' width='500'><![endif]--> <table width='100%' border='0' cellspacing='0' cellpadding='0' align='center' style='max-width: 500px;' class='responsive-table'> <tr> <td align='center' style='font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#666666;'> <span style='color:#F47F35;'>VerView</span> Support Team <br><a href='https://verview.com' target='_blank' style='color: #666666; text-decoration: none;'>Connect With Us</a> </td></tr></table><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--> </td></tr></table>";
$mail->AltBody = "Thank you for signing up to VerView " . $packageType . " Package. We are preparing your VerView account and we will notify you when it's ready. Typically it takes 2 to 3 business days to complete the process.. Should you have any questions please feel free to contact us anytime.";

if(!$mail->send())
{
    echo json_encode("Mailer Error: " . $mail->ErrorInfo);
}
else
{
    echo json_encode("Form submitted successfully!");
}


?>
