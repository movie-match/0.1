try {
//Config
var number = 0;
var page_number = 1;
var number_of_results = 20;
var top_rated_movies;
var init_reload_position = 10; //in movies
var reload_position = init_reload_position; //in movies

//Time Outs
var timeout_swipe_right_1;
var timeout_swipe_right_2;
var timeout_swipe_right_3;
var timeout_swipe_right_4;

var timeout_swipe_left_1;
var timeout_swipe_left_2;
var timeout_swipe_left_3;
var timeout_swipe_left_4;

//variables
var sth_is_animating = false;


//genres
var genres ='{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}';
var genres_JSON = JSON.parse(genres);
var genre_map = '';


//Init
try{initMovies();}catch(err){"Error in initMovies: " + log(err.message)};
try{initTitlebar();}catch(err){"Error in initTitlebar: " + log(err.message)};
try{initNavigation();}catch(err){"Error in initNavigation: " + log(err.message)};

//scroll checker
$win = $(window).scroll(function(){
	log(scrollSpace());
	
	scrollCheck();
});
function scrollCheck(){
	if(scrollSpace() < 300*reload_position){

		log("scroll action");
		
		loadNewMovies();
	} else{
		log("scroll passive");
	}
}
function scrollSpace(){
	return $(document).height() - $(document).scrollTop(); 
}
function loadNewMovies(){
	reload_position = init_reload_position;
	loadMovies();
	
}
$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};

$('.group-button').click(function(){
$('#movie').toggle();
});

function initNavigation(){
	
	
	/*
	$('#nav1').click(function(){
		if (!sth_is_animating){
			$('#nav1').addClass('selected');
			$('#nav2').removeClass('selected');
			$('#nav3').removeClass('selected');

			$('.movie').addClass('notransition');
			
			$('.movie').addClass('hide-element');
			$('.no').removeClass('hide-element');	
		};
	});
	$('#nav2').click(function(){
		if (!sth_is_animating){
			$('#nav2').addClass('selected');
			$('#nav1').removeClass('selected');
			$('#nav3').removeClass('selected');
			
			$('.movie').removeClass('notransition');
			
			$('.movie').removeClass('hide-element');
			$('.no').addClass('hide-element');
			$('.yo').addClass('hide-element');
		};
	});
	$('#nav3').click(function(){
		if (!sth_is_animating){
			$('#nav1').removeClass('selected');
			$('#nav3').addClass('selected');
			$('#nav2').removeClass('selected');
			
			log(timeout_swipe_right_1);
			log(timeout_swipe_right_2);
			log(timeout_swipe_right_3);
			log(timeout_swipe_right_4);
			
			$('.movie').addClass('notransition');
			$('.movie').removeClass('small-element');
			$('.movie').removeClass('swipe-right');
					
			$('.movie').addClass('hide-element');
			$('.movie').addClass('hide-element');
			$('.yo').removeClass('hide-element');
		}
	});
	*/
	
}

}
catch(err) {
	log("error in init");
	log(err.message);
}



