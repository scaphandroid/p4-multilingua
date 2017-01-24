angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {

  $scope.signIn = function() {
  $state.go('tab.courses');
  }
})

.controller('CoursesCtrl', function($scope, Courses) {

  $scope.courses = Courses.get('ESP');
  console.log($scope.courses);
})

.controller('PlanningCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ContactsCtrl', function($scope) {})

.controller('ParametersCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});