(function(){
    var xhr = new XMLHttpRequest();
    
    console.log(xhr.readyState);

    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);

        if (xhr.readyState === 4) {
            performance.mark('finish');
            performance.measure('requestTime', 'init', 'finish');
            console.log(performance.getEntriesByName('requestTime'));
            if (xhr.status === 200) {
                console.log(xhr.statusText);
                console.log(xhr.responseText);
                console.log(xhr.responseXML);
                var json = JSON.parse(xhr.responseText);
                console.log(json);

                var headers = xhr.getAllResponseHeaders();
                console.log(headers);

                console.log(xhr.getResponseHeader('etag'));
            }
        }
    };

    xhr.open('get', 'test.json');

    xhr.setRequestHeader('name', 'godking'); //must be called after open()

    xhr.send("godking-j");

    performance.mark('init');
})();