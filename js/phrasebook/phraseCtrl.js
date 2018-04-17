angular.module('starter.controllers')

    .controller('PhraseCtrl', function ($scope, $stateParams, PhrasebookService) {
        var vm = this;
        vm.frase = PhrasebookService.getPhrase($stateParams.phraseId)
        
        vm.swipe = function (direction) {
            if (direction == 'right') 
              $ionicNavBarDelegate.back();
          }
    });