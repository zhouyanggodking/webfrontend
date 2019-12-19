const compose = (...funcs) => {
  return funcs.reduce((pre, curr) => (...args) => pre(curr(...args)));
}

// test
const add = (a, b) => a + b;
const square = x => x * x;
const log = x => Math.log(x);


console.log(compose(log, square, add)(1, 2));