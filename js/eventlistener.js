console.log('java script file - eventlistener');
// Info: Eventlistener for friends list is done in initFriendslist

// input box to invite friends
document.getElementById("inviteBox").addEventListener("keydown", function(e) {
		
	if (!e) { var e = window.event; }
	//e.preventDefault(); // sometimes useful, not here

	// Enter is pressed
	if (e.keyCode == 13) { 
		console.log('enter submit');
		entered_email = document.getElementById('inviteBox').value;
		invite(entered_email);
		document.getElementById('inviteBox').value = "";
	};
		
}, false);


// like or dislike buttons. The value in choose is a rating value. Also see rating system in main description.
$('.nav1').click(function(){
	console.log('nav1 click - like');
	choose(+100000);
});
$('.nav2').click(function(){
	console.log('nav2 click - dislike');
	choose(-100000);
});	

// Group Button
$('.group-button').click(function(){
	if(isUserLoggedIn){
		//console.log("click group menu");
		isDropdownShown = switchClass('#dropdown','show-dropdown-content');
		if (isDropdownShown){
			console.log('Group menu opened');
			//document.getElementById('movielist_menu').classList.remove('show-movielist_menu');
		}else{
			console.log('Group menu closed');
			//updateTopMovies();
		}
		
	} else {
		console.log("Not logged in!");
	}
});

// Movie List Button
$('.movielist-button').click(function(){
	if(isUserLoggedIn){
		//console.log("click group menu");
		isDropdownShown = switchClass('#movielist_menu','show-movielist_menu');
		if (isDropdownShown){
			console.log('Toplist menu opened');
			//document.getElementById('dropdown').classList.remove('show-dropdown-content');
			if (isChoosenFriendsChanged){
				updateTopMovies();
			}
		}else{
			console.log('Toplist menu closed');
			
		}
		
	} else {
		console.log("Not logged in!");
	}
});