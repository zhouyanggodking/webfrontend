//implement function.bind
Function.prototype.testBind = function(oThis){//could have other args
    if(typeof this !== 'function'){
        throw new TypeError('Only callable for function');
    }

    var fn = this;
    var args = [].slice.call(arguments, 1);

    return function(){//could have other args
        var arg = args.concat([].slice.call(arguments));
        console.log(arg);
        return fn.apply(oThis, arg);
    }
};