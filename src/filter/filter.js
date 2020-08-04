const { of } = require('rxjs');

const { filter } = require('rxjs/operators');

of(1,2,3,4).pipe(
  filter(x => x < x * x)
).subscribe(console.log)