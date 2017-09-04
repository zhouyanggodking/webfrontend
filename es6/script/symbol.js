let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3; //false

typeof sym1 === 'symbol';

console.log(Symbol.keyFor(sym2)); //undefined

//create a shared symbol
let globalSym = Symbol.for('global_sym');
//returns the symbol key
console.log(Symbol.keyFor(globalSym)); //global_sym

let obj = {
    name: 'godking',
    [Symbol('age')]: 'age'
};

for (let key in obj) { //loop without symbol properties
    console.log(key); //godking
}

console.log(Reflect.ownKeys(obj));
console.log(Object.getOwnPropertySymbols(obj));