define([], function () {
    return function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider

        //Home states and nested view
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })

            .state('home.list', {
                url: '/list',
                templateUrl: 'views/home-list.html',
                controller: function ($scope) {
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                }
            })
             .state('home.paragraph', {
                 url: '/paragraph',
                 templateUrl: 'views/home-paragraph.html',
                 controller: function ($scope) {
                     $scope.text = "Godking paragraph";
                 }
             })
            .state('about', {
                url: '/about',
                views: {

                    // the main template will be placed here (relatively named)
                    '': { templateUrl: 'views/about.html' },

                    // the child views will be defined here (absolutely named)
                    'columnOne@about': { template: 'Look I am a column!' },

                    // for column two, we'll define a separate controller 
                    'columnTwo@about': {
                        templateUrl: 'views/table-data.html',
                        controller: function ($scope) {

                            $scope.message = 'test';

                            $scope.scotches = [
                                {
                                    name: 'Macallan 12',
                                    price: 50
                                },
                                {
                                    name: 'Chivas Regal Royal Salute',
                                    price: 10000
                                },
                                {
                                    name: 'Glenfiddich 1937',
                                    price: 20000
                                }
                            ];

                        }//end controller
                    }
                }

            });
    };
});