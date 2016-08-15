//basic way to create observable and observer, then connect
//var observable = Rx.Observable.create(function (observer) {
//    observer.onNext('king');
//    observer.onNext('ocean');
//    observer.onNext('sky');
//    observer.onCompleted();//done
//});

//var observer = Rx.Observer.create(
//    function onNext(x) { console.log(x);},
//    function onError(err) { },
//    function onCompleted() { console.log('done'); }
//    );

//observable.subscribe(observer);

//using operator
//from arg
//var observable = Rx.Observable.of('king');
//from iterable
//var observable = Rx.Observable.from(['king', 'ocean', 'sky']);
//from event
var observable = Rx.Observable.fromEvent(document, 'mousemove');
observable.subscribe(
    function (x) { console.log(x); },
    function (err) { },
    function () { console.log('done')}
    )