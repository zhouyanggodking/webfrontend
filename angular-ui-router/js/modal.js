define(['jquery'], function ($) {
    var fc = function ($scope) {
        $('#tokenfield').tokenfield();
        $scope.reset = function () {
            $scope.signup.name = null;
        }

        //$scope.urls = ["www.baidu.com", "www.google.com", "tttttttttttttttttttttttttt"];

        $scope.urls = ["www.baidu.com", "www.baidk.com", "www.baidw.com"];

        $scope.remove = function (array, index) {
            array.splice(index, 1);
        }

    };

    fc.$inject = ['$scope'];
    return fc;
});