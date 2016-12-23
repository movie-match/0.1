<?php
header('Content-Type: text/html; charset=utf-8');
include('php/database_silent.php');

$recipient_email_adress = $_GET["email"];
addUser($recipient_email_adress); // Adds a user to the user database if he is not already in it and sends an invitation. If he is already registered it returns the user_id 
echo getUserIdByEmail($recipient_email_adress);

function isEmailAlreadyUsedAsUser($email){
	$emailUsed = isInTable($email,'email','user');
	return $emailUsed;
}

function getUserIdByEmail($email){
	$sql = "SELECT `user_id` FROM `user` WHERE email LIKE '".$email."' LIMIT 1";
	$user_id = pull_sql($sql);
	return $user_id;
}

function addUser($email){
	

	// local functions
	function writeUser($email){
		
		
		// local functions
		function sendMail($user_id,$email) {
			$uniqueWeblink = "www.movie-match.de/movie/index.php?user_id=".$user_id; //Not really unique yet ;-)
			// Send out the invitation with unique weblink
			$subject = "Einladung - Movie Match - User Id:" . time();
			$from = "info@movie-match.com"; 
			$text = "Hier dein Sign In Link: ". $uniqueWeblink;
			mail($email, $subject, $text, $from); // send mail
		}
		// main write User
		$user_id = time();
		$values = array($email,$user_id,0);
		$col_names = array('email','user_id','movie_number');
		$table_name = 'user';
		write($values,$col_names,$table_name);			
		sendMail($user_id,$email);
	}
	// main add User
	if (isEmailAlreadyUsedAsUser($email)==false){
		$user_id = writeUser($email);
	}
	$user_id = getUserIdByEmail($email);
	return $user_id;	

}




?>