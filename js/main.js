console.log(user_id);
// $.getScript("js/playground.js", function(){console.log("playing arround");});

// config
var isUserLoggedIn = false;
var amountOfTopMovies = 10;
var temp_movie_number = 0;
var friends_selected = new Array('0',user_id);
var friendsListInitialized = false;
var isChoosenFriendsChanged = false;

// main
// 0. init
$.getScript("js/library.js", function(){console.log("public functions integrated");});//public functions
$.getScript("js/titlebar.js", function(){console.log("titlebar initialized.");});

// 2. getter
$.getScript("js/movie.js", function(){console.log("getter library integrated");});

// 3. refresher
$.getScript("js/refresher.js", function(){console.log("refresher library integrated");});

// 4. login
$.getScript("js/login.js", function(){console.log("Logged in");});

// 5. functionality
$.getScript("js/invite.js", function(){console.log("functionality invite integrated");});
$.getScript("js/vote.js", function(){console.log("functionality vote integrated");});

// 1. eventlistener
$.getScript("js/eventlistener.js", function(){console.log("eventlistener set");});

// Not used: $(document).ready(function(){});

// Scripts
function importOmdbRatingToUserRating(numberOfMovies){
	
	for (i=0;i<numberOfMovies;i++){
		// getMovie
		var movie = getMovie(i);
		console.log(movie);
		
		// getMovieRating
		omdbRating = parseInt(movie.vote_average*10000);
		popularity = parseInt(movie.popularity*100);
		rating = omdbRating + popularity;
		// write Rating into DB
		user_id = 000000; // omdb id
		url =  'php/saveChoice.php?user_id=' + user_id + '&movie_number=' + i + '&choice=' + rating;
		getResponseByUrl(url);	
	}
	
}



