{
    let obj = {
        toString() {
            console.log('toString function');
            return 'obj'; //returns primitive value
        },

        valueOf() {
            console.log('valueOf function');
            return 10;
        }
    };

    //string conversion
    alert(obj); //obj

    let obj_valueof = {
        toString() {
            console.log('toString function');
            return {}; //returns non-primitive value, then it will try using valueOf()
        },

        valueOf() {
            console.log('valueOf function');
            return {}; //if valueOf() not returns primitive values, then throw errors
        }
    };

    alert(obj_valueof); //10,  it first try toString() function then call valueOf()
}