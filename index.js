$(function () {
    var $element = $('.instruction');

    //blinking effect
    setInterval(function () {
        $element.fadeIn('slow', function () {
            $element.fadeOut('slow', function () {
                $element.fadeIn('slow')
            });
        });
    }, 200);

    //awaiting for 'space' key press to begin the game
    $(document).on("keypress", function(e) {
        if (e.key === " ") {
            window.location.href = "game.html";
        }
    })
});