// well known symbols
// Symbol.asyncIterator(),
// Symbol.hasInstance()
// Symbol.iterator()
// Symbol.match() -  (search, replace, split)
// Symbol.species
// Symbol.toPrimitive()
// Symbol.toStringTag

class Custom {
  constructor(val) {
    this.val = val;
  }

  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3
  }

  // convert to primitive from object
  // hint possible values are number, string and default
  [Symbol.toPrimitive](hint) { 
    console.log(`hint: ${hint}`)
    if(hint === 'number') {
      return 1000;
    } 
    if(hint === 'string') {
      return 'godking';
    }
    return true;
  }

  // accessed internally by Object.prototype.toString()
  get [Symbol.toStringTag]() {
    return 'CustomGodKing';
  }
}

class MyArray extends Array {
  static get [Symbol.species]() {
    return Array; // MyArray will use Array to instantiate a new instance
  }
}

module.exports = {
  Custom,
  MyArray
}