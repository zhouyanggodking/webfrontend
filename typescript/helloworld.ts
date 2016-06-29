//for interface, class demo
enum Direction{
    Up = 1,
    Down,
    Right,
    Left
};

interface IPerson {
    name: string;
    age?: number;//optional
    title?: string;
    walk(distant: number, direction: Direction): void;
}

class Person implements IPerson {
    name: string;
    walk = (distant: number, direction: Direction) => {
        console.log(`name: ${this.name}, distant: ${distant}, direction: ${Direction[direction]}`);
    }
    swim(): void {
        console.log('swimming');
    }
}

let person = new Person();
person.name = "OceanSky";
person.walk(10, Direction.Right);

interface MrWhite extends IPerson {
}

class Centaur extends Person {
}

interface IDemo extends Person {
}

class Demo implements IDemo {
    name: string;
    walk() { }
    swim() { }    
}

