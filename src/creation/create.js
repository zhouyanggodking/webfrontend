const { Observable } = require('rxjs');

// const seq = Observable.create(observer => {
//   observer.next(1);
//   observer.next(2);
// });

// seq.subscribe(console.log);

const evenNums = Observable.create(observer => {
  let num = 0;
  const timer = setInterval(() => {
    if (num % 2 === 0) {
      observer.next(num);
    }
    ++num;
    console.log('debuging log', num);
  }, 500);
  return () => clearInterval(timer);  // unsubscribe 时调用 
});

const subscribe = evenNums.subscribe(console.log);

setTimeout(() => {
  subscribe.unsubscribe();
}, 10000);




