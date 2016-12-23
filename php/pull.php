<?php
header('Content-Type: text/html; charset=utf-8');
include('database.php');

// From Extern

$_GET['lans']=arrayToUrl(array('en','de'));
$_GET['genres']=arrayToUrl(array('53','1059'));
//$_GET['years'] = "2000-2016";


// Intern
// movie data
$movie_genres = urlToArray($_GET['genres']);
$movie_lans = urlToArray($_GET['lans']);
$movie_years = array(substr($_GET['years'], 0,4),substr($_GET['years'], -4));
//$movie_years = array('2000','2016');
getMovies($movie_genres,$movie_lans,$movie_years);

function getMovies($genres,$lans,$years){
	$sql = "Fetching Movies from Database not implemented yet";
	$condition_starting_year = $years[0];
	$condition_ending_year = $years[1];
	
	//Year
	$sql = "SELECT * FROM movie WHERE year >= '".$condition_starting_year."' AND year <= '".$condition_ending_year."'";
	
	//Language
	$number_of_lans = count($lans); 
	if($number_of_lans ==1){
		$sql = $sql." AND lang = '".$lans."'";
	} elseif($number_of_lans >1){
		$sql = $sql." AND (lang = '".$lans[0]."'";
		for ($i = 1; $i<$number_of_lans; $i++){
			$sql = $sql." OR lang = '".$lans[$i]."'";
		}		
		$sql = $sql.")";
	}
	
	//Genres
	echo "Genres sind noch nicht perfekt.";
	$number_of_genres = count($genres); 
	if($number_of_genres ==1){
		echo count($genres);
		$sql = $sql." AND (genre LIKE '%,".$genres.",%' OR genre LIKE '".$genres."' OR genre LIKE '".$genres.",%' OR genre LIKE '%,".$genres."' )";
	} elseif($number_of_genres >1){
		$sql = $sql." AND ((genre LIKE '%,".$genres[0].",%' OR genre LIKE '".$genres[0]."' OR genre LIKE '".$genres[0].",%' OR genre LIKE '%,".$genres[0]."' )";
		for ($i = 1; $i<$number_of_genres; $i++){
			$sql = $sql." OR (genre LIKE '%,".$genres[$i].",%' OR genre LIKE '".$genres[$i]."' OR genre LIKE '".$genres[$i].",%' OR genre LIKE '%,".$genres[$i]."' )";
		}		
		$sql = $sql.")";
	}
	
	echo pull_sql($sql);
}

function acceptUser($name,$pw){
	$userAccepted = false;
	return $userAccepted;
}
?>