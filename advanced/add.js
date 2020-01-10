const add = (...args1) => {
  const arr = []
  const f = (...args2) => {
    arr.push(...args1, ...args2);
    return f;
  }
  f.toString = () => arr.reduce((pre, curr) => pre + curr);
  return f;
}


// const r = add(1, 2)(3)(4)
// console.log(r)

Number.prototype.add = function(num) {
  return this + num;
}

Number.prototype.minus = function(num) {
  return this - num;
}

const val = (5).add(3).minus(2)

console.log(val)

