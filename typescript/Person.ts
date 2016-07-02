class Person {
    name: string;
    age: number;
    display(): void {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

export {Person};
//export default Person;
//export {Person as PersonAlias}

//function export
export function print(obj: any): void {
    console.log(obj);
}

//variable export
const version: string = '1.0.0';

export {version};



