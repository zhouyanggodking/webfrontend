{
    //spread for array
    function spreadForFuncCall(x, y, z) {
        return x + y + z;
    }

    let args = [2017, 8, 9];
    spreadForFuncCall(...args);
    spreadForFuncCall.apply(null, args);

    new Date(...args); //can also be used in contructor
    //powerful in array literal
    let arr = ['god', 'king'];
    let arr_copy = [...arr]; //['god', 'king']
    //concatenate arrays
    let arr_concat = ['ocean', ...arr, 'sky']; //['ocean', 'god', 'king', 'sky']
    let arr_include = ['ocean', [...arr], 'sky']; //['ocean', ['god', 'king'], 'sky']

    //all level copy
    let arr_num = [
        [1, 2],
        ['3'],
        [
            ['godking']
        ]
    ];

    let arr_num_copy = [...arr_num];
    console.log(arr_num_copy);
}

{
    //spread for object literal
    //It copies own enumerable properties from a provided object onto a new object, 
    //shallow clone
    let obj1 = {
        name: 'godking',
        age: 40,
        company: { name: 'advent', location: 'advs address' }
    };
    let obj2 = { name: 'test', title: 'SE' };
    let clonedObj = {...obj1 };

    //obj1 and clonedObj share the same company object.
    clonedObj.company.name = 'IGT';

    //{name: 'test', age: 40, title: 'SE', company:{name: 'IGT', address: 'advs address'}}
    let mergedObj = {...obj1, ...obj2 };
}