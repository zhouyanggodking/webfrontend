const { from, of } = require('rxjs');

from([1,2,3,4]).subscribe(val => {
  console.log('from: ', val);
});

of(1, 2, {
  name: 'godking'
}).subscribe(val => {
  console.log('of: ', val)
})