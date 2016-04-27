var animal = {
    name: 'Animal',
    eat: function () {
        console.log(this.name + ' eating');
    }
};

var rabbit = {
    name: 'Big bunny'
};

animal.eat();//Animal eating
//////////////////////////////
rabbit.__proto__ = animal;
rabbit.eat();//Big bunny eating
/////////////////////////////

function Rabbit(name) {//constructor function
    this.name = name;
}

Rabbit.prototype = animal;///
var rabbit2 = new Rabbit('stupid rabbit');/// works as:  rabbit2.__proto__ = animal;
rabbit2.eat();

////////////////////////////

function inherit(proto) {
    function F() { }
    F.prototype = proto;
    return new F();
}

var rabbit3 = inherit(animal);
rabbit3.name = 'ocean sky';
rabbit3.eat();

/////////////////////////////

var rabbit4 = Object.create(animal);
rabbit4.name = 'godking';
rabbit4.eat();
