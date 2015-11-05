require.config({
    paths: {
        'angular': 'lib/angular',
        'require': 'lib/require',
        'ui.router': 'lib/angular-ui-router',
        'jquery': 'lib/jquery',
        'bootstrap': 'lib/bootstrap',
        'tokenfield': 'lib/bootstrap-tokenfield.min',
        'uivalidator':'lib/validator.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.router': {
            deps:['angular']
        },
        'bootstrap': ['jquery'],
        'tokenfield': ['bootstrap'],
        'uivalidator':['jquery']
    }

});

require(['angular','bootstrap', 'app', 'tokenfield', 'uivalidator'], function (angular) {
    angular.bootstrap(document, ['app']);
});