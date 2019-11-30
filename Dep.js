class Dep {  
  constructor() {
    this.subs = []; // watcher
    Dep.target = null;
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    this.subs = this.subs.filter(item => item !== sub);
  }

  depend() {
    if (Dep.target) { // watcher
      this.addSub(Dep.target);
    }    
  }

  notify() {
    const subs = this.subs.slice();
    subs.forEach(sub => {
      sub.update(); // watcher.update
    });
  }
}

module.exports = Dep;
