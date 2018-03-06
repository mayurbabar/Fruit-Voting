<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

//echo $data->fruitID;

$sql = "INSERT INTO votes (fruit_id, user_id, datetime)
VALUES ('$data->fruitID', '$data->userID', '$data->dateTime')";
$result = $conn->query($sql);
//echo $data->fruitID;


if ($result === TRUE) {
    echo "New record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();

?>

