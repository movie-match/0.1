<?php
header('Content-Type: text/html; charset=utf-8');
include('database_silent.php');
	
$limit = $_GET['limit'];

$sql = "SELECT movie_id, SUM(choice) FROM `choices` GROUP BY movie_id ORDER BY SUM(choice) DESC, movie_id  LIMIT $limit";
echo pull_sql($sql);
?>