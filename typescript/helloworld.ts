let arr = [5, 6, 3, 4];

for (let v of arr) {
    console.log(v);
}

for (let key in arr) {
    console.log(key);
}


let obj = {
    name: 'oceansky',
    age: 90
};

//for (let v of obj) {//error, must be list
//}

for (let key in obj) {
    console.log(key);
}