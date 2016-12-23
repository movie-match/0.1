<?php
	header('Content-Type: text/html; charset=utf-8');
	include('database_silent.php');
	//$user_id = $_GET['user_id'];
	$movie_number = $_GET['movie_number'];
	$choice = $_GET['choice'];

	//echo $user_id;
	echo $movie_number;
	echo $choice;

	$values = array($user_id,$movie_number,$choice);
	$col_names = array('user_id','movie_id','choice');
	$table_name = 'choices';
	
	write($values,$col_names,$table_name);
?>