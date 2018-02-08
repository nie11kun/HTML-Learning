$(function () {
    $("a").attr("href","http://www.google.com/");
    var val = $("a").attr("href");
    //alert(val);

    $(".test1").removeAttr("width");

    $("#test2").html("change <b>the</b> text.");
    var val2 =  $("#test2").text();
    //alert(val2);

    var val3 = $("#test3 #name").val();
    //alert(val3);

    $("#test4").append(", Marco");
    $("#test4").before("title");
    $("#test4").after("end.");

    var val4 = $("<p></p>").text("creating new paragraph.");
    $("#test4").after(val4);

    $("#test5").addClass("test2");

    $("#test7").click(function () {
        $("#test6").toggleClass("test2");
    });

    $("#test8").addClass("test2");
    $(".test2").css("color", "red");
    $(".test2").css({"color": "red", "font-size": "30px"});

    $("#test9").css("background-color", "red");
    $("#test9").width(100);
    $("#test9").height(100);

    var val5 = "";
    val5 += "width: " + $("#test10").width() + "";
    val5 += "height: " + $("#test10").height() + "<br>";
    val5 += "innerwidth: " + $("#test10").innerWidth() + "";
    val5 += "innerheight: " + $("#test10").innerHeight() + "<br>";
    val5 += "outerwidth: " + $("#test10").outerWidth() + "";
    val5 += "outerheight: " + $("#test10").outerHeight() + "<br>";
    $("#test10").html(val5);

    var val6 =  $("#test11").parent();
    val6.css("background-color", "red");
    val6.width(20);
    val6.height(20);

    $("p").eq(1).remove();
    $("p").eq(2).hide();

    $("#test12").siblings().remove();
    var val7 = $("#test13").children();
    val7.eq(1).empty();

    $("#test14").keydown(function () {
        $("#test15").text($("#test14").val());
    });

    $("#test16").on("click", function () {
        alert("clicked");
    });
    $("#test16").off("click");

    $("#test17").click(function (event) {
        alert(event.pageX);
        alert(event.which);
        event.preventDefault();
    });

    $("#add").click(function () {
        var item = $("#input1").val();
        if (item != "") {
            var add = $("<li></li>").text(item);
            $(add).append("<button class='remove'>X</button>");
            $("#mylist").append(add);
            $("#input1").val("");
        }
    });
    $("#mylist").on("click", ".remove", function () {
        $(this).parent().remove();
    });

    $("#test18").addClass("test1");
    $("#test19").on("click", function (event) {
        $("#test18").toggle(1000);
    });

    $("#test20").addClass("test1");
    $("#test21").on("click", function (event) {
        $("#test20").fadeToggle(1000);
    });
    $("#test22").on("click", function (event) {
        $("#test20").fadeTo(1000, 0.5);
    });

    $("#test24").on("click", function () {
        $("#test23").slideToggle(500);
    });

    $("#test25").on("click", function () {
        $("#test25").animate({width: "50px", paddingTop:"0px"}, 1000);
    });

    $("#test27").on("click", function () {
        $("#test28").slideToggle(500);
    });
});