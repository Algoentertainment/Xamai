<?php   
$email =$_GET["email"];
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer-master/src/PHPMailer.php";
require "PHPMailer-master/src/SMTP.php";
require "PHPMailer-master/src/Exception.php";

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();       
    $mail->Host = 'b1konnect.com';              //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'info@b1konnect.com';                     //SMTP username
    $mail->Password   = 'Algoenter123.';                               //SMTP password
    $mail->SMTPSecure = 'ssl';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    //Recipients
    $mail->setFrom('info@b1konnect.com', 'SAP & XAMAI');
    $mail->addReplyTo('info@b1konnect.com', 'SAP & XAMAI');
    $mail->addAddress($email);
   // $mail->addAddress('adm@algoenter.com.mx');

         //Add a recipien

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Gracias por tu registro";
    $mail->msgHTML(file_get_contents('registro.html'), __DIR__);

    // definiendo el adjunto 
     $mail->send();
     header('Location: https://b1konnect.com/?popId=88');
    
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
