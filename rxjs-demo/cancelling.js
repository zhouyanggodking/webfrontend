//repeat with ascending numbers
//0, 1, 2...
var counter = Rx.Observable.interval(1000);

var subscription1 = counter.subscribe(function (val) {
    console.log('sub1: ' + val);
});

var subscription2 = counter.subscribe(function (val) {
    console.log('sub2: ' + val);
});

setTimeout(function () {
    console.log('cancelling sub2...');
    subscription2.dispose();
}, 2000);

