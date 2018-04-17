angular.module('starter.controllers')

    .controller('StoryCtrl', function ($scope, $stateParams, StoryService) {
        var vm = this;
        vm.storia = StoryService.getStory($stateParams.storyTitle)
        
        vm.swipe = function (direction) {
            if (direction == 'right') 
              $ionicNavBarDelegate.back();
          }
    });