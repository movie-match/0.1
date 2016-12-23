




function initMovies(){
log("START LOADING MOVIES");
//loadMovies();
}


function loadMovies(){
	
	if ($('#nav2').hasClass('selected')){ //load only if nav2 selected. Because this function is also triggered if the user srolled close to the end of the page!
		var top_rated_movies = getMovies(page_number);
		var last_move_number = page_number * number_of_results; //e.g 20 or 60
		var first_movie_number = last_move_number - number_of_results + 1; //e.g 1 or 41
		
		//create movie container
		log("create container");
		var html_for_img_container = "";
		for (var movie_number = first_movie_number; movie_number <= last_move_number; movie_number++){
			var movie = top_rated_movies.results[movie_number-first_movie_number];
			var img_src = getImgSrcByResult(top_rated_movies.results[movie_number-first_movie_number]);
			var genres = getGenreClasses(movie);
			log(img_src);
			html_for_img_container = html_for_img_container + '<div id="movie'+movie_number+'" class="movie '+getGenreClasses(movie)+'"><div id="card'+movie_number+'" class="card" onclick="turnmovie('+movie_number+')"><div class="front"><img src="'+img_src+'" alt="Movie xy" draggable="false"></div><div class="back" >'+getCardBack(movie)+'</div></div>'
			html_for_img_container = html_for_img_container + '</div>';
		}
		$('#content').append(html_for_img_container);
		//set Stuff
		setSwipe(page_number);
		page_number = page_number + 1;
	};
	
}

function getMovies(page_number){
	return load_top_rated_movies(page_number);
}

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

function setSwipe(page_number){
	var last_move_number = page_number * number_of_results; //log(last_move_number);//e.g 20 or 60 
	var first_movie_number = last_move_number - number_of_results + 1; //log(first_movie_number); //e.g 1 or 41

	for (var movie_number = first_movie_number; movie_number <= last_move_number; movie_number++){
		//log("c3-" + movie_number);
		var myElement = document.getElementById('movie' + movie_number);
		var mc = new Hammer(myElement);
		mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 50 }) );
		// listen to events...
		mc.on("panright", function(ev) {
			if ($('#nav2').hasClass('selected')){
				var card = 	event.target.closest('.movie');		
				if(card){
					card.classList.add('swipe-right');
					card.classList.remove('swipe-left');
					card.classList.add('yo');
					//reload_position = reload_position - 1;
					scrollCheck();
					sth_is_animating = true;
					setTimeout(function(){sth_is_animating = false;},200);
					timeout_swipe_right_1 = setTimeout(function(){ card.classList.add('small-element'); }, 200);
					timeout_swipe_right_2 = setTimeout(function(){ card.classList.add('hide-element'); }, 400);
					timeout_swipe_right_3 = setTimeout(function(){ card.classList.remove('swipe-right'); }, 400);
					timeout_swipe_right_4 = setTimeout(function(){ card.classList.remove('small-element'); }, 400);
					
				}
			}
		});
		mc.on("panleft", function(ev) {
			if ($('#nav2').hasClass('selected')){
				var card = 	event.target.closest('.movie');		
				if(card){
					card.classList.add('swipe-left');
					card.classList.remove('swipe-right');
					card.classList.add('no');
					//reload_position = reload_position - 1;
					scrollCheck();
					sth_is_animating = true;
					setTimeout(function(){sth_is_animating = false;},200);
					timeout_swipe_left_1 = setTimeout(function(){ card.classList.add('small-element'); }, 200);	
					timeout_swipe_left_2 = setTimeout(function(){ card.classList.add('hide-element'); }, 400);
					timeout_swipe_left_3 = setTimeout(function(){ card.classList.remove('swipe-left'); }, 400);
					timeout_swipe_left_4 = setTimeout(function(){ card.classList.remove('small-element'); }, 400);
				}
			}
		});
	}//log("finished for loop for adding swipe");
}

function getCardBack(movie){
	//log("c1");
	var card_back_html = getTitle(movie);
	//log("c2");
	var card_back_html = card_back_html + '<br>('+getLanguage(movie)+' - '+getYear(movie)+')';
	//log("c3");
	var trailerLink =  '<a href="php/detail.php?ytkey='+getYoutubeId(movie)+'" onclick="return popup(this)"><i class="fa fa-play-circle fa-3x"></i></a>';
	//log("c4");
	var card_back_html = card_back_html + '<br><br><br><br><p>Trailer<br>'+trailerLink+'</p>';
	return card_back_html;
}
function getTitle(movie){
	title = movie.original_title;
	//alert("c1");
	return title;
}
function getLanguage(movie){
	
	return movie.original_language;
}
function getYear(movie){
	
	return movie.release_date.substring(0,4);
}
function getGenreClasses(movie){
	var genreClasses ='';
	log(movie.genre_ids);
	log(movie.genre_ids.length);
	if(movie.genre_ids.length>=1){
		for (var i = 0; i<movie.genre_ids.length; i++){
			genreClasses = genreClasses + ' genre-' + movie.genre_ids[i];
		}
	}
	return genreClasses;
}
function getGenres(movie){
	return movie.genre_ids;
}
function getGenreNameById(genre_id){
	return 'action';
}
function getTrailer(movie){
	var youtubeLink = "https://www.youtube.com/watch?v="+getYoutubeId(movie);
	return youtubeLink;
}
function getYoutubeId(movie){
	var movie_id = movie.id;
	var url_text = "http://api.themoviedb.org/3/movie/"+movie_id+"/videos?api_key=d9bc22ab399c420f6695191719a5874b";
	var json_response = getJsonByURL(url_text);
	var results = json_response.results[0];
	var json_result = getJsonByURL(url_text).results[0];
	if (json_result){ //some movies have no result
		var youtubeKey = json_result.key;
		var youtubeLink = "https://www.youtube.com/watch?v="+youtubeKey;
	} else {
		youtubeKey = 'OaSEGZ3Xe_E';
	}
	return youtubeKey;
}
function getImgSrcByResult(movie){
	img_src = "http://image.tmdb.org/t/p/w500" + movie.poster_path;
	return img_src;	
}
function getTmdbId(movie){
	return movie.id;
}

function turnmovie(number) {
	var element_id = '#card'+number;
	var e = document.querySelector(element_id);
	var classname = 'turn';
	
	if (e.classList.contains(classname)){
		e.classList.remove(classname)
	} else {
		e.classList.add(classname)
	}
}


// TOOLS - http
function getJsonByURL(url_text){
	var request = new XMLHttpRequest();
	request.open('GET', url_text ,false);
	request.send(null);
	var response = request.responseText;
	var response_JSON = JSON.parse(response);
	return response_JSON;
}
function getResponseByUrl(url_text){
	var request = new XMLHttpRequest();
	request.open('GET', url_text ,false);
	request.send(null);
	return request.responseText;
}
//TOOLS - Popup
var pop = null;

function popdown() {
  if (pop && !pop.closed) pop.close();
}

function popup(obj,w,h) {
  var url = (obj.getAttribute) ? obj.getAttribute('href') : obj.href;
  if (!url) return true;
  w = (w) ? w += 20 : 150;  // 150px*150px is the default size
  h = (h) ? h += 25 : 150;
  
  var args = 'width='+w+',height='+h+',resizable';
  popdown();
  pop = window.open(url,'',args);
  
  return (pop) ? false : true;
}

window.onunload = popdown;
window.onfocus = popdown;