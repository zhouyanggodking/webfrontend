define([], function () {
    var fn = function () {
        var directiveDef = {
            restrict: 'E',
            template: '<div>directive - {{directiveScopeAttr}} <span ></span></div>',
            //templateUrl,
            replace: true,
            //transclude: false,
            scope: {
                directiveScopeAttr: '@'
            },
            controller: function ($scope, $element, $attrs, $transclude) {
                $scope.directiveScopeAttr = "godking";
            },
            //require: ^?direciveName
            //link: function(scope, iElement, iAttr){}
        };

        return directiveDef;
    };

    fn.$inject = [];

    return fn;
});