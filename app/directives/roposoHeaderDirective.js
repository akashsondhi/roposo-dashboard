'use strict';
angular.module('roposoApp.header', [])
    .controller('roposoHeaderCtrl', ['$scope', '$rootScope', 'DataStorageService', function ($scope, $rootScope, DataStorageService) {
        $scope.addCard = function () {
            DataStorageService.addCard();
        };
        $scope.toggleView = function () {
            DataStorageService.toggleGridView();
            $rootScope.$broadcast('VIEW_TOGGLE');
        };
    }])
    .directive('roposoHeader', function () {
        return {
            templateUrl: '../partials/roposoHeader.html',
            controller: 'roposoHeaderCtrl'
        };
    });