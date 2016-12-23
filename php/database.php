<?php	
header('Content-Type: text/html; charset=utf-8');
//phpinfo();
function connect_to_db (){
	$host_name  = "db645082470.db.1and1.com";
    $database   = "db645082470";
    $user_name  = "dbo645082470";
    $password   = "Einfach1!";
	$connect = new mysqli($host_name, $user_name, $password, $database);
	/* check connection */
	  if (mysqli_connect_errno()) {
		  printf("Connect failed: %s\n", mysqli_connect_error());
		  exit();
	  }
	 /* change character set to utf8 */
	  if (!$connect->set_charset("utf8")) {
		  printf("Error loading character set utf8: %s\n", $connect->error);
	  } else {
		  printf("Current character set: %s\n", $connect->character_set_name()."<br>");
	  }
	return $connect;
}

function push_sql($sql){
			$connect = connect_to_db();
			if ($connect->query($sql) === TRUE) {
				echo "SQL push successfully<br><br>";
			} else {
				echo "Error: " . $sql . "<br>" . $connect->error . "<br>";
			}
		}

function pull_sql($sql){
	$connect = connect_to_db();
	echo $sql;
	$result = mysqli_query($connect,$sql);
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
		$rows[] = $r;
	}
	$output = json_encode($rows);
	$connect->close();
	echo "<br>".$output;
	return $output;
}
function isInTable($value,$col,$table){
	// WASTE echo $value . $col . $table;
	// WASTE $sql = "SELECT * FROM ".$table." WHERE email LIKE '".$value."'";
	$sql = "SELECT * FROM ".$table." WHERE ".$col." LIKE '".$value."'";
	 //echo "<br><br> entrys: <br>".pull_sql($sql);
	if (pull_sql($sql)<>"[]"){
		// echo "<br> is already in table <br>";
		return true;
	} else {
		// echo "<br> no entry like that <br>";
		return false;
	}
	
}
function write($values, $cols, $table){
	// local functions
		
		function arrayToMysql($value_array,$colname_array){
			//Vars
			$colname_sqlstring;
			$value_sqlstring;
			//Main
			if (count($value_array)!=count($colname_array)){echo "The number of input values and the number of column names should be the same."; return false;};
			// 
			if(count($value_array)==1){
				echo "";
				$colname_sqlstring = "".$colname_array."";
				$value_sqlstring = "'".$value_array."'";
			}elseif(count($value_array)>1){
				$value_sqlstring = "";
				$colname_sqlstring = "";
				for($i=0;$i<count($value_array);$i++){
					$colname_sqlstring = $colname_sqlstring."".$colname_array[$i]."";
					$value_sqlstring = $value_sqlstring."'".$value_array[$i]."'";
					if(($i+1)!=count($value_array)){$value_sqlstring = $value_sqlstring.",";};
					if(($i+1)!=count($value_array)){$colname_sqlstring = $colname_sqlstring.",";} ;
				}	
			}
			return array($value_sqlstring, $colname_sqlstring);
		}
	
	// main
		list($values_sqlstring,$cols_sqlstring) = arrayToMySql($values,$cols);
		$sql = "INSERT INTO ".$table." (".$cols_sqlstring.") VALUES (".$values_sqlstring.");";
		echo "<br>".$sql."<br>";
		push_sql($sql);	
}
	



function clear(){
	$connect = connect_to_db();
	$sql = "DELETE FROM test";
	if ($connect->query($sql) === TRUE) {
		echo "Test-Database cleared!<br>";
	} else {
		echo "Error: " . $sql . "<br>" . $connect->error;
	}
	$connect->close();
}

function show($table){
	if($table!='test'){
		echo '<br>Showing a table is not completely implemented! Only for Test.';
	} else{
		echo '<br>Database:<br>';
		$connect = connect_to_db ();
		$sql = "SELECT * FROM test";
		$db_erg = mysqli_query( $connect, $sql );
		if ( ! $db_erg )
		{
		  die('Ungültige Abfrage: ' . mysqli_error());
		}
		echo '<table border="1">';
		while ($zeile = mysqli_fetch_array( $db_erg, MYSQL_ASSOC))
		{
		  echo "<tr>";
		  echo "<td>". $zeile['id'] . "</td>";
		  echo "<td>". $zeile['input'] . "</td>";
		  echo "</tr>";
		}
		echo "</table>";
		mysqli_free_result( $db_erg );
	}
}

function arrayToUrl($input){
	return urlencode(base64_encode(serialize($input)));	
}

function urlToArray($input){
	return unserialize(base64_decode(urldecode($input)));
}

?>