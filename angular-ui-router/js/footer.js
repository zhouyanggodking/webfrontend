define(['jquery'], function ($) {
    var fc = function ($scope) {
        console.log($('#footertokenfield').length);

        $('#footertokenfield').tokenfield();

        $('#footerModal').on('show.bs.modal', function () {
            console.log('showing');
        });

    };

    fc.$inject = ['$scope'];
    return fc;
});