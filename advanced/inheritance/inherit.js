function SuperType(name) {
  this.name = name;
  this.children = [1, 2];
}

SuperType.prototype.display = function() {
  console.log('super')
}

// create a sub type to extends SuperType

///////////////////////////////////////////////////////////
// 1. use call 
// cons: can't inherit methods from SuperType
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }

// const s = new SubType('king', 100);
// s.display(); // error, no display function
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
// 2. use prototype chain
// cons: different instance shares the same Super object

// function SubType(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // how to handle arguments?
// SubType.prototype = new SuperType();

// const s1 = new SubType();
// const s2 = new SubType();
// s1.children.push(3); // now s1.children and s2.children are the same
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// 3. recomended way

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;