angular.module('memos.write', [])

.controller('WriteCtrl', function ($scope, Write) {
	$scope.memo = {};
	$scope.addMemo = function(){
		Write.addOne($scope.memo)
		.then(function(resp){
			$location.path('/memos');
		})
	}
});