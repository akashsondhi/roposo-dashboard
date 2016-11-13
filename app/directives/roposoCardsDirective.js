'use strict';
angular.module('roposoApp.cards',[])
    .directive('roposoCards', function () {
        return {
            templateUrl: '../partials/roposoCards.html',
            controller: 'roposoCardsCtrl',
        }
    })
    .controller('roposoCardsCtrl', ['$scope','$rootScope', 'DataStorageService', function ($scope, $rootScope, DataStorageService) {
        $scope.isEditable = [];
        $scope.isGridView = DataStorageService.getGridView();
        $scope.allCardsData = DataStorageService.getAllCardsInfo();
        $rootScope.$on('VIEW_TOGGLE',function(){
            $scope.isGridView = !$scope.isGridView;
        })
        
        $scope.deleteCard = function(index){
            DataStorageService.deleteCard(index);
        }
        $scope.enableEdit = function(index){
            $scope.isEditable[index] = true;
        }
        $scope.updateCardTitle = function(cardTitle, index){
            $scope.isEditable[index] = false;
            DataStorageService.updateCardTitle(cardTitle, index);
        }
        $scope.updateCardDesc = function(cardDesc, index){
            DataStorageService.updateCardDesc(cardDesc, index);
        }
}]);