define(['angular', 'myCtrl'], function (angular, myCtrl) {
    var app = angular.module('app', []);
    app.controller('myCtrl', myCtrl);
    return app;
})