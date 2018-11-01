console.log('main module entry point...');

//self defined module load
require.config({
    baseUrl:"",
    paths: {
        "jquery": "lib/jquery",
        'angularjs': 'lib/angular',
        'my_module': 'mymodule',
        'testmodule': 'scratch'
    },
    //sused for configuring incompatible modules
    shim: {
        'angularjs': {
           // deps: ['jquery'],
            exports:'angular'
        },
        'testmodule': {
            exports: 'scratchModule'
        }
    },
    deps: ['bootstrapAngular']
});

require(['jquery'], function ($) {
    $(document).ready(function () {
        $('p').append('test');
    });
});

require(['my_module'], function (mymodule) {
    //console.log(mymodule.color);
    //console.log(mymodule.size);
    //mymodule.log();
    mymodule();
});

require(['testmodule'], function (testmodule) {
    testmodule.func1();
});


