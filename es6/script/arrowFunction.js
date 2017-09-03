'use strict'

{
    function Person() {
        this.age = 10;

        this.print = function(prefix) {
            console.log(prefix + this.age);
        };

        setTimeout(function() {
            console.log(this); //this refers to window
        }, 1000);
    }

    function PersonArrow() {
        this.age = 100;

        this.print = (prefix) => {
            console.log(prefix + this.age)
        };
        setTimeout(() => {
            console.log(this); //this refers to Person object
        }, 1000);
    }

    let p = new Person();
    let pa = new PersonArrow();

    let p_print = p.print;
    p_print.call({ age: 10000 }, 'king: ');

    let pa_print = pa.print;
    pa_print.call({}, "king: ");
}