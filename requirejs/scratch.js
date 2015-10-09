var myModule = (function () {
    var func1 = function () {
        console.log("first scratch");
    };

    var func2 = function () {
        console.log("second scratch");
    };

    return {
        func1: func1,
        func2: func2
    }
}
)();

myModule.func1();
myModule.func2();