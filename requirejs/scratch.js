//not AMD module
(function (window) {
    var func1 = function () {
        console.log("first scratch");
    };

    var func2 = function () {
        console.log("second scratch");
    };

    window.scratchModule = {
        func1: func1,
        func2: func2,
    };

    return scratchModule
}
)(window);
