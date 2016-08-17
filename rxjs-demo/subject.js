//subject derives from both Observable and Observer
var subject = new Rx.Subject();

var source = Rx.Observable.interval(100)
    .map(function (x) {
        return 'interval message ' + x;
    });

source.subscribe(subject);


var subscription = subject.subscribe(
    function onNext(x) { console.log('onNext ' + x) },
    function onError(err) { console.log('onError'+ err.message); },
    function onCompleted() { console.log('completed'); }
    );

subject.onNext('our message #1');
subject.onNext('our message #2');


setTimeout(function () {
    subject.onCompleted();
}, 1000);