define(['angular', 'angularRoute', 'config', 'controllers'], function (angular, angularRoute, config) {

    var app = angular.module('app', ['ngRoute', 'controllers']);
    app.config(config);
    //app.controller('contactsCtrl', contactsCtrl);
    //app.controller('companyCtrl', companyCtrl);
    return app;
});