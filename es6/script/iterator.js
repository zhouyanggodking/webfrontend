{
    let godkingIterator = {
        [Symbol.iterator]() {
            return this;
        },
        _count: 100,
        next() {
            if (this._count < 0) {
                return {
                    done: true
                };
            }
            return { done: false, value: this._count-- };
        }
    };

    for (let v of godkingIterator) {
        console.log(v);
    }
}