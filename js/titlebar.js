
function clickFriend(){
	// Activate or deactivate genre
	var target_element_name = '#'+this.getAttribute('id');
	isPassive = switchClass(target_element_name,'passive');
	userId = this.getAttribute('id').slice(18);
	if (isPassive){
		console.log(userId + " is passive");
		console.log("User ID: "+userId);
		console.log("friends old: " + friends_selected);
		var key = friends_selected.indexOf(userId);
		if (key.length>1){
			for (var i;i<key.length;i++){
				delete friends_selected[key[i]];
			}
		} else {
			delete friends_selected[key];
		}
		console.log("friends new: " + friends_selected);
		
	}else {
		console.log(userId + " is active");
		console.log("User ID: "+userId);
		console.log("friends old: " + friends_selected);
		friends_selected.push(userId);
		console.log("friends new: " + friends_selected);
	}
	isMovieListMenuOpened = document.getElementById('movielist_menu').classList.contains('show-movielist_menu');
	if (isMovieListMenuOpened){
		updateTopMovies();
	} else{
		isChoosenFriendsChanged = true;//check if really changed, or just changed and unchanged
	}
}
