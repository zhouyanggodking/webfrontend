class Dep {  
  constructor() {
    this.subs = [];
    Dep.target = null;
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    this.subs = this.subs.filter(item => item !== sub);
  }

  depend() {
    if (Dep.target) {
      this.addSub(Dep.target);
    }    
  }

  notify() {
    const subs = this.subs.slice();
    subs.forEach(sub => {
      sub.update();
    });
  }
}

module.exports = Dep;
