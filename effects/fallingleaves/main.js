var elem = $('<div>godking<div>')
$('body').append(elem);
elem.css('color', 'red')

init(100);

function init(leafCount) {
    if (!leafCount) {
        leafCount = 30;
    }
    for (var i = 0; i < leafCount; ++i) {
        createOneLeaf();
    }
}

//createOneLeaf();

function createOneLeaf() {
    //construct leaf div elem
    var leafStyle = "top: -150px;left:" + pixelValue(randomInteger(0, 500)) + ";";
    var dropAndFadeDuration = randomFloat(5, 11);
    var dropAndFadeDelay = randomFloat(0, 5);
    var leafAnimation = "animation-name: fade, drop;animation-duration:"
        + durationValue(dropAndFadeDuration) + ","
        + durationValue(dropAndFadeDuration) + ";animation-delay:"
        + durationValue(dropAndFadeDelay) + ","
        + durationValue(dropAndFadeDelay) + ";";
    var leafDivStr = '<div style="' + leafStyle + leafAnimation + '"></div>';
    console.log(leafDivStr);
    var leafDiv = $(leafDivStr);

    $('.leave-container .leaves').append(leafDiv);

    //construct img div
    var imageSrc = './image/realleaf' + randomInteger(1, 5) + '.png';
    var imageAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    var imageSpinDuration = durationValue(randomFloat(4, 8));
    var imageAnimation = 'animation-name: ' + imageAnimationName + ';'
        + 'animation-duration:' + imageSpinDuration + ';';
    var imageDivStr = '<img src="' + imageSrc + '" ' + 'style="' + imageAnimation + '"/>';
    console.log(imageDivStr);
    var image = $(imageDivStr);
    leafDiv.append(image);    
}

function pixelValue(value)
{
    return value + 'px';
}

function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function durationValue(value)
{
    return value + 's';
}