define(['jquery'], function ($) {
    var fc = function ($scope) {
        $('#tokenfield').tokenfield();
    };

    fc.$inject = ['$scope'];
    return fc;
});