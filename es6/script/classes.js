class Point {
    constructor(xCor, yCor) {
        this.x = xCor;
        this.y = yCor;
    }

    get xCordinate() {
        console.log('accessing x...');
        return this.x;
    }

    set xCordinate(value) {
        console.log('seting value for x...');
        this.x = value;
    }

    //normal methods
    print() {
        console.log(`x: ${this.x}, y: ${this.y}`);
    }

    //static methods, can't be called on instance
    static distance(p1, p2) {
        return Math.hypot(p1.x - p2.x, p1.y - p2.y);
    }
}

class Animal {
    constructor(kind) {
        this.kind = kind;
    }

    eat() {
        console.log('Animal eats...');
    }
}

class Bird extends Animal {
    constructor() {
        super('bird');
    }

    eat() {
        console.log('Animal eats...');
    }
}