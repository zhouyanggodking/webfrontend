const Dep = require('./Dep');

const defineReactive = (data, key, val) => {
  if (typeof val === 'object') {
    new Observer(val);
  }
  let dep = new Dep();
  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: true,
    get() {
      dep.depend(); // set dependency
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify(); // notify dependency
    }
  });
}

class Observer {
  constructor(val) {
    this.value = val;

    // just for object
    if(!Array.isArray(val)) {
      this.walk(val);
    }
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key]);
    });
  }
}

module.exports = {
  defineReactive,
  Observer
};
