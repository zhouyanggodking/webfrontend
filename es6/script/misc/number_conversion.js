//how to trigger
//1. comparison:  obj == 'abc'
//2. arithmetic operation: obj + 'abc'

/**rules:
 * first try valueOf then toString, otherwise throw exceptions
 */
{
    let obj = {
        toString() {
            console.log('toString function');
            return 'godking';
        },
        valueOf() {
            console.log('valueOf function');
            return 'ocean sky';
        }
    };

    console.log(obj + 'test');

    let obj_tostring = {
        toString() {
            console.log('toString function');
            return 'godking';
        },
        valueOf() {
            console.log('valueOf function');
            return {}
        }
    };
    console.log(obj_tostring + 'test');
}