require.config({

    paths: {
        app: 'js',
        angular: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular',
        angularRoute:'//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular-route',
        
    },
    
    shim: {
        'angular': {
            exports: 'angular'
        },
        angularRoute: ['angular']
    }

});

require(['angular','angularRoute'], function (angular) {
    "use strict";
        
    var mainApp = angular.module('mainApp', ['ngRoute']);
    
    mainApp.config(['$routeProvider',function($routeProvider) {
        $routeProvider.
        when('/view1', {
            templateUrl: 'tpl/view1.html',
            //controller: 'ctrl1'
        }).
        when('/view2', {
            templateUrl: 'tpl/view2.html',
            //controller: 'ctrl2'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
    
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['mainApp']);
    });

});