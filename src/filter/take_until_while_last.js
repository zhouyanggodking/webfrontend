const { range, interval, timer } = require('rxjs');

const { take, takeUntil, takeWhile, takeLast } = require('rxjs/operators');


// interval(1000).pipe(
//   take(10)
// ).subscribe(console.log)

// interval(1000).pipe(
//   takeUntil(timer(10000))
// ).subscribe(console.log)

// interval(1000).pipe(
//   takeWhile(x => x < 10)
// ).subscribe(console.log)

range(1, 100).pipe(
  takeLast(10)
).subscribe(console.log)
