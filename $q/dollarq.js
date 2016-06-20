define(['angular'], function (angular) {
    angular.module('dollarq', [])
        .controller('dollarqCtrl', function ($q, $http) {

            var personPromise = getPersonAsync();
            personPromise.then(function (data) {
                console.log(data);
            }, function (data) {
                console.log(data);
            });

            var personPromise2 = personPromise.then(function (data) {
                return data.age + 10;
            });

            personPromise2.then(function (age) {
                console.log(age);
            });


            personPromise.catch(function (data) {
                console.log('In catch: ' + data);
            });

            personPromise.finally(function () {
                console.log('In finally: NO PARAMS');
            });


            function getPersonAsync() {
                var deferred = $q.defer();
                $http.get('data/person.json').then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response.statusText);
                });

                return deferred.promise;
            }
        });
});