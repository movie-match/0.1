// Invitation 
function invite(entered_email){
	console.log("invite " + entered_email);
	//check if already registered? (This part is only for console)
	isEmailAlreadyRegistered = getResponseByUrl('php/getIfEmailIsAlreadyRegistered.php?email=' + entered_email);
	isEmailAlreadyRegistered = parseInt(isEmailAlreadyRegistered);
			
	if(isEmailAlreadyRegistered==1){
		console.log('User with email already registered.');
	} else{
		console.log('Send an invitation to user with that email.');
		
	}
	// register and send invitation if not registered. (check is done in php). Also send a "reminder" if already registered.
	target_user = JSON.parse(getResponseByUrl('invite.php?email=' + entered_email));
	target_user = target_user[0].user_id;
	console.log(target_user);
	// save Relations
	getResponseByUrl('php/saveUserRelation.php?user_id_a='+user_id+'&user_id_b='+target_user);
	refreshFriends();
}