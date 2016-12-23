<?php
header('Content-Type: text/html; charset=utf-8');
//not save for passwords
include('database_silent.php');
$user_id = $_GET['user_id'];
$movie_number = $_GET['movie_number'];

	$sql = "UPDATE `db645082470`.`user` SET `movie_number` = '$movie_number' WHERE `user`.`user_id` = '$user_id'";
	push_sql($sql);


?>