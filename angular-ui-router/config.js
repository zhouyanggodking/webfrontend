define([], function () {
    return function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider

        //Home states and nested view
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('home.list', {
                url:'/list',
                templateUrl: 'views/home-list.html',
                controller: function ($scope) {
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                }
            })
             .state('home.paragraph', {
                 url: '/paragraph',
                 templateUrl: 'views/home-paragraph.html',
                 controller: function($scope){
                     $scope.text = "Godking paragraph";
                 }
             })
    };
});