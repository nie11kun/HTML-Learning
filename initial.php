<?php

    $host =  $_SERVER["HTTP_HOST"];
    $images_path = $host."/images/";
    $_SESSION["images_path"] = $host."/images/";

    setcookie("name", "nigulasi", time() + (86400 * 30), "/");
?>