define(['ui.router', 'angular', 'config', 'js/modal', 'js/footer', 'js/duallistbox'], function (uiRouter, angular, config, modalCtrl, footerCtrl, duallistboxCtrl) {
    var app = angular.module('app', ['ui.router']);

    app.config(config)

    app.controller('modalCtrl', modalCtrl)
        .controller('footerCtrl', footerCtrl)
        .controller('duallistboxCtrl', duallistboxCtrl);

    return app;
});