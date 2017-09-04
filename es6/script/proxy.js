{
    let target = {
        name: 'godking',
        age: 100,
        print(args) {
            console.log(`name: ${this.name}, age: ${this.age}`);
            console.log(args);
        }
    };
    let handler = {
        get(receiver, name) {
            console.log(receiver);
            console.log(name);
            if (receiver[name] instanceof Function) {
                return function(...args) {
                    receiver[name].apply(receiver, args);
                };
            }
            return `PREFIX - ${receiver[name]}`;
        }
    }
    let p = new Proxy(target, handler);
    console.log(p.name); //PREFIX - godking
    p.name = 'ocean sky';
    console.log(p.name); //PREFIX - ocean sky
    console.log(p.age); //PREFIX - 100

    //proxy for function
    let targetFunc = function(args) {
        console.log(args);
    };
    let handlerFunc = {
        apply(receiver, thisArg, ...args) {
            console.log(receiver);
            console.log(thisArg); //{why: 'WHY'}
            console.log(args); //[1, 2, 3, 4]
            return 'called';
        }
    };
    let pFunc = new Proxy(targetFunc, handlerFunc);
    pFunc.apply({ why: 'WHY' }, [1, 2, 3, 4]);

}