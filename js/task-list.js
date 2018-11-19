$(document).ready(function() {
    toggleList();   
    toggleTaskState(); 

    function toggleList() {
        var toggleDuration = 100;

        $(".content--inprogress-people").on("click", function(e) {
            $(this).parent().nextAll().eq(1).hide();
            $(this).parent().nextAll().eq(0).slideToggle(toggleDuration);
            $(this).children().toggleClass("rotated");
            $(this).next().children().removeClass("rotated");
        });
    
        $(".content--done-people").on("click", function(e) {
            $(this).parent().nextAll().eq(0).hide();
            $(this).parent().nextAll().eq(1).slideToggle(toggleDuration);
            $(this).children().toggleClass("rotated");
            $(this).prev().children().removeClass("rotated");
        });
    
        $(".close-button-img--people").on("click", function(e) {
            $(this).parent().parent().slideUp(toggleDuration);
            $(this).parent().parent().siblings(".box-bottom").children().children().removeClass("rotated");
        });
    }

    function toggleTaskState() {
        $(".checkbox").on("click", function(e) {
            $(this).toggleClass("checkbox-not-checked");
            $(this).toggleClass("checkbox-checked");
        })
    }
});