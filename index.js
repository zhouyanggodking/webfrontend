const { defineReactive, Observer } = require('./Observer');
const Watcher = require('./Watcher');

const obj = {
  test: 'king'
};

// defineReactive(obj, 'test', 'king');
new Observer(obj);


const watcher = new Watcher(obj, 'test', (newVal, oldVal) => {
  console.log('changed');
  console.log(newVal);
  console.log(oldVal);
});


obj.test = 'WAT'
