$(document).ready(function() {
    $(".content--inprogress-people").on("click", function(e) {
        $(this).parent().nextAll().eq(1).hide();
        $(this).parent().nextAll().eq(0).toggle();
        $(this).children().toggleClass("rotated");
        $(this).next().children().removeClass("rotated");
    });

    $(".content--done-people").on("click", function(e) {
        $(this).parent().nextAll().eq(0).hide();
        $(this).parent().nextAll().eq(1).toggle();
        $(this).children().toggleClass("rotated");
        $(this).prev().children().removeClass("rotated");
    });

    $(".close-button-img--people").on("click", function(e) {
        $(this).parent().parent().hide();
        $(this).parent().parent().siblings(".box-bottom").children().children().removeClass("rotated");
    });
});