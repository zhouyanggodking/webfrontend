define([], function () {
    var fn = function ($scope) {
        $scope.title = "Directive Demo";
    };

    fn.$inject = ['$scope'];
    return fn;
});