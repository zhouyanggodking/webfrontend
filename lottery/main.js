require.config({
    paths: {
        'angular': 'lib/angular',
        'require': 'lib/require',
        'ui.router': 'lib/angular-ui-router',
        'jquery': 'lib/jquery',
        'bootstrap': 'lib/bootstrap',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.router': {
            deps:['angular']
        },
        'bootstrap': ['jquery']
    }

});

require(['angular','bootstrap', 'app'], function (angular) {
    angular.bootstrap(document, ['app']);
});