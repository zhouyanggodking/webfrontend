const Dep = require('./Dep');

const parsePath = (path) => {
  const bailPath = /[^\w.$]/;
  if (bailPath.test(path)) {
    return;
  }
  const segments = path.split('.');
  return (obj) => {
    for(let index = 0; index < segments.length; ++index) {
      if(!obj) {
        return;
      }
      obj = obj[segments[index]];
    }
    return obj;
  }
}

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.getter = parsePath(expOrFn);
    this.cb = cb;
    this.value = this.get();
  }

  get() {
    Dep.target = this;
    const val = this.getter.call(this.vm, this.vm);
    Dep.target = null;
    return val;
  }

  update() {
    const oldVal = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldVal);
  }
}

module.exports = Watcher;