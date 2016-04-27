define(['angular', 'app.views.home'], function (angular) {
    console.log('loading module: app.views');
    angular.module('app.views',
        ['app.views.home']);
});