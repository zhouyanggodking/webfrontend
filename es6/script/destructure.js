{
    //destruct from array
    let a, b, rest;
    [a, b] = [1, 2, 3, 4];

    [a, b, ...rest] = [1, 2, 3, 4];

    //destruct from object
    let { age, job } = { age: 100, job: 'Hunter', name: 'king' };
    ({ age, job, ...rest } = { age: 100, job: 'Hunter', name: 'king' }); //rest = {name: 'king'}

    //swap
    [b, a] = [a, b]

    //default value
    let { salary = 10000 } = { age: 100, job: 'Hunter', name: 'king' }; //salary = 10000
    //when assignment without declaration - destructing from object, () around is required 
    ({ age, job } = { age: 100, job: 'Hunter', name: 'king' });
    //renaming to other variables
    let { age: ageAlias, name: nameAlias } = { age: 100, job: 'Hunter', name: 'king' };
    //renaming and providing default values
    let { salary: salaryAlias = 10000 } = { age: 100, job: 'Hunter', name: 'king' };

    //function default parameter values
    //this version, invoker needs to provide a object at least empty object
    //to make destructing work
    function es6WithDefaultFunc({ name = 'godking', age = 100 }) {
        console.log(name);
        console.log(age);
    }

    //this version, invoker doesn't need to provide anything 
    //to make it work
    function es6WithDefaultFuncParam({ name = 'godking', age = 100 } = {}) {
        console.log(name);
        console.log(age);
    }
}