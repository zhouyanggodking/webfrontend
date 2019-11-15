function Foo(prop) {
  this.prop = prop;
}

Foo.prototype.getProp = function() {
  return this.prop;
}

Foo.foo = function() {
  return 'foo';
}

var f = new Foo('test');

f.getProp();


var $getProp = f.getProp;
$getProp.call(f)

