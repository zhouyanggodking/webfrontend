window.extend = function() {
    let target = arguments[0] || {};
    for (let index = 1; index < arguments.length; ++index) {
        let source = arguments[index];
        for (let key in source) {
            let copy = source[key];
            let clone = target[key];
            //recursive copy
            if (toString.call(copy) === '[object Object]') {
                clone = clone || {};
                target[key] = extend(clone, copy);
            } else if (Array.isArray(copy)) {
                clone = clone || [];
                target[key] = extend(clone, copy);
            } else {
                target[key] = copy;
            }
        }
    }
    return target;
};