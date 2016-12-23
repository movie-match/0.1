// MOVIES

// Getter ------------------------------------------------------------------------
function getMovies(page_number){	
	// local functions
	function load_top_rated_movies(page_number){
		var request = new XMLHttpRequest();
		if (page_number){
			var url_text = "http://api.themoviedb.org/3/movie/top_rated?api_key=d9bc22ab399c420f6695191719a5874b&page=" + page_number;
		}else{
			var url_text = "http://api.themoviedb.org/3/movie/top_rated?api_key=d9bc22ab399c420f6695191719a5874b";
		}		
		request.open('GET', url_text ,false);
		request.send(null);
		var response = request.responseText;
		var response_JSON = JSON.parse(response);
		return response_JSON;
	}
	// main
	return load_top_rated_movies(page_number);
}

function getMovie(movie_number){
	page = parseInt(movie_number/20)+1;
	number = movie_number%20;
	var movies = getMovies(page);
	var movie = movies.results[number];
	return movie;
}

function getImgSrcByResult(movie){
	img_src = "http://image.tmdb.org/t/p/w500" + movie.poster_path;
	return img_src;	
}

function getSrcByMovieId(movie_id){
		var movie = getMovie(movie_id);
		var img_src = getImgSrcByResult(movie);
		return img_src;
	}
	
// Setter ------------------------------------------------------------------------	
function setPic(movie_id){
	console.log('Set main image');
	document.querySelector('#pic').setAttribute('src',getSrcByMovieId(movie_id));
	console.log('Set main image - succesfull');
}