angular.module('memos.write', [])

.controller('WriteCtrl', function ($scope, $location, Write) {
	$scope.data = {};
	$scope.addMemo = function(){
		Write.addMemo($scope.data)
		.then(function(resp){
			$location.path('/memos');
		})
	}
});