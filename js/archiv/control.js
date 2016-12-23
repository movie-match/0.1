loadScript("js/movies.js", initControl);

function initControl(){
	var $filters = "not defined yet";
	console.log(getMoviesFromDb($filters));//filters not defined yet
}
function arrayToUrl(input){
	return encodeURI(btoa(input.serialize()));
}	
function getMoviesFromDb($filters){
	
	var genres = "'5','10749'";
	var years = '2010-2016';
	var lang = 'de';
	
	var url = 'php/pull.php?years='+years;
	var url = url +'&genres='+genres;
	var url = 'php/pull.php?years='+years;
	// define filters here and put them in url
	return getResponseByUrl(url);
}	
function importMoviesFromTmdb(){
	for(var page_number = 0;page_number<50;page_number++){
	var top_rated_movies = getMovies(page_number);
	writeMovies(top_rated_movies);
	console.log(top_rated_movies);
	}
	console.log("FINISH EXPORT------------------");
}	

function writeMovies(movies){
	for (var i = 0;i<20;i++){
		var movie = movies.results[i];
		//php-function: writeMovie($movie_title,$movie_img,$movie_trailer,$movie_year,$movie_lang,$movie_genre);
		var url = 'php/push.php?type=movie';
		url = url + '&title='+getTitle(movie);
		url = url + '&img='+getImgSrcByResult(movie);
		url = url + '&trailer='+getYoutubeId(movie);
		url = url + '&year='+getYear(movie);
		url = url + '&lang='+getLanguage(movie);
		url = url + '&genre='+getGenres(movie);
		url = url + '&tmdbId='+getTmdbId(movie);
		// Um diese Liste zu erweitern muss folgendes geschehen:
			//Zeile hier einfügen
			//get Funktion in movie.js
			//Spalte in Tabelle anlegen mit NAMEN
			//Push anpassen und um Get Variable erweitern
			//In Push writeMovie erweitern
		console.log(getResponseByUrl(url));
		console.log(movie);
		//url = url + '';
	}
}
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}