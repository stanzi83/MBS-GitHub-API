var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService) {
  $scope.getUserData = function() {
    githubService.getUser($scope.searchText).then(function(res) {
      $scope.user = res.data;
      console.log(res.data);
    })
  }
});
   

// In our controller.js file create a controller named GitHubController
// Pass in githubService in the callback along with $scope
// Create a getUserData function on the scope object that calls the githubService's getUser function

// In the $scope.getUserData function append .then to the end of the githubService.getUser() function
// Within the .then() pass in res and set $scope.user = res.data