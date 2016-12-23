<?php
	header('Content-Type: text/html; charset=utf-8');
	include('database_silent.php');
	$user_id_a = $_GET['user_id_a'];
	$user_id_b = $_GET['user_id_b'];
	
	// write a -> b
	$sql = "SELECT * FROM `relations` WHERE `user_id_a` LIKE '".$user_id_a."' AND `user_id_b` LIKE '".$user_id_b."'";
	$temp = json_decode(pull_sql($sql));
	$col_names = array('user_id_a','user_id_b');
	$table_name = 'relations';
	if (count($temp)>0){
		// already existent
	}else{
		// create Relation
		
		$values = array($user_id_a,$user_id_b);
		
		write($values,$col_names,$table_name);
	}
	
	// write b -> a
	$sql = "SELECT * FROM `relations` WHERE `user_id_a` LIKE '".$user_id_b."' AND `user_id_b` LIKE '".$user_id_a."'";
	$temp = json_decode(pull_sql($sql));
	if (count($temp)>0){
		// already existent
	}else{
		// create Relation
		$values = array($user_id_b,$user_id_a);
		write($values,$col_names,$table_name);
	}
	
	
	
	
	
	

	
	
?>