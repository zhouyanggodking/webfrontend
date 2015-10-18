define([], function () {
    return function ($scope) {
        //console.log('in myCtrl');
        $scope.name = 'king';
        $scope.person = {
            firstName: 'god',
            lastName: 'king',
        };
        $scope.getName = function () {
            return $scope.person.firstName + ', ' + $scope.person.lastName;
        };
        $scope.list = [
            { name: 'godking', country: 'China' },
            { name: 'oceansky', country: 'Espanol' },
            { name: 'sawyer', country: 'America' },
            { name: 'Hugo', country: 'England' },
        ];
    }
});