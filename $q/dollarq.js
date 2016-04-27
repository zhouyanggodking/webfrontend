define(['angular'], function (angular) {
    angular.module('dollarq', [])
        .controller('dollarqCtrl', function ($q, $http) {

            getPersonAsync(function (response) {
                console.log(response);
            });


            function getPersonAsync(success, failed) {
                $http.get('data/person.json').then(success, failed);
            }
        });
});