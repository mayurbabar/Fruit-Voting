<?php
include "db.php";

$sql = "SELECT A.fruit_name AS fruit, count(B.fruit_id) AS fruit_count FROM fruits AS A, votes AS B WHERE A.fruit_id = B.fruit_id GROUP BY A.fruit_name ORDER BY fruit_count DESC, A.fruit_name ASC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0";
}

$conn->close();

?>
