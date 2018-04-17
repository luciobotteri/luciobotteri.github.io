angular.module('starter.controllers')

    .controller('DictionaryCtrl', function ($scope, $state, DictionaryService) {
        var vm = this
        if (!vm.dictionary) {
            vm.dictionary = DictionaryService.getDictionary()
        }

        vm.clickOnWord = function (word) {
            $state.go('app.word', { wordSh: word })
        }

        vm.doRefresh = function() {
            // $http.get('/new-items')
            //  .success(function(newItems) {
            //    $scope.items = newItems;
            //  })
            //  .finally(function() {
            //    // Stop the ion-refresher from spinning
            //    $scope.$broadcast('scroll.refreshComplete');
            //  });
            $scope.$broadcast('scroll.refreshComplete')
          };
    });