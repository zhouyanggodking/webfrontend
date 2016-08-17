//pure function, avoiding external state

Rx.Observable.interval(1000).take(10)
.scan(function (acc, current) {//accumulator, current value
    if (current % 2 === 0) {
        acc++;
    }
    return acc;
}, 0)//seed value
.subscribe(function (count) {
    console.log(count);
})

//average
Rx.Observable.interval(1000).take(10)
.scan(function (acc, current) {//accumulator, current value
    return {
        sum: acc.sum + current,
        count: acc.count + 1
    }
}, { sum: 0, count: 0 })//seed value
.map(function (obj) {
    return obj.sum / obj.count;
})
.subscribe(function (val) {
    console.log(val);
})