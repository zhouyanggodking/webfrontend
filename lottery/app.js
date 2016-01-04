define(['ui.router', 'angular', 'config', 'js/controller/home-controller'], function (uiRouter, angular, config, homeCtrl) {
    var app = angular.module('app', ['ui.router']);

    app.config(config);
    app.controller('homeCtrl', homeCtrl);
    return app;
});