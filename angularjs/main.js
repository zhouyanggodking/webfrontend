require.config({
    paths: {
        'jquery': 'lib/jquery',
        'angular': 'lib/angular',
        'require': 'lib/require',
        'angularRoute': 'lib/angular-route'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': {
            exports: 'ngRoute',
            deps:['angular']
        }
    }
});

require(['angular', 'app'], function (angular) {
    angular.bootstrap(document, ['app']);
});