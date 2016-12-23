
<html>
<head>
	<script type="text/javascript">  
		var user_id ="<?php echo $_GET['user_id'] ?>";  
	</script>  

	<title>Movie Match</title>
	
	<!-- Android WebApp-->
	<link rel="manifest" href="manifest.json">
	<!-- IOS WebAPP-->
	<link rel="apple-touch-icon" href="img/launch-icon.jpg">
	<link rel="apple-touch-startup-image" href="img/launch-icon.jpg">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">	
	
	
	<!-- jQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	
	<!-- CSS -->
	<link rel="stylesheet" href="css/main.css?v=<?php echo time(); ?>">
	<link rel="stylesheet" href="css/content.css?v=<?php echo time(); ?>">
	<link rel="stylesheet" href="css/navigation.css?v=<?php echo time(); ?>">
	<link rel="stylesheet" href="css/titlebar.css?v=<?php echo time(); ?>">
	<!-- Icon Font-->
	<link rel="stylesheet" media="screen" href="css/font-awesome/font-awesome.min.css" />

	
	<!-- hammerjs -->
	<!--<script language="javascript" type="text/javascript" src="js/hammer.js"></script>-->
 
</head>
<body>
	<div class="title-bar">
		<div id="group-button" class="group-button hide-element"><button><i class="fa fa-users fa-2x"></i></button></div>
		<div id="app-name" class="app-name">Movie Match</div>
		<div id="movielist-button" class="movielist-button hide-element"><button><i class="fa fa-film fa-2x"></i></button></div>
	</div>
	<div id="content">
		<div id="dropdown" class="dropdown dropdown-content-config">
			<div id="friendlist_wrapper">
				<ul><li><input type="email" name="email" class="sign-up-form form-control" id="inviteBox" placeholder="Enter email to invite friend"></li></ul><ul id="friendslist"></ul>
			</div>
		</div>
		<div id="movielist_menu" class="movielist_menu dropdown-content-config">
			<div id="topmoviewrapper">
				<!-- Place for the movie thumbnails of the to rated movies-->
			</div>
		</div>			
	</div>
	<div id="navigation" class="navigation hide-element">
		<div id="nav1" class="nav nav1"><i class="fa fa-check fa-3x"></i></div>
		<div id="nav2" class="nav nav2"><i class="fa fa-times fa-3x"></i></div>
	</div>
	<!-- JAVA SCRIPT -->
	<script language="javascript" type="text/javascript" src="js/main.js?v=<?php echo time(); ?>"></script>
</body>
</html>