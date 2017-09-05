{
    function async1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('asyn1 completed');
                resolve('data from async operation1');
            }, 1000);
        });
    }

    function async2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('asyn2 completed');
                resolve('data from async operation2');
            }, 2000);
        });
    }

    function async3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('asyn3 completed');
                resolve('data from async operation3');
            }, 3000);
        });
    }

    //chaining
    async1().then((data) => {
        console.log(data);
        return async2(); //returning promise
    }).then((data) => {
        console.log(data);
        return async3();
    }).then((data) => {
        console.log(data);
    });

    async1().then((data) => {
        console.log(data);
        return 50; //returning value directly
    }).then((data) => {
        console.log(data);
        return 100;
    }).then((data) => {
        console.log(data);
    });

    async1().then((data) => {
        console.log(data);
        return 50;
    }).then((data) => {
        console.log(data);
        throw new Error('error in promise'); //this error will be caught by catch clause
    }).then((data) => {
        console.log(data);
    }).catch((reason) => {
        console.log(reason);
    });


    //all
    Promise.all([async1(), async2(), async3()]).then((results) => {
        console.log('all done...');
        console.log(results);
    });

    //race
    Promise.race([async1(), async2(), async3()]).then((result) => {
        console.log('race to first...');
        console.log(result);
    });
}