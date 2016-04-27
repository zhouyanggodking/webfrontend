require.config({
    paths: {
        'jquery': 'libs/jquery/jquery',
        'angular': 'libs/angularjs/angular',
        'bootstrap': 'libs/bootstrap/bootstrap',
        'ui.router': 'libs/angular-ui-router/angular-ui-router',


        'state-config': 'configs/state-config',

        //views
        'app.views': 'views/app.views',
        'app.views.home': 'views/home/home'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.router': {
            deps: ['angular']
        },
        'bootstrap': ['jquery']
    }

});

require(['angular', 'app'], function (angular) {
    angular.bootstrap(document, ['app']);
});