var xAngle = 0, yAngle = 0;
$(document).keydown(function (e) {
    switch (e.keyCode) {

        case 37: // left
            yAngle += 90;
            break;

        case 38: // up
            xAngle += 90;
            break;

        case 39: // right
            yAngle -= 90;
            break;

        case 40: // down
            xAngle -= 90;
            break;
    };
    var str = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    $('.cube-view-container .cube').css({ 'transform': str });
    console.log($('.cube-view-container .cube').css('transform'));
});