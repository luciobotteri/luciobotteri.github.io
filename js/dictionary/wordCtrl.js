angular.module('starter.controllers')

    .controller('WordCtrl', function ($scope, $stateParams, $ionicNavBarDelegate, DictionaryService) {
        var vm = this;
        vm.parola = DictionaryService.getWord($stateParams.wordSh)

        vm.swipe = function (direction) {
            if (direction == 'right') 
              $ionicNavBarDelegate.back();
          }
    });