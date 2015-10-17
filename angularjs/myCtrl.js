define(['angular'], function (angular) {
    return function ($scope) {
        console.log('in myCtrl');
        $scope.name = 'king';
        $scope.person = {
            firstName: 'god',
            lastName: 'king',
        };
        $scope.getName = function () {
            return $scope.person.firstName + ', ' + $scope.person.lastName;
        };
    }
});