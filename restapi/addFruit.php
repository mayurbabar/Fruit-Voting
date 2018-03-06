<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO fruits(fruit_name) VALUES($data->newFruit)";
$result = $conn->query($sql);
//echo $data->newFruit;


if ($result === TRUE) {
    echo "New record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();

?>
