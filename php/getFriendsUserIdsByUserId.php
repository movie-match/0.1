<?php
header('Content-Type: text/html; charset=utf-8');
include('database_silent.php');

$user_id = $_GET['user_id'];
$sql = "SELECT `user_id_b` FROM `relations` WHERE user_id_a LIKE '".$user_id."'";
echo pull_sql($sql);
?>