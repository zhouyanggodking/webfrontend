let isPerson: boolean = true;
let age: number = 40;
let fullname: string = 'Ocean Sky';
let statement = `Name: ${fullname}, Age: ${age}`;

console.log(statement);
//array declaration
let arrStr: string[] = ['one', 'two', 'three'];
let arrInt: Array<number> = [1, 2, 3];
let arrAny: Array<any> = ['one', 2, 'three'];

console.log(arrAny);
//tuple
let x: [string, number] = ["OceanSky", 40];
console.log(x[0]);
x[0] = 'Pacific';
console.log(x[0]);

//type assertion
let testAny: any = 'Ocean';
let str: string = <string>testAny;
str = testAny as string;