console.log('main module entry point...');

//self defined module load
require.config({
    baseUrl:"",
    paths: {
        "jquery": "jquery",
        'angularjs': 'angularjs'
    },
    //used for configuring incompatible modules
    shim: {
        'angularjs': {
           // deps: ['jquery'],
            exports:'angularjs'
        }
    }
});

require(['jquery'], function ($) {
    $(document).ready(function () {
        $('p').append('test');
    });
});

require(['mymodule'], function (mymodule) {
    console.log(mymodule.color);
    console.log(mymodule.size);
});
