//comment
/*
sdfgsd
sfdgsdfg

var x = 100;
var a = "john";
document.write(x);

var b = "i love \'javaScirpt\'";
document.write(b);

var isActive = true;
var d = 34 % 5;
d += 5;
document.write(d);
document.write((4 < 2) && (10 < 5));

var e = (5 > 4) ? "true": "false";
document.write(e);

var f = 1;
if(f == 1){
    document.write("<h1>HTML</h1>");
}
else if(f == 2){
    document.write("<h1>css</h1>");
}
else{
    document.write("<h1>javascript</h1>");
}

switch (f) {
    case 1:
        document.write("<h1>HTML</h1>");
        break;

    default:
        document.write("<h1>wow</h1>");
        break;
}

for(i=0, j=2; i<=5; i++){
    if (i == 3) {
        continue;
    }
    document.write(i + "<br>");
}

var demowhile1 = 0
while(demowhile1<10){
    document.write(demowhile1 + "<br>");
    demowhile1++;
}

var demowhile2 = 0
do{
    if(demowhile2 == 4){

        break;
    }
    document.write(demowhile2 + "<br>");
    demowhile2++;
}
while(demowhile2<=5);

function myFunction(name,age){
    alert("test function " + name + " is " + age + " old");
}

myFunction("marco", "18");

function function2(a) {
    return a * 10;
}

var demofunc = function2(2);
document.write(demofunc + "<br>");

alert("hello\nhow are you.");

var user1 = prompt("test", "hello");
alert(user1);

var user2 = confirm("please confirm");
if (user2 == true) {
    alert("true");
}
else{
    alert("false");
}

var list1 = {name: "marco", age: 18};
document.write(list1.name.length + "<br>");

function person(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function(name) {
        this.name = name;
    }
    this.yearOfBorth = bornYear;
}
function bornYear() {
    return 2018 - this.age;
}

var list2 = new person("john", 20);
list2.changeName("tom");
document.write(list2.name + "<br>");
document.write(list2.yearOfBorth() + "<br>");

var courses = new Array("html", "css", "js");
var course = courses[1];
courses[0] = "c++";
var courses1 = ["html", "css", "js"];
var courses2 = ["c++", "swift"];
var courses3 = courses1.concat(courses2);
document.write(courses3 + "<br>");

var p3 = [];
p3["name"] = "marco";

document.write(Math.PI + "<br>");
document.write(Math.sin(Math.PI/6) + "<br>");

var input1 = prompt("input a num");
var output1 = Math.sqrt(input1);
alert(output1);


var ii = 0;
function myAlert() {
    ii ++;
    alert("test");
}
//setInterval(myAlert, 3000);
function time() {
    var currDate = new Date();
    var hours = currDate.getHours();
    var mins = currDate.getMinutes();
    var secs = currDate.getSeconds();
    document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
//setInterval(time, 1000);
*/

function repleace() {
    var id1 = document.getElementById("demo");
    var class1 = document.getElementsByClassName("demo");
    var tag1 = document.getElementsByTagName("div");
    var idChild = id1.childNodes;

    id1.style.color = "#00ff00"
    id1.style.backgroundColor = "#ff0000";
    id1.innerHTML = "hello";
}
setInterval(repleace, 1000);

window.onload = function() {
    var p1 = document.createElement("p");
    var text2 = document.createTextNode("some text");
    p1.appendChild(text2);

    var id2 = document.getElementById("demo2");
    id2.appendChild(p1);
}

function removeItems() {
    var p4 = document.createElement("p");
    var text2 = document.createTextNode("some new text");
    p4.appendChild(text2);

    var p1 = document.getElementById("body");
    var p2 = document.getElementById("demo3");
    var p3 = document.getElementById("demo2");

    p1.removeChild(p2);
    p1.replaceChild(p4, p3);
}

setInterval(removeItems,2000);

window.onload = function(){
    var pos = 0;
    var box = document.getElementById("box");
    var t = setInterval(move, 10);
    
    function move() {
        if (pos >= 150) {
            clearInterval(t);
        }
        else{
            pos += 1;
            box.style.left = pos + "px";
        }
    }

    var a = document.getElementById("demo4");
    var b = document.getElementById("demo5");
    a.onclick = function() {
        b.innerHTML = new Date();
    }

    var input1 = document.getElementById("name1");
    input1.addEventListener("click", overChange, false);

    function overChange() {
        input1.style.color = "#ff0000";
    }
}

function onChange() {
    var input1 = document.getElementById("name1");
    input1.value = input1.value.toUpperCase();
}

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num1 = 0;

function prev() {
    var slider = document.getElementById("slider");
    num1--;

    if(num1 < 0) {
        num1 = images.length - 1;
    }

    slider.src = images[num1];
}
function next() {
    var slider = document.getElementById("slider");
    num1++;

    if(num1 >= images.length) {
        num1 = 0;
    }

    slider.src = images[num1];
}

function validate() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");

    if (n1.value != "" && n2.value != "") {
        if (n1.value == n2.value) {
            return true;
        }
    }
    alert("not same word");
    return false;
}

