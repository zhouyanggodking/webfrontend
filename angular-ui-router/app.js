define(['ui.router', 'angular', 'config', 'js/modal', 'js/footer'], function (uiRouter, angular, config, modalCtrl, footerCtrl) {
    var app = angular.module('app', ['ui.router']);

    app.config(config)

    app.controller('modalCtrl', modalCtrl)
        .controller('footerCtrl', footerCtrl);

    return app;
});