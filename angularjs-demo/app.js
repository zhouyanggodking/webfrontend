define(['ui.router', 'angular', 'config', 'js/controllers/service-demo', 'js/services/itemService', 'js/controllers/directive-demo'], function (uiRouter, angular, config, serviceDemoCtrl, itemService, directiveDemoCtrl) {
    var app = angular.module('app', ['ui.router']);

    app.config(config);

    app.controller('serviceDemoCtrl', serviceDemoCtrl)
        .controller('directiveDemoCtrl', directiveDemoCtrl)
        ;

    //app.factory('Items', itemService);   //factory( name,  $getFunc())

    app.service('Items', itemService);     //service( name , contructor())
    return app;
});