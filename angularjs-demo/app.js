define(['ui.router', 'angular', 'config', 'js/controllers/service-demo', 'js/services/itemService'], function (uiRouter, angular, config, serviceDemoCtrl, itemService) {
    var app = angular.module('app', ['ui.router']);

    app.config(config);

    app.controller('serviceDemoCtrl', serviceDemoCtrl);

    //app.factory('Items', itemService);   //factory( name,  $getFunc())

    app.service('Items', itemService);     //service( name , contructor())
    return app;
});