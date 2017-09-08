let unique = 100; //let defined top-level variables don't add to window object.

{
    for (var i = 0; i < 10; ++i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    for (var i = 0; i < 10; ++i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    for (var k = 0; k < 10; ++k) {
        (function(kk) {
            setTimeout(function() {
                console.log(kk);
            }, 1000);
        })(k);
    }

    //let variables are hoisted but not initialized, so can use it before initialization (temporary dead zone)
    for (let j = 0; j < 10; ++j) {
        //for every loop, it creates a hidden scope which re-declares and re-initailzes j
        //that is :  j = hidden scopes' j
        {
            let king = j;
            setTimeout(() => {
                console.log(king);
            }, 1000);
        }
    }
}