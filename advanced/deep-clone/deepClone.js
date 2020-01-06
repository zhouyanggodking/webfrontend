// need to consider array, reg, date, object.prototype, etc  circular reference?
const set = new WeakSet();
const deepClone = obj => {
  if (typeof obj !== 'object' || typeof obj !== 'function') { // primitive checks
    return obj;
  }

  if (obj instanceof RegExp) {
    const reg = new RegExp(obj.source, obj.flags);
    reg.lastIndex = reg.lastIndex;
    return reg;
  } 

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    const arr = [];
    for (item of obj) {
      arr.push(deepClone(item));
    }
    return arr;
  }

  // other types???

  // normal objects or user defined objects
  const proto = Object.getPrototypeOf(obj);
  const clone = Object.create(proto);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      set.add(obj);
      if (set.has(obj[key])) {
        clone[key] = obj[key];
      } else {
        clone[key] = deepClone(obj[key]);
      }      
    }
  }
  return clone;
};

const bftDeepClone = obj => {
  
}

module.exports = deepClone
