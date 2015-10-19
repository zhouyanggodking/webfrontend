require.config({
    paths: {
        'angular': 'lib/angular',
        'require': 'lib/require',
        'ui.router': 'lib/angular-ui-router',
        'jquery':'lib/jquery'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.router': {
            deps:['angular']
        }
    }

});

require(['angular', 'app'], function (angular) {
    angular.bootstrap(document, ['app']);
});