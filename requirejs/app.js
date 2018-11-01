//used to bootstrap angularjs, so no ng-* attribs in your html

define(['angularjs'], function (angularjs) {
    return angularjs.module('app', []);
});