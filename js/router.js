define(function (require) {

    "use strict";

    var angular     = require('angular'),
        ngRoute     = require('ngRoute'),
        mainApp = angular.module('mainApp', ['ngRoute']);
    
    mainApp.config(['$routeProvider',function($routeProvider) {
        $routeProvider.
        when('/view1', {
            templateUrl: 'views/view1.html',
            controller: 'ctrl1'
        }).
        when('/view2', {
            templateUrl: 'views/view2.html',
            controller: 'ctrl2'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
    
    return mainApp;
    

});