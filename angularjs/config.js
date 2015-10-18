define([], function(){
    return function ($routeProvider) {
        $routeProvider.
            when('/contacts', {
                templateUrl: 'views/contacts.html',
                controller: 'contactsCtrl'
            }).
            when('/company', {
                templateUrl: 'views/company.html',
                controller: 'companyCtrl'
            }).
            otherwise({
                redirectTo: '/company'
            });
    }
});