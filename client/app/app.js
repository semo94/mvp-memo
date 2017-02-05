angular.module('memos', [
  'memos.services',
  'memos.auth',
  'memos.render',
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
  .when('/memos', {
    templateUrl: 'app/memo/render.html',
    controller: 'RenderCtrl'
  })
  .otherwise({redirectTo:'/'});
})
  // .run(function ($location) {
  //   $location.path('/signin')
  // })