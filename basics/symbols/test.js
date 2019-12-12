const {Custom, MyArray} = require('./index');

const arr = new MyArray(1, 2, 3);

const squareOfArr = arr.map(item => item * item);

console.log(arr instanceof MyArray); // true

console.log(squareOfArr instanceof MyArray); // false in browser
console.log(squareOfArr instanceof Array); // true // Symbol.species

const cust = new Custom;
console.log([...cust]); // [1, 2, 3]  // Symbol.iterator
console.log(+cust);// hint is number => 1000 // Symbol.toPrimitive
console.log(`${cust}`);// hint is string => godking // Symbol.toPrimitive
console.log(cust + cust);// hint is default => true + true == 2 // Symbol.toPrimitive
console.log(Object.prototype.toString.call(cust));// [object CustomGodKing] //Symbol.toStringTag

