angular.module('memos', [
  'memos.services',
  'memos.auth',
  'memos.render',
  'memos.write',
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
  .when('/signout', {
    templateUrl: 'app/auth/signin.html',
    controller: 'AuthController'
  })
  .when('/memos', {
    templateUrl: 'app/memo/render.html',
    controller: 'RenderCtrl'
  })
  .when('/write', {
    templateUrl: 'app/write/write.html',
    controller: 'WriteCtrl'
  })
  .otherwise({redirectTo:'/memos'});
})
  // .run(function (RenderCtrl) {
  //   RenderCtrl.getAll();
  // })