const deepClone = require('./deepClone');

const arr = [1, 2, 3];
arr[10] = 10;

const reg = /abc/igm;

const obje = {
  name: 'king',
  arr: [1, 2]
}


function Company() {
  this.ticker = 'ADVS';
}

const comp = new Company;

const date = new Date;

const obj = {
  arr,
  reg,
  obje,
  comp,
  date
};

obj.circular = obj;


const clone = deepClone(obj)
console.log(clone)
clone.arr[5] = 5;
clone.obje.arr[10] = 10;
clone.date.setMonth(4);
console.log(clone)
