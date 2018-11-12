$(document).ready(function() {
    var menuPanel = $(".menu-panel");
    var menuButton = $(".button--menu");
    var exitButton = $(".close-button-img--menu");
    var animationSpeed = 400;

    menuButton.click(function() {
        menuPanel.slideToggle(animationSpeed);
    });

    exitButton.click(function() {
        menuPanel.slideToggle(animationSpeed);
    });
});