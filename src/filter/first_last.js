const { of } = require('rxjs');

const { first, last } = require('rxjs/operators');

of(1,2,3,4).pipe(
  first(x => x % 2 === 0)
).subscribe(console.log)

of(1,2,3,4).pipe(
  last(x => x % 2 === 0)
).subscribe(console.log)