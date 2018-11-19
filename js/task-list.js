$(document).ready(function() {
    $(".content--inprogress-people").on("click", function(e) {
        $(this).parent().nextAll().eq(1).hide();
        $(this).parent().nextAll().eq(0).toggle();
    });

    $(".content--done-people").on("click", function(e) {
        $(this).parent().nextAll().eq(0).hide();
        $(this).parent().nextAll().eq(1).toggle();
    });

    $(".close-button-img--people").on("click", function(e) {
        $(this).parent().parent().hide();
    });
});