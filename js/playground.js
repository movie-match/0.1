console.log('playground');
setRequest('php/getUserIdByEmail.php','email','einfachrolf@gmail.com',interpretRequest(2));

// AJAX - Functions only Used to getTopMoviesPost.php
function setRequest(url,valuename,value,para_func) {
	// Create Request
	
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest(); // Mozilla, Safari, Opera
	} else if (window.ActiveXObject) {
		try {
			request = new ActiveXObject('Msxml2.XMLHTTP'); // IE 5
		} catch (e) {
			try {
				request = new ActiveXObject('Microsoft.XMLHTTP'); // IE 6
			} catch (e) {}
		}
	}

	// Check Request
	if (!request) {
		console.log("No request instance possible!");
		return false;
	} else {
		
		// Request öffnen
		request.open('get', url, true);
		// Requestheader senden
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		// Request senden
		//console.log(value);
		//console.log(valuename);
		//console.log(amountOfTopMovies);
		request.send(valuename+'='+value+'&limit='+amountOfTopMovies);


		// Request auswerten
		request.onreadystatechange = para_func;
		
	}
}

// Request auswerten
	function interpretRequest(para_func) {
		switch (request.readyState) {
			// wenn der readyState 4 und der request.status 200 ist, dann ist alles korrekt gelaufen
			case 4:
				if (request.status != 200) {
					console.log("Der Request wurde abgeschlossen, ist aber nicht OK\nFehler:"+request.status);
				} else {
					console.log(para_func);
					// CODE HERE
					console.log('Got response. (Go to interpretRequest to show response)');
					var content = request.responseText;
					//console.log(content);
					var response_JSON = JSON.parse(content);
					refreshTopMovies(response_JSON);
				}
				break;
			default:
				break;
		}
	}