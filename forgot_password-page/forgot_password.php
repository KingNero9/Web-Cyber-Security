<?php

if(isset($_POST['sumbit'])){

	$email = $_POST['email'];
    $subject = "Password Change from Comunications Ltd"; 

	$reciver = $_POST['email'];
	$headers = "From: "Comunications Ltd";
	$txt = "Hey, did you forget your password?"  ;

	mail($reciver, $subject, $txt, $headers);
	header("Location: index.php?mailsend");
}
?>