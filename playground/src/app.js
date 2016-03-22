define(['ui.router', 'angular', 'state-config', 'views/app.views'],
    function (uiRouter, angular, stateConfig) {
        var app = angular.module('app', ['ui.router', 'app.views']);
        app.config(stateConfig);
        return app;
    }
);