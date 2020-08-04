const { of } = require('rxjs');
const { tap, map } = require('rxjs/operators');

of(1, 2, 3, 4).pipe(
  map(x => x * x),
  map(x => x + 10)
).subscribe(console.log)