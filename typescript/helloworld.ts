//for function demo

//declaration
function add(x: number, y: number): number {
    return x + y;
}

let aliasAdd = add;

//funciton type
let myAdd: (x: number, y: number) => number
    = add;

//optional parameters: optionsal params must follow required ones
function compile(filename: string, extension?: string): boolean {
    return true;
}

//function compile2(extension?: string, filename: string): boolean {
//    return true;
//}

//default parameters
function cppCompile(filename: string, extension: string = '.cpp'): boolean {
    return true;
}

//function cppCompile2(extension: string = '.cpp', filename: string): boolean {
//    return true;
//}
//cppCompile2(undefined, 'helloworld');

//rest params: treated as boundless optional parameters
function addEx(x: number, ...restNum: number[]): number {
    let sum = x;
    for (let i = 0; i < restNum.length; ++i) {
        sum += restNum[i];
    }
    return sum;
}
//console.log(addEx(1, 2, 3, 4, 5, 6, 7, 8));

//////////////////////////////////////////////////////////
//function overload
function concat(x: string, y: string): string;
function concat(x: number, y: number): number;
function concat(x: any, y: any): any {
    if (typeof x == 'number' && typeof y == 'number') {//1, 2 => 12
        return +(x.toString() + y.toString());
    }
    return x.toString() + y.toString();
}

//lambda expression
function accumulate(numList: number[], action: (x: number, y: number) => number): number{
    let acc: number;
    for (let i = 0; i < numList.length; ++i) {
        if (i > 0) {
            acc = action(acc, numList[i]);
        } else {
            acc = numList[0];
        }
    }
    return acc;
}

console.log(accumulate([1, 2, 3, 4], add))
console.log(accumulate([1, 2, 3, 4], (x, y) => { return x * y }));