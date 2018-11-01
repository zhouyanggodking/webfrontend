addEventListener('message', function(event){
    console.log(self);
    console.log(location);

    setTimeout(function(){
        postMessage('auto reply - ' + event.data);
        close();
    }, 1000);
});