(function() {
    //array
    let arr = [1, 2, 3, 4];
    arr.forEach((element, index, array) => {
        console.log(element);
    });

    //set
    let set = new Set(arr);
    set.add(5);
    set.delete(3);
    set.has(3); //false
    set.has(1); //true
    set.forEach((element, sameElement, set) => {
        console.log(element);
    });

    for (let val of set.values()) {
        console.log(val);
    }

    set.clear();

    //map
    let map = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3]
    ]);

    map.set('d', 4);
    map.set('d', 5); //over write

    map.get('b'); //2
    map.keys();
    map.values();
    map.has('a'); //check for key existence

    for (let entry of map.entries()) {
        let [key, value] = entry;
        console.log(`key: ${key}, value: ${value}`);
    }

})();