define(['angular', 'angularRoute', 'angularAMD','bootstrap'], function(angular, ngRoute, angularAMD) {
    "use strict";

    var app = angular.module('mainApp', ['ui.bootstrap','ngRoute']);
    
    app.controller('DropdownCtrl', function($scope) {
 
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});

    app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/view1', angularAMD.route({
            templateUrl : 'views/view1.html',
            controller : 'ctrl1',
            controllerUrl : 'controller/ctrl1'
        })).when('/view2', angularAMD.route({
            templateUrl : 'views/view2.html',
            controller : 'ctrl2',
            controllerUrl : 'controller/ctrl2'
        })).otherwise({
            redirectTo : '/'
        });
    }]);

    return angularAMD.bootstrap(app);

}); 