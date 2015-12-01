define([], function () {
    var func = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('service-demo', {
                url: '/service-demo',
                templateUrl: 'views/service-demo.html',
                controller: 'serviceDemoCtrl'
            })
            .state('directive-demo', {
                url: '/directive-demo',
                templateUrl: 'views/directive-demo.html',
                controller:'directiveDemoCtrl'
            })
        ;
    };

    func.$inject = ['$stateProvider', '$urlRouterProvider'];
    return func;
});