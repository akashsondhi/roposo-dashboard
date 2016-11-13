'use strict';

angular.module('roposoApp.dashboard', ['ngRoute'])

.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/dashboard', {
        templateUrl: './dashboard/dashboard.html'
    })
}]);