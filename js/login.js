//Functions needed
	// Requests
	// Titlebar


console.log('login - start');console.log(user_id);
logIn(user_id); // see below 1. LOGIN
if (isUserLoggedIn){
	initFriendslist(); // see below 2. INIT FRIENDS
	createImageContainer(); // see below 3. CREATE CONTAINER
	setPic(temp_movie_number); // in public library
	document.getElementById('navigation').classList.remove('hide-element');
	document.getElementById('group-button').classList.remove('hide-element');
	document.getElementById('movielist-button').classList.remove('hide-element');
	updateTopMovies();	// in public library
}




// 1. LOGIN ----------------------------------------------------------------------------
function logIn(user_id){
	function getMovieNumberByUserId(user_id){
		movieNumber = 0; // standart value
		if (isUserLoggedIn) {
			userData = getJsonByURL('php/getUserMovieNumber.php?user_id=' + user_id);
			movieNumber = userData[0].movie_number;
		}
		return parseInt(movieNumber);		
	}
	console.log(user_id);
	url = 'logInCheck.php?user_id=' + user_id;
	isUserRegistered = getJsonByURL(url);
	console.log(isUserRegistered);
	if (isUserRegistered==1){
		console.log('Logged in as: ' + user_id);
		isUserLoggedIn = true;
	} else {
		console.log("not logged in");
		isUserLoggedIn = false;
	}
	temp_movie_number = getMovieNumberByUserId(user_id);
}
// 2. INIT FRIENDS ----------------------------------------------------------------------------
function initFriendslist(){	
	function addFriendToFriendsList(user_id,friend_name) {
		var ul = document.getElementById("friendslist");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(friend_name));
		var element_id = "friendlist_friend_" + user_id;
		li.setAttribute("id", element_id); // added line
		li.setAttribute("class", "friendlist_friend passive"); // added line
		ul.appendChild(li);
		document.getElementById(element_id).addEventListener('click', clickFriend );
	}
	
	console.log('init Friendslist - start');
	//writeSettings();
		//create List Items in html
	
		
		var list_html = "";
		document.getElementById('friendslist').innerHTML = list_html;
		
		// Get Friends of User by the UserID. User Id is declared in index.php
		var friendsOfUserId = getJsonByURL('php/getFriendsUserIdsByUserId.php?user_id=' + user_id);
		var temp_email = "";
		var temp_user = "";
		console.log(friendsOfUserId.length);
		console.log(friendsOfUserId);
		if(typeof friendsOfUserId !== 'undefined'){
			if (friendsOfUserId.length>0){
				for (i=0;i<friendsOfUserId.length;i++){
					try{
						console.log(i);
						// Get Friends User ID
						temp_user = friendsOfUserId[i].user_id_b;
						console.log('Friend:' + temp_user);
						
						// Get Friends Email
						temp_email = getJsonByURL('php/getEmailByUserId.php?user_id=' + temp_user);
						console.log(temp_email);
						temp_email = temp_email[0].email;
						console.log(temp_email);
						
						addFriendToFriendsList(temp_user,temp_email);
						//friends_selected.push(temp_user);
						console.log(friends_selected);
					} catch(err){
						console.log("not all friends exist anymore");
					}
					
				}	
			}else{
	
			}
			
			
		console.log(friends_selected);	
		}
		
	console.log("Friendslist succesfully initialized:");
	
}


// 3. CREATE CONTAINER ----------------------------------------------------------------------------
function createImageContainer(){
	console.log('Creating image container');
	console.log('...create image container - main image');
	var html_for_img_container = '<div id="movie" class="movie"><img id="pic" src="" alt="Movie xy" draggable="false"></div>'
	//$('#content').append(html_for_img_container);
	$('#content').prepend(html_for_img_container);
	
	console.log('...create image container - top images');
	//amountOfTopMovies = 10;
	var html_for_img_container = "<br>";
	for (i = 1; i<=amountOfTopMovies;i++){
			var html_for_img_container = html_for_img_container + '<img id="top'+i+'" class="topmovies" src="" alt="Nr. '+i+'" draggable="false">'
	}
	$('#topmoviewrapper').append(html_for_img_container);
	console.log('Creating image container - succesfull');
}