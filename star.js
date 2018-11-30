$(function () {
    $(".star").on("click", function (event) {
        var val = $("<div></div>").text("★★★★★");
        val.addClass("starFill");
        $(".star").append(val);
        $(".star").children().eq(0).css({width: event.pageX + 'px'});
    });
});