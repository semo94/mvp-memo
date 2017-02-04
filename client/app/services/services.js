angular.module('memos.services', [])
.factory('Auth', function ($http, $location) {
	var signin = function (user) {
		return $http({
			method: 'POST',
			url: '/signin',
			data: user
		})
		.then(function (resp) {
			return resp.data.token;
		});
	};

	var signup = function (user) {
		return $http({
			method: 'POST',
			url: '/signup',
			data: user
		})
		.then(function (resp) {
			return resp.status;
		});
	};

	var signout = function () {
		$location.path('/signin');
	};


	return {
		signin: signin,
		signup: signup,
		signout: signout
	};
});