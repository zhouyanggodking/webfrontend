//syntax:  Object.defineProperty(obj, prop, descriptor);
//it defines new property or modify existing property and returns the object
//Property descriptor comes in two flavors: data descriptor and accessfor descriptor (can't be both)

//shared keys:
/**
 * configurable: true if and only if the type of this property descriptor may be changed and
 * if the property may be deleted from the corresponding object
 * default value: false
 * 
 * enumerable: true if and only if this property shows up during enumeration of the properties on the corresponding object
 * default value: false
 */

//data descriptor
/**
 * value: default to undefined
 * 
 * writable: default to false
 */

//accessor descriptor
/**
 * get: default to undefined
 * 
 * set: default to undefined
 */

{
    let obj = {};
    Object.defineProperty(obj, 'name', {
        configurable: false,
        value: 'godking'
    });

    console.log(delete obj.name);
    //false, can't be deleted, or change the descriptor if configurable is false

    //data descriptor
    Object.defineProperty(obj, 'age', {
        configurable: true,
        enumerable: true,
        writable: false,
        value: 100
    });

    obj.age = 1000; //no error throws, but will throw in strict mode
    obj.age === 100;

    for (let key in obj) {
        console.log(key); //only age
    }


    Object.defineProperty(obj, 'title', {
        configurable: true,
        enumerable: true,
        get: function() {
            return 'SE';
        }
    });

    for (let key in obj) {
        console.log(key); //only age
    }

    obj.address = 'addr.';
    let descriptor = Reflect.getOwnPropertyDescriptor(obj, 'address');
    /**
     * value: addr.
     * writable: true
     * configurable: true
     * enumerable: true
     */
    console.log(descriptor);
}