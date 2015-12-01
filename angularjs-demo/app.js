define(['ui.router', 'angular', 'config', 'js/controllers/service-demo', 'js/services/itemService', 'js/controllers/directive-demo', 'js/directives/godkingDirective'], function (uiRouter, angular, config, serviceDemoCtrl, itemService, directiveDemoCtrl, godkingDirective) {
    var app = angular.module('app', ['ui.router']);

    app.config(config);

    app.controller('serviceDemoCtrl', serviceDemoCtrl)
        .controller('directiveDemoCtrl', directiveDemoCtrl)
        ;

    //app.factory('Items', itemService);   //factory( name,  $getFunc())

    app.service('Items', itemService);     //service( name , contructor())


    ///////////////directives////////////////////

    app.directive('godkingDirective', godkingDirective);

    ///////////////directives ends//////////////
    return app;
});