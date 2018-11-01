{
    function* gen() {
        yield 1;
        yield 2;
    }
    for (let i of gen()) {
        console.log(i);
    }
    let iter = gen();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());

    function* genWithReturn() {
        yield 1;
        yield 2;
        return 3;
        yield 4;
    }
    console.log(...genWithReturn()); // output: [1 2]

    let iter2 = gen();
    console.log(iter2.next());
    console.log(iter2.next());
    console.log(iter2.next());
    console.log(iter2.next());

    function* foo() {
        yield 0;
        yield 1;
    }

    function* bar() {
        yield 'x';
        yield* foo();
        yield 'y';
    }
    for (let v of bar()) {
        console.log(v);
    };
    //parameter in next()
    function* genNextWithParam(x) {
        let y = 2 * (yield(x + 1));
        let z = yield(y / 3);
        return (x + y + z);
    }
    let a = genNextWithParam(5);
    console.log(a.next()); // Object{value:6, done:false}
    console.log(a.next()); // Object{value:NaN, done:false}
    console.log(a.next()); // Object{value:NaN, done:true}
    let b = genNextWithParam(5);
    console.log(b.next()); // { value:6, done:false }
    console.log(b.next(12)); // { value:8, done:false }
    console.log(b.next(13)); // { value:42, done:true }

    function* genWithError() {
        yield 1;
        try {
            yield;
        } catch (e) {
            console.log('inner capture: ', e);
        }
    }
    let c = genWithError();
    c.next();
    c.next();
    c.throw('error in second iterator');
    let d = genWithError();
    d.next();
    try {
        d.throw('error in first iterator');
    } catch (e) {
        console.log('outer capture: ', e);
    }

    function* genWithThis() {
        yield this.name;
        yield this.age;
    }
    let godking = {
        name: 'godking',
        age: 100,
        genWithThis
    };
    for (let kk of godking.genWithThis()) { //output : 'godking' 100
        console.log(kk);
    }
    let name = 'godking';
    let age = 100;
    for (let kk of genWithThis()) { //output : 'godking' 100
        console.log(kk);
    }
}