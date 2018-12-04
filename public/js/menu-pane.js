$(document).ready(function () {
    var menuPanel = $(".menu-panel");
    var menuButton = $(".button--menu");
    var exitButton = $(".close-button-img--menu");
    var animationSpeed = 100;
    var swipeOffset = 50;
    var start = null;

    menuButton.click(toggleMenu);

    exitButton.click(toggleMenu);

    menuPanel.on('touchstart', function (e) {
        if (e.touches.length === 1) {
            start = event.touches.item(0).clientX;
        } else {
            start = null;
        }
    });

    menuPanel.on('touchend', function (e) {
        if (start) {
            var end = e.changedTouches.item(0).clientX;
            if ((start - end) > swipeOffset) {
                toggleMenu();
            }
        }
    });

    // Toggles menu pane
    function toggleMenu(event) {
        menuPanel.animate({ width: 'toggle' }, animationSpeed);
    }
});