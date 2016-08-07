var exeZone = zone.fork({
    beforeTask: function () {
        console.log('before task');
    },
    afterTask: function () {
        console.log('after task');
    }
});

//var childZone = exeZone.fork({
//    $beforeTask: function (parentBeforeTask) {//will pass returned function for parent
//        return function () {
//            parentBeforeTask();
//            console.log('child zone before task...');

//        }
//    },
//    $afterTask: function (parentAfterTask) {
//        return function () {
//            console.log('child zone after task...');
//            parentAfterTask();
//        }
//    }
//});

var childZone = exeZone.fork({
    '+beforeTask': function () {//+ means run after
        console.log('child zone before task...');
    },
    '-afterTask': function (parentAfterTask) {//- means run before
        console.log('child zone after task...');
    }
});

//run function is the interface to run our business logic
childZone.run(function () {
    console.log('my first zone');
    setTimeout(function () {
        console.log('setTimout task');
    }, 0);
});