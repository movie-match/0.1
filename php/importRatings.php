<?php // not used?
	header('Content-Type: text/html; charset=utf-8');
	include('database_silent.php');

	
	// getMovie
	
	// getMovieRating
	
	// write Rating into DB

	$values = array($user_id,$movie_number,$choice);
	$col_names = array('user_id','movie_id','choice');
	$table_name = 'choices';
	write($values,$col_names,$table_name);

?>