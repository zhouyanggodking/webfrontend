require.config({
    paths: {
        'angular': './node_modules/angular/angular',
        'jquery': './node_modules/jquery/dist/jquery',
        'treeGrid': './Grid/GridE'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require(['angular', './appModule', 'jquery'], function (angular) {
    angular.bootstrap(document, ['app']);
});
