<?php
header('Content-Type: text/html; charset=utf-8');
include('database_silent.php');

$user_id = $_GET['user_id'];
$sql = "SELECT `movie_number` FROM `user` WHERE user_id LIKE '".$user_id."'";
echo pull_sql($sql);
?>