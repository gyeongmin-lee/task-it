$(document).ready(function () {
    $(this).scrollTop(0);

    goBack();

    function goBack() {
        $(".close-goback").on("click", function (e) {
            window.history.back();
        })
    }
});