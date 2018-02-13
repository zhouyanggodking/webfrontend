(function() {
    function* genWithError() {
        yield 1;
        try {
            yield;
        } catch (e) {
            console.log('captured inner');
        }

    }

    let g = genWithError();
    g.next();
    g.next();
    g.throw('gen error')
})();