define([], function () {
    var fn = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider

        //Home states and nested view
            .state('home', {
                url: '/home',
                templateUrl: 'views/home/home.html',
                controller: 'homeCtrl'
            })
            .state('about', {
                url: '/about'
            })
        ;
    };

    fn.$inject = ['$stateProvider', '$urlRouterProvider'];
    return fn;
});