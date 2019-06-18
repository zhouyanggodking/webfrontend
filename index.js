const { defineReactive } = require('./Observer');
const Watcher = require('./Watcher');

const obj = {};

defineReactive(obj, 'test', 'king');


const watcher = new Watcher(obj, 'test', (newVal, oldVal) => {
  console.log('changed');
  console.log(newVal);
  console.log(oldVal);
});


obj.test = 'WAT'
