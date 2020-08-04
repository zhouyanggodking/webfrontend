const { range, interval, timer } = require('rxjs');

const { throttle, throttleTime } = require('rxjs/operators');

// interval(1000).pipe(
//   throttle(val => {
//     console.log(val);
//     return interval(5000)
//   })
// ).subscribe(console.log)

interval(1000).pipe(
  throttleTime(5000)
).subscribe(console.log)