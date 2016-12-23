<?php
$user_id = $_GET['user_id'];
header('Content-Type: text/html; charset=utf-8');
include('php/database_silent.php');

if (isUserRegistered($user_id)){
	echo "1";
} else {
	echo "0";
}

function isUserRegistered($user_id){
	$userRegistered = isInTable($user_id,'user_id','user');
	return $userRegistered;
}
?>


