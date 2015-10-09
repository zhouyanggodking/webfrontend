console.log('main module entry point...');

//self defined module load
require.config({
    baseUrl:"",
    paths: {
        "jquery": "lib/jquery",
        'angular': 'lib/angular'
    },
    //used for configuring incompatible modules
    shim: {
        'angular': {
           // deps: ['jquery'],
            exports:'angular'
        }
    },
    deps: ['bootstrapAngular']
});

require(['jquery'], function ($) {
    $(document).ready(function () {
        $('p').append('test');
    });
});

require(['mymodule'], function (mymodule) {
    console.log(mymodule.color);
    console.log(mymodule.size);
    mymodule.log();
});


