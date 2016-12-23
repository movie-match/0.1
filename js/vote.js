function choose(choice){
	if (temp_movie_number<4500){
		temp_movie_number = temp_movie_number + 1;
		setPic(temp_movie_number);
		saveData(user_id,(temp_movie_number),choice);
		console.log("c : choose");
		updateTopMovies();
		console.log("c : choose");
		console.log(temp_movie_number);
	} else {
		console.log('limit reached');
	}
	
}