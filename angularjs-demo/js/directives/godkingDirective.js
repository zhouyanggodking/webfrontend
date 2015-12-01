define([], function () {
    var fn = function () {
        var directiveDef = {
            restrict: 'E',
            template: '<div>directive-demo</div>',
            //templateUrl,
            replace: true,
            transclude: false,
            scope: false,
            controller: function ($scope, $element, $attrs, $transclude) { },
            //require: ^?direciveName
            link: function(scope, iElement, iAttr){}
        };

        return directiveDef;
    };

    fn.$inject = [];

    return fn;
});