function switchClass(element_id,classname){
	var e = document.querySelector(element_id);
	
	if (e.classList.contains(classname)){
		e.classList.remove(classname)
	} else {
		e.classList.add(classname)
	}
}

function writeInto(element_id,input){
	document.querySelector(element_id).innerHTML = input;
}

function log(message){
	if (log_active)	console.log(message);
}

