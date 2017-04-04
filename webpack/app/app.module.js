define(['angular'], function (angular) {
    angular.module('appModule', [])
        .controller('testCtrl', function ($scope) {
            $scope.name = 'Godking';
        });
});