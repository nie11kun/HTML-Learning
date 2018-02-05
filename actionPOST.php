<?php
    echo $_POST["username"]."<br>";

    $myFile = fopen("file.txt", "w");

    $username = $_POST["username"]."\n";
    $password = $_POST["password"]."\n";
    fwrite($myFile, $username);
    fwrite($myFile, $password);
    fclose($myFile);

    $append = fopen("file.txt", "a");
    fwrite($append, $username);
    fclose($append);

?>