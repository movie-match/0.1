function updateTopMovies(){ 
	console.log('Update top movie images');
	valuename = 'friends';
	value = friends_selected;
	value = JSON.stringify(value);
	setRequest('php/getTopMoviesPOST.php',valuename,value); // see bottom of library
	console.log('Update top movie images - requested');
}

function saveData(user_id,movie_number,choice){
	console.log('save Data');
	
	// saveUserData (how many movies did the user walk through. For wich movie has he to do the next decision.)
	url = 'php/saveUserData.php?user_id=' + user_id + '&movie_number=' + movie_number;
	console.log(url);
	getResponseByUrl(url);
	
	// saveChoice
	last_movie = movie_number - 1;
	url =  'php/saveChoice.php?user_id=' + user_id + '&movie_number=' + last_movie + '&choice=' + choice;
	getResponseByUrl(url);
	
	console.log('Data saved');
}

function refreshFriends(){
	initFriendslist();	
}