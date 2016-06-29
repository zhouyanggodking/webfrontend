//for generic demo
//generic function
function getType<T>(identity: T): string{
    return typeof identity;
}

let type = getType('str');
type = getType<number>(9);
type = getType({ name: 'king' });
type = getType([1, 2, 3, 5]);

console.log(type);


//generic type
let myGetType: <T>(identity: T) => string = getType;
type = myGetType(true);

//generic class/interface
class Stack<T>{
    private _list: Array<T>;
    constructor(list: Array<T>) {
        this._list = list;
    }
    push(elem: T): void {
        this._list.push(elem);
    }

    pop(): void {
        this._list.pop();
    }

    top(): T {
        let length = this._list.length;
        return this._list[length - 1];
    }
}
//generic constraint
interface IAnimal { }
class Animal { }
class Fish extends Animal { }
class AnimalStack<T extends Animal/*IAnimal*/>{
    private _list: Array<T>;
    constructor(list: Array<T>) {
        this._list = list;
    }
    push(elem: T): void {
        this._list.push(elem);
    }

    pop(): void {
        this._list.pop();
    }

    top(): T {
        let length = this._list.length;
        return this._list[length - 1];
    }
}

class Demo<T extends U, U>{ }
