'use strict';

// Declare app level module which depends on views, and components
angular.module('roposoApp', [
  'ngStorage',
  'ngRoute',
  'roposoApp.header',
  'roposoApp.cards',
    'roposoApp.dashboard'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({
                redirectTo: 'dashboard'
            });
        }
       ])
    .service('DataStorageService', function ($localStorage) {
        return {
            getAllCardsInfo: function () {
                return $localStorage.allCards;
            },
            addCard: function () {
                var currId;
                if ($localStorage.allCards.length)
                    currId = $localStorage.allCards[0].id + 1;
                else
                    currId = 1;
                $localStorage.allCards.unshift({
                    isCardNew: true,
                    id: currId
                });
            },
            deleteCard: function (cardId) {
                for (var cardIndex = 0; cardIndex < $localStorage.allCards.length; cardIndex++) {
                    if ($localStorage.allCards[cardIndex].id === cardId)
                        $localStorage.allCards.splice(cardIndex, 1);
                }

            },
            updateCardTitle: function (cardTitle, cardId) {
                for (var cardIndex = 0; cardIndex < $localStorage.allCards.length; cardIndex++) {
                    if ($localStorage.allCards[cardIndex].id === cardId)
                        $localStorage.allCards[cardIndex].title = cardTitle;
                }

            },
            updateCardDesc: function (cardDesc, cardId) {
                for (var cardIndex = 0; cardIndex < $localStorage.allCards.length; cardIndex++) {
                    if ($localStorage.allCards[cardIndex].id === cardId) {
                        $localStorage.allCards[cardIndex].desc = cardDesc;
                        $localStorage.allCards[cardIndex].isCardNew = false;
                    }
                }


            },
            toggleGridView: function () {
                $localStorage.gridView = !$localStorage.gridView;
            },
            getGridView: function () {
                return $localStorage.gridView;
            }
        };

    });