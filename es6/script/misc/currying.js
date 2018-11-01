function sum(...args) {
    function curry(...rest) {
        if (rest.length === 0) {
            return [...args, ...rest].reduce((pre, curr) => pre + curr, 0);
        }
        return sum.apply(null, [...args, ...rest]);
    }
    return curry;
}

function arr(a, b, c) {
    return [a, b, c];
}

function sub_curry(func, ...argsOuter) {
    return function(...argsInner) {
        return func.apply(null, [...argsOuter, ...argsInner]);
    };
}