//'use strict'

{
    let a = 10; //not added to window object

    function print() {
        console.log(this.a);
    }

    let obj = {
        a: 1000,
        print: print
    };

    print(); //this will point to global object under non-stric mode
    obj.print(); //1000

    function Outer() {
        this.king = 'king';

        function helper() {
            console.log(this.king);
        }

        this.print = function() {
            helper(); //individual call, this points to global obj
        }
    };

    let outer = new Outer();
    outer.print();

}