angular.module('memos', [
  'memos.services',
  'memos.auth',
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/signin', {
    templateUrl: 'app/auth/signin.html',
    controller: 'AuthController'
  })
  .when('/signup', {
    templateUrl: 'app/auth/signup.html',
    controller: 'AuthController'
  })
  .otherwise({redirectTo:'/'});
  })
  // .run(function ($location) {
  //   $location.path('/signin')
  // })