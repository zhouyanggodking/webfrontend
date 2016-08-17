var source = Rx.Observable.range(1, 5);
var double = source.map(function (elem) {
    return elem * 2;
});

double.subscribe(function (val) {
    console.log(val);
});

var greater = double.filter(function (elem) {
    return elem > 5;
});

greater.subscribe(function (val) {
    console.log(val);
});

//for distinct operator

var forDistinctSource = Rx.Observable.from([1, 2, 3, 2, 2, 1, 4, 5]);
forDistinctSource.distinct(function (val) {
    return val;
}).subscribe(function (val) {
    console.log(val);
});