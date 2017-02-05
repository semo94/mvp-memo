angular.module('memos.render', [])

.controller('RenderCtrl', function ($location, $scope, Render) {
	$scope.data = {};
	Render.getAll()
	.then(function(resp){
		if(resp === "notAuth"){
			$location.path('/signin');
		}else{
			$scope.data.memos = resp;
		}
	})
});