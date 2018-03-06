<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO users (name, email, password)
VALUES ('$data->name', '$data->email', '$data->password')";

if($data->name){
	$qry = $conn->query($sql);
}

$conn->close();

?>
