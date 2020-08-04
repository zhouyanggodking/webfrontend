const { range, interval, timer } = require('rxjs');

const { skip, skipUntil, skipWhile, skipLast } = require('rxjs/operators');

// range(1, 10).pipe(
//   skip(5)  // skip first N elements
// ).subscribe(console.log)

// range(1, 10).pipe(
//   skipLast(5)  // skip last N elements
// ).subscribe(console.log)

// interval(1000).pipe(
//   skipUntil(timer(5000))   // timer 发生时，开始取值 :  skip values until timer start to emit values
// ).subscribe(console.log)

interval(1000).pipe(
  skipWhile(x => x < 4)  // 忽略前N个满足条件的元素
).subscribe(console.log)

