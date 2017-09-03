{
    let name = 'king';

    let superObj = {
        fly() {
            console.log('flying...');
        }
    };

    let enhancedObjLiteral = {
        __proto__: superObj,
        name, // name: name
        fly() {
            console.log(this.name);
            super.fly();
        },
        //dynamic properties
        ['prop_' + 'king']: 'king',
        ['prop_' + (() => 1000)()]: 1000
    }
}