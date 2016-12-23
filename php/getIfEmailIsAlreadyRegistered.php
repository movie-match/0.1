<?php
header('Content-Type: text/html; charset=utf-8');
include('database_silent.php');

$email = $_GET['email'];
$sql = "SELECT * FROM `user` WHERE email LIKE '".$email."'";
$temp = json_decode(pull_sql($sql));
if (count($temp)>0){
	echo 1;
}else{
	echo 0;
}




?>