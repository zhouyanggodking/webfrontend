define(['jquery', 'angular', 'uivalidator'], function ($) {
    var fc = function ($scope) {
        console.log($('#footertokenfield').length);

        $('#footertokenfield').tokenfield();

        $scope.signup = {
            //name:"king"
        };

        console.log($scope)

        $('#footerModal').on('shown.bs.modal', function () {
            console.log('showing');

            

            console.log($scope.signup.name);

            //$scope.signup.name = 'kkkkk';

            //console.log($scope.signup.name);
        });

  

        $('#footerModal').on('hidden.bs.modal', function () {
            console.log('hide');
            //console.log($scope.signup.name);

            //console.log($scope);

            //$('#name').val('');

            //$('#footerModal').removeData('bs.modal');

            //$scope.signup.name = '';

            //console.log($scope.signup.name);

            $scope.signup = {};

        });

        
    };

    fc.$inject = ['$scope'];
    return fc;
});