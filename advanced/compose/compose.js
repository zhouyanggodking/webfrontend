const compose = (...funcs) => {
  return funcs.reduce((pre, curr) => (...args) => curr(pre(...args)));
}

// test
const add = (a, b) => a + b;
const square = x => x * x;
const log = x => Math.log(x);


console.log(compose(add, square, log)(1, 2));