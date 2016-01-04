define([], function () {
    var func = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            });
    };

    func.$inject = ['$stateProvider', '$urlRouterProvider'];
    return func;
});