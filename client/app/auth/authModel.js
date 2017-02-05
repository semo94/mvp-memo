angular.module('memos.auth', [])

.controller('AuthController', function ($scope, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
    .then(function() {
      $location.path('/memos');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
    .then(function (resp) {
      console.log(resp);
      if(resp.data === "this user is already existed"){
        $scope.validate = resp.data;
      }else{
        $location.path('/memos');
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
