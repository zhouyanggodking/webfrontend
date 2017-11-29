(function(){
    var worker = new Worker('./js/webworker/worker.js');    

    worker.onmessage = function(event){
        console.log(event.data);
    };

    worker.onerror = function(error){
        console.log(error);
    };

    setInterval(function(){
        console.log('main thread say Hello there');
        worker.postMessage('Hello there...' + Math.random() * 100);
    }, 1000);
})();