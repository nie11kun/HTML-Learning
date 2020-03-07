<?php
    session_start();
    include "header.php";//require
    require "initial.php";

    echo "<strong>hello word</strong>";
    echo "hello word";
    echo "hello word";
    $var1 = 123;
    echo $var1;
    define("name1" , "Marco Nie");
    echo name1;
    $var2 = "10";
    $var3 = 100;
    echo $var2 + $var3;
    function getVar() {
        global $var3;
        echo $var3;
    }
    getVar();
    $a = "hello";
    $hello = "hi";
    echo $$a;

    $var4 = array("david", "marco", "jim");
    echo "$var4[1] and $var4[0] is best friend without $var4[2]";
    $var5 = array(
        "online"=>array("marco", "jim"),
        "offline"=>array("divid", "ajgai")
    );
    echo $var5["online"][0];

    if ($var1>$var3) {
        echo "plus";
    } elseif ($var1<$var3) {
        echo "min";
    } else {
        echo "";
    }
    echo "<br>";
    $var6 = 0;
    while ($var6 <= 10) {
        echo "$var6 <br>";
        $var6++;
    }
    $var7 = 0;
    do {
        echo "the num is ".$var7."<br>";
        $var7++;
    } while ($var7 <= 10);

    for ($i=0; $i <5 ; $i++) { 
        echo "now is ".$i."<br>";
    }
    
    foreach ($var4 as $name) {
        echo $name."<br>";
    }
    foreach ($var5 as $key => $value) {
        echo $value[0]."<br>";
    }

    switch ($var7) {
        case 11:
            echo $var7."<br>";
            break;
        
        default:
            echo "no value match<br>";
            break;
    }

    for ($i=0; $i <10 ; $i++) { 
        if ($i % 2 == 0) {
            continue;
        }
        echo $i."<br>";
    }

    function test1($num=5) {
        echo $num."<br>";
        return $num * 2;
    }

    test1();
    test1(40);

    echo test1(2)."<br>";

    echo $_SERVER["SCRIPT_NAME"]."<br>";

    echo '<img src="'.$images_path.'css_logo.png"/>';
    echo '<img src="'.$_SESSION["images_path"].'css_logo.png"/><br>';

    if (isset($_COOKIE["name"])) {
        echo "name is ".$_COOKIE["name"]."<br>";
    }

    $read = file("file.txt");
    foreach ($read as $line) {
        echo $line."<br>";
    }

?>