
export class Person {
    name: string;
    age: number;
    display(): void {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

//function export
export function print(obj: any): void {
    console.log(obj);
}

//variable export
export const version: string = '1.0.0';




