define(['angular', 'controllers/companyCtrl', 'controllers/contactsCtrl'], function (angular, companyCtrl, contactsCtrl) {
    var ctrlModule = angular.module('controllers', []);

    ctrlModule.controller('companyCtrl', companyCtrl);
    ctrlModule.controller('contactsCtrl', contactsCtrl);

    return ctrlModule;
});