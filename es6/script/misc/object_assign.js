//syntax: Object.assign(target, ...sources)
//It copys the values of all enumerable own properties from one or more source objects to a target object
//It also returns the target object

//if it meets the same key in sources or in target, then last source wins (overwrites earlier ones)
//if a property is non-writable, a TypeError will be raised

//both String and Symbol properties are copied

//It cannot be used for deep clone

let target = {
    name: 'godking'
};

let sourceSym = {
    name: 'oceansky',
    [Symbol('sym')]: 'symbol'
};

let sourceNested = {
    name: 'last one wins',
    ref: {
        address: 'advs',
        country: 'US'
    }
};

Object.assign(target, sourceSym, sourceNested);
// {
//     name: 'last one wins',
//     ref: {...}
//     Symbol(sym): 'symbol'
// }

//both target and sourceNested will change
target.ref.country = 'UK';