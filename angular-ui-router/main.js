require.config({
    paths: {
        'angular': 'lib/angular',
        'require': 'lib/require',
        'ui.router': 'lib/angular-ui-router',
        'jquery': 'lib/jquery',
        'bootstrap': 'lib/bootstrap',
        'tokenfield': 'lib/bootstrap-tokenfield.min',
        'uivalidator': 'lib/validator.min',
        'duallistbox': 'lib/jquery.bootstrap-duallistbox'
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
        'uivalidator': ['jquery'],
        'duallistbox': ['jquery']
    }

});

require(['angular', 'bootstrap', 'app', 'tokenfield', 'uivalidator', 'duallistbox'], function (angular) {
    angular.bootstrap(document, ['app']);
});