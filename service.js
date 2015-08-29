var app = angular.module('github-api');

app.service('githubService', function($http) {
  var id = "c86eefa4d47311e4c5d9";
  var sec = "8197a75433f61462540785cfbc6c3d02bc469f0c";
  var param = "?client_id=" + id + "&client_secret=" + sec;
  this.getUser = function(username) {
    return $http({
        method: 'GET',
        url: 'https://api.github.com/users/' + username + param
    })
  }
});

// In our service.js create a service named githubService and pass in the $http service into it's callback
// Write a get request named getUser
// Make it so that you can pass in a username
// the URL should be this: 'https://api.github.com/users/' + 


// Now when $scope.getUserData() is ran, we will be making a valid get request! Well, almost. 
// Our githubService.getUser() function needs to have something passed into it, so that it looks like this:

// githubService.getUser($scope.searchText)