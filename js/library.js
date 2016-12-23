console.log('java script file - library for public functions');
// SIMPLE REQUESTS-----------------------------------------------------------------------
function getJsonByURL(url_text){
	var request = new XMLHttpRequest();
	request.open('GET', url_text ,false); // set true to use ajax!!!
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

// refresher
function addFriendToFriendsList(user_id,friend_name) {
	var ul = document.getElementById("friendslist");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(friend_name));
	var element_id = "friendlist_friend_" + user_id;
	li.setAttribute("id", element_id); // added line
	li.setAttribute("class", "friendlist_friend"); // added line
	ul.appendChild(li);
	document.getElementById(element_id).addEventListener('click', clickFriend );
}



// SwitchClass
function switchClass(element_id,classname){
	var e = document.querySelector(element_id);
	
	if (e.classList.contains(classname)){
		e.classList.remove(classname)
		return false;
	} else {
		e.classList.add(classname)
		return true;
	}
}















	



// TOOLS - http ------------------------------------------------------------------------------------------------------------

	

	
	
	
	
	
	
	
	
	
	
// Top Rated Movies Update ---------------------------------------------------------------


// AJAX - Functions only Used to getTopMoviesPost.php
function setRequest(url,valuename,value) {	
	if (window.XMLHttpRequest) {request = new XMLHttpRequest(); // Mozilla, Safari, Opera
	} else if (window.ActiveXObject) {
		try {request = new ActiveXObject('Msxml2.XMLHTTP'); // IE 5
		} catch (e) {
			try {request = new ActiveXObject('Microsoft.XMLHTTP'); // IE 6
			} catch (e) {}
		}
	}
	
	// Check Request
	if (!request) {console.log("No request instance possible!");return false;
	} else {		
		request.open('post', url, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.send(valuename+'='+value+'&limit='+amountOfTopMovies);
		request.onreadystatechange = interpretRequest;
		
	}
}

// Request auswerten
function interpretRequest() {
	function refreshTopMovies(topMovies){
		console.log("Refreshing top movies");
		topMovie = new Array(amountOfTopMovies);
		topMovieImgSrc = new Array(amountOfTopMovies);
		
		for (i = 0; i < amountOfTopMovies; i++){
			temp_index = parseInt(i)+1;
			try{
				topMovie[i] = topMovies[i].movie_id;
				// Uncomment here to show the ranking with names and scores
				//console.log("Nr. " + (i+1) + ": (" + topMovie[i] + ") " + getMovie(topMovie[i]).title + ". Rating: " + topMovies[i]["SUM(choice)"]);
				topMovieImgSrc[i] = getSrcByMovieId(topMovie[i]);
				
				document.querySelector('#top'+ temp_index).setAttribute('src',topMovieImgSrc[i]);
			}catch(err){
				console.log("Problem in fetching top movies with id: " + i);
				document.querySelector('#top'+ temp_index).setAttribute('src',"");
			}
		}
		console.log("Refreshing top movies -succesfull -(Go to refreshTopMovie Function in used.js to show ranking and scores)");
	}
	switch (request.readyState) {
		// wenn der readyState 4 und der request.status 200 ist, dann ist alles korrekt gelaufen
		case 4:
			if (request.status != 200) {
				console.log("Der Request wurde abgeschlossen, ist aber nicht OK\nFehler:"+request.status);
			} else {
				// CODE HERE
				console.log('Got response. (Go to interpretRequest to show response)');
				var content = request.responseText;
				console.log(content);
				//console.log(content);
				var response_JSON = JSON.parse(content);
				refreshTopMovies(response_JSON);
			}
			break;
		default:
			break;
	}
}
	
	

