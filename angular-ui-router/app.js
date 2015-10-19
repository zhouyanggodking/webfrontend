define(['ui.router', 'angular', 'config'], function (uiRouter, angular, config) {
    var app = angular.module('app', ['ui.router']);

    app.config(config)

    return app;
});