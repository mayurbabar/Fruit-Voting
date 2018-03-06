<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$servername = "sql310.epizy.com";
$username = "epiz_21696772";
$password = "password123";
$dbname = "epiz_21696772_fruitvoting";
$conn = new mysqli($servername, $username, $password, $dbname);
?>
