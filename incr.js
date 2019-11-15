function incrementX(obj) {
  return 1 + obj.x;
}

incrementX({ x: 2})


function Test(a, b , c) {
  this.a = 'string';
  this.b = 34;
  this.c = {
    name: 'string'
  };
}

var t = new Test()
t.a = 3;
t.c = 'string';


