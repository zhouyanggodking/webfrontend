define(['angular'], function (angular) {
    //console.log('\tload module app.views.home');
    angular.module('app.views.home', [])
        .controller('homeCtrl', ['$scope', function ($scope) {
            $scope.content = 'GodKing play ground home page';
        }]);
});