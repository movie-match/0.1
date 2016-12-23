<?php
header('Content-Type: text/html; charset=utf-8');
include('database_silent.php');

$friends = json_decode($_POST['friends']);
$limit = $_POST['limit'];
$matchscore = (count(array_filter($friends)))*100000;

$sql = "
SELECT movie_id as movie_id, score as score 
FROM (
	SELECT movie_id, SUM(choice) as score 
	FROM `choices` 
	";  

for ($i = 0; $i<count($friends); $i++){
	if($i == 0){
		$sql = $sql ."WHERE `user_id` LIKE '$friends[$i]' ";
	} else {
		$sql = $sql ."OR `user_id` LIKE '$friends[$i]' ";
	}
	
}


$sql = $sql . "
	GROUP BY movie_id) as c
	WHERE score >= '$matchscore'
	ORDER BY score DESC, movie_id
	LIMIT $limit;
	";
echo pull_sql($sql);
?>


