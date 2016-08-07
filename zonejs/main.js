//fork function will fork a new child zone which inherits zone
//fork function can set its own hook function 
//child zone is an independent zone context
var exeZone = zone.fork({
    beforeTask: function () {
        console.log('before task');
    },
    afterTask: function () {
        console.log('after task');
    }
});

//run function is the interface to run our business logic
exeZone.run(function () {
    console.log('my first zone');
    setTimeout(function () {
        console.log('setTimout task');
    }, 0);
});