const { of } = require('rxjs');

const { single } = require('rxjs/operators');

of(1,2,3,4).pipe(
  single(x => x === 2)
).subscribe(console.log)