<?php
header('Content-Type: text/html; charset=utf-8');
//not save for passwords
include('database.php');
$type = $_GET['type']; //test/user/movie
$mode = $_GET['mode']; //clear
// user data
$user_pw = $_GET['pw'];
$user_name = $_GET['name'];
$user_email = $_GET['email'];
// movie data
$movie_title = $_GET['title'];
$movie_img = $_GET['img'];
$movie_trailer = $_GET['trailer'];
$movie_year = $_GET['year'];
$movie_lang = $_GET['lang'];
$movie_genre = $_GET['genre'];
$movie_tmdbId = $_GET['tmdbId'];
if ($mode=='clear'){
	 clear();
}
if($type){
	switch ($type) {
		case 'user':
			writeUser($user_name,$user_pw,$user_email);
			break;
		case 'movie':
			writeMovie($movie_title,$movie_img,$movie_trailer,$movie_year,$movie_lang,$movie_genre,$movie_tmdbId);
			break;
		default:
			writeTest($type);
	}
}

function writeTest($type){
	echo "Calling Test Function. ";
	echo 'Your type is:';	
	echo $type."<br><br>";
	write($type,'input','test');
}
function writeUser($user_name,$user_pw,$user_email){
	$values = array($user_name,$user_pw,$user_email);
	$col_names = array('name','pw','email');
	$table_name = 'user';

	write($values,$col_names,$table_name);
	echo "successfull!";
}


function writeMovie($title,$img,$trailer,$year,$lang,$genre,$tmdbId){
	$values = array($title,$img,$trailer,$year,$lang,$genre,$tmdbId);
	$col_names = array('title','img','trailer','year','lang','genre','tmdbid');
	$table_name = 'movie';
	
	echo "Adding user...<br><br>";
	write($values,$col_names,$table_name);
	echo "Adding Movie.";
}
function writeGenres(){
	echo "Genres not written yet";
}
?>