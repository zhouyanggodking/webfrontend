function LazyMan(name) {
  this.name = name;
  this.taskQueue = [];  
  console.log(`Hi, I am ${this.name}`);

  Promise.resolve().then(() => {
    this.next();
  });
  
  this.sleep = time => {    
    this.taskQueue.push(() => {
      setTimeout(() => {
        console.log(`waited ${time}s`);
        this.next();
      }, time * 1000)
    });
    return this;   
  };

  this.sleepFirst = time => {
    this.taskQueue.unshift(() => {
      setTimeout(() => {
        console.log(`waited ${time}s`);
        this.next();
      }, time * 1000)
    });
    return this; 
  };

  this.eat = something => {
    this.taskQueue.push(() => {
      console.log(`I am eating ${something}`);
      this.next();
    });
    return this; 
  };

  this.next = () => {
    const fn = this.taskQueue.shift();
    fn && fn();
  };

  
  if (!(this instanceof LazyMan)) {
    return new LazyMan(name);
  }
}


LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');