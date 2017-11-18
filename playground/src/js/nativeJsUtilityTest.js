(function(){
    function test(y, z){
        return this.sum + y + z;
    }
    var fn = test.testBind({sum: 100});
    console.log(fn(10, 1));
    
    var fn_1 = test.testBind({sum: 100}, 10);
    console.log(fn_1(1));
    
    var fn_2 = test.testBind({sum: 100}, 10, 1);
    console.log(fn_2());
})();

