//for interface and class

class Person {
    name: string;//default public, public/protected/private modifier
    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

class Centaur extends Person {
    private _age: number;

    constructor(name: string) {
        super(name);
    }

    display() {
        console.log('Centaur name :' + this.name + " Age: " + this.age);
    }

    run() {
        super.display();
        console.log('run...');
    }

    //setter and getter
    get age(): number {
        return this._age;
    }

    set age(newAge: number) {
        this._age = newAge;
    }

    static version() {
        console.log('1.0.0');
    }
}

let p = new Person('OceanSky');
p.display();

let cent = new Centaur('King');
cent.run();

cent.age = 90;
cent.display();
Centaur.version();

//abstract class
abstract class Animal {
    type: string;
    abstract eat(): void;//must be implemented by derived class
    sleep() {
        //implementation
    }
}