(function(){
    let obj = {
        name: 'godking',
        address: ['1', '2']
    };

    let target = {
        name: 'oceansky'
    };

    let result = extend(target, obj);
    console.log(result);

    let jr = $.extend(target, obj);
    console.log(jr);
})();