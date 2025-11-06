<?php
//get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$cover = $_POST['cover'];
$resume = $_POST['resume'];
$to = "wesley.lunnen@gmail.com";
$subject = "Mail from contact page";
$text ="Name = " . $name . "\r\n Phone = " . $phone . "\r\n Email = " . $email . "\r\n Message =" . $message;
$header = "From: noreply@WDI.com";
if($email!=NULL){
    mail($to,$subject,$text,$header);
}
