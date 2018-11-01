// Reflect is a built-in object that provides methods for interceptable JavaScript operations. 
// The methods are the same as those of proxy handlers. 
// Reflect is not a function object, so it's not constructible.
{
    function log(...args) {
        console.log(args);
    }

    Reflect.apply(log, {}, [1, 2, 3, 4]);

    let obj = {
        name: 'godking',
        age: 100
    };

    let name = Reflect.get(obj, 'name'); //obj['name']
    console.log(name);

    Reflect.set(obj, 'age', 1000); //obj['age']=1000
    console.log(obj.age);
}