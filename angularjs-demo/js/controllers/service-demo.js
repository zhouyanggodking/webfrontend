define([], function () {
    var fc = function ($scope, Items) {        
        $scope.items = Items.query();
    };
    fc.$inject = ['$scope', 'Items'];
    return fc;
});