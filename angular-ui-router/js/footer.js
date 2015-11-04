define(['jquery'], function ($) {
    var fc = function ($scope) {
        console.log($('#footertokenfield').length);

        $('#footertokenfield').tokenfield();
    };

    fc.$inject = ['$scope'];
    return fc;
});