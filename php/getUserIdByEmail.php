<?php
header('Content-Type: text/html; charset=utf-8');
include('database_silent.php');

$email = $_GET['email'];
$sql = "SELECT `user_id` FROM `user` WHERE email LIKE '".$email."'";
echo pull_sql($sql);
?>