<?php
$user_id = $_GET['user_id'];
header('Content-Type: text/html; charset=utf-8');
include('php/database.php');

// main
autoLogin($user_id); // confirms user if not already done and loads history.

// functions

function autoLogin($user_id){
	// functions
		function isUserRegistered($user_id){
			$userRegistered = isInTable($user_id,'user_id','user');
			return $userRegistered;
		}
		
		function isUserConfirmed($user_id){
			return true;
		}
		
		function loadData($user_id){
			echo "<br>loading data not yet implemented.";
		return "";
		}
		
		function initData(){
			echo "<br>init data not yet implemented.";
			return "";
		}
		
		function confirmUser($user_id){
			echo "<br>confirmation not implemented";
		}
		
		
	// main
		if (isUserRegistered($user_id)){
			echo "<br>user ".$user_id." is already registered.";
			if (isUserConfirmed($user_id)) {
				echo "<br>user already confirmed";
				loadData($user_id);
			} else {
				echo "<br>user confirmed";
				confirmUser($user_id);
				initData();
			}
		} else {
			echo "<br>user is not registered.";
		}
			
}





?>

