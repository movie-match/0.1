var isUserLoggedIn = false;
logIn(user_id);
		if (isUserLoggedIn){
			//this.classList.add('hide-element');
			createImageContainer();
			setPic(temp_movie_number);
		}


var log_active = true;



function logIn(user_id){
	function getMovieNumberByUserId(user_id){
		movieNumber = 1; // standart value
		if (isUserLoggedIn) {
			userData = getJsonByURL('php/getUserMovieNumber.php?user_id=' + user_id);
			movieNumber = userData[0].movie_number;
		}
		return parseInt(movieNumber);
		
	}
	if (getResponseByUrl('logInCheck.php?user_id='+user_id)==1){
		console.log('USER_ID: ' + user_id);
		isUserLoggedIn = true;
	} else {
		console.log("not logged in");
		isUserLoggedIn = false;
	}
	temp_movie_number = getMovieNumberByUserId(user_id);
}



$(document).ready(function(){


	
	
	

	
	
	
	function next(){
		if (temp_movie_number<5){
			temp_movie_number = temp_movie_number + 1;
			// fetchMovie();
			console.log(temp_movie_number);
			setPic(temp_movie_number);
			saveData(user_id,temp_movie_number);
			console.log(temp_movie_number);
		} else {
			console.log('limit reached');
			saveData();
		}
		
	}
	function showButtons(){
		console.log('show Buttons');
		var b1 = document.querySelector('#nav1');
		b1.setAttribute('class','nav nav1');
		//$('#nav1').classList.remove('hide-element');
		console.log('Buttons shown');
	}
	function createImageContainer(){
		console.log('create image container');
		var html_for_img_container = "";
		html_for_img_container = html_for_img_container + '<div id="movie" class="movie"><img id="pic" src="" alt="Movie xy" draggable="false"></div>'
		$('#content').append(html_for_img_container);
	}
	
	function setPic(temp_movie_number){
		console.log('set image pic');
		var top_rated_movies = getMovies(temp_movie_number);
		var movie = top_rated_movies.results[temp_movie_number];
		var img_src = getImgSrcByResult(top_rated_movies.results[temp_movie_number]);
		console.log(img_src);
		var picture = document.querySelector('#pic');
		picture.setAttribute('src',img_src);
	}
	
	// WASTE?
	function initImage(){
			console.log('init image');
			temp_movie_number = 1;
			var top_rated_movies = getMovies(temp_movie_number);
			log("create container");
				var html_for_img_container = "";
				var movie = top_rated_movies.results[temp_movie_number];
				var img_src = getImgSrcByResult(top_rated_movies.results[temp_movie_number]);
				var genres = getGenreClasses(movie);
				log(img_src);
				//html_for_img_container = html_for_img_container + '<div id="movie'+temp_movie_number+'" class="movie '+getGenreClasses(movie)+'"><div id="card'+temp_movie_number+'" class="card" onclick="turnmovie('+temp_movie_number+')"><div class="front"><img src="'+img_src+'" alt="Movie xy" draggable="false"></div><div class="back" >'+getCardBack(movie)+'</div></div>'
				html_for_img_container = html_for_img_container + '<div id="movie" class="movie"><div id="card" class="card" onclick="turnmovie('+temp_movie_number+')"><div class="front"><img id="pic" src="'+img_src+'" alt="Movie xy" draggable="false"></div><div class="back" >'+getCardBack(movie)+'</div></div>'
				html_for_img_container = html_for_img_container + '</div>';

			$('#content').append(html_for_img_container);
			
			
	}
	
	function fetchMovie(){
		console.log('fetching movie...');
		top_rated_movies = getMovies(temp_movie_number);
		console.log(temp_movie_number);
		movie = top_rated_movies.results[temp_movie_number];
		img_src = getImgSrcByResult(top_rated_movies.results[temp_movie_number]);
		genres = getGenreClasses(movie);
		log(img_src);
		var picture = document.querySelector('#pic');
		picture.setAttribute('src',img_src);
	}
	
	function saveData(user_id,movie_number){
		console.log('save Data');
		url = 'php/saveUserData.php?user_id=' + user_id + '&movie_number=' + movie_number;
		console.log(url);
		getResponseByUrl(url);
		//localStorage.setItem('test_var','test');
		//localStorage.setItem('choices',choices);
		//localStorage.setItem('temp_movie_number',temp_movie_number);
		
		
		console.log('Data saved');
	}
	
	function loadData(){
		console.log('load Data');
		var test_var = localStorage.getItem('test_var');
		choices = localStorage.getItem('choices');
		temp_movie_number = localStorage.getItem('temp_movie_number');
		console.log('Data loaded:');
		console.log(test_var);
		console.log(choices);
		console.log(temp_movie_number);
	}
	
	
	


// log("Log ist activated");
//$.getScript("js/tools.js", function(){console.log("Tools loaded");});
// $.getScript("js/movies.js", function(){console.log("Movies loaded");});
//$.getScript("js/titlebar.js", function(){console.log("Titlebar loaded.");});
//$.getScript("js/init.js", function(){console.log("Init");});
});



