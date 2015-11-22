define(['jquery'], function ($) {
    var fc = function ($scope) {
        $('#tokenfield').tokenfield();
        $scope.reset = function () {
            $scope.signup.name = null;
        }

    };

    fc.$inject = ['$scope'];
    return fc;
});