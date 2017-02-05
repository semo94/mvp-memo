angular.module('memos.render', [])

.controller('RenderCtrl', function ($scope, Render) {
  $scope.data = {};
  Render.getAll()
  .then(function(resp){
    $scope.data.memos = resp;
  })
});