angular.module('memos.render', [])

.controller('RenderCtrl', function ($location, $scope, Render) {
	$scope.data = {};
	Render.getAll()
	.then(function(resp){
		console.log(resp);
		if(resp === "notAuth"){
			$location.path('/signin');
		}else{
			$scope.data.memos = resp;
		}
	})
});