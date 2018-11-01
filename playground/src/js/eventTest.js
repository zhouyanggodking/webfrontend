(function(){
    var btn = document.querySelector('#test');
    
    eventUtility.addEvent(btn, 'click', function(event) {
        console.log('test clicked 1');
    });
    
    eventUtility.addEvent(btn, 'click', function(event) {
        console.log('test clicked 2');
    });
    
    var emitter = new EventEmitter();
    emitter.bind('testclick', function(args) {
        console.log('testclick 1 ' + args);
    });
    
    emitter.bind('testclick', function(args) {
        console.log('testclick 2 ' + args);
    });
    
    emitter.trigger('testclick', 'godking');
})();

