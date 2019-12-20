const throttle = (fn, interval) => {
  let isSkip = false;
  return (...args) => {
    if (isSkip) {
      return;
    }
    isSkip = true;
    setTimeout(() => {
      fn.apply(null, args)
      isSkip = false;
    }, interval);
  }
}

const test = () => console.log('king');

const th = throttle(test, 1000);

th();
th();
th();