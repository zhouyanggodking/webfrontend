require.config({
    paths: {
        'jquery': 'lib/jquery',
        'angular': 'lib/angular'
    },

    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require(['angular', 'app'], function (angular) {
    angular.bootstrap(document, ['app']);
});