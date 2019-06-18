const Dep = require('./Dep');

const defineReactive = (data, key, val) => {
  let dep = new Dep();
  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: true,
    get() {
      dep.depend();
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify();
    }
  });
}

module.exports = {
  defineReactive
};
