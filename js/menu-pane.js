$(document).ready(function() {
    var menuPanel = $(".menu-panel");
    var menuButton = $(".button--menu");
    var exitButton = $(".close-button-img--menu");
    var animationSpeed = 400;

    menuButton.click(function() {
        menuPanel.animate({width: 'toggle'}, 200);
    });

    exitButton.click(function() {
        menuPanel.animate({width: 'toggle'}, 200);
    });
});