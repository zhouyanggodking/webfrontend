//for destructing demo
//array destructing
let [one, two] = [1, 2];
//console.log(one);
//console.log(two);
//swap trick
[two, one] = [one, two];
//console.log(one);
//console.log(two);

let [first, ...rest] = [1, 2, 3, 4, 5];
//console.log(first);
//console.log(rest);
//console.log(rest[0]);

let [, , three] = [1, 2, 3, 4, 5];
//console.log(three);

/////////////////////////////////////////////////
//object destructing
let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let {a, c} = o;
//console.log(a);
//console.log(b);
//let {ae, be} = o;

let {a: foo, c: bar} = o;
//console.log(foo);
//console.log(bar);