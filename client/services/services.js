angular.module('memos.services', [])
.factory('Auth', function ($http, $location, $window) {
	var signin = function (user) {
		return $http({
			method: 'POST',
			url: '/api/users/signin',
			data: user
		})
		.then(function (resp) {
			return resp.data.token;
		});
	};

	var signup = function (user) {
		return $http({
			method: 'POST',
			url: '/api/users/signup',
			data: user
		})
		.then(function (resp) {
			return resp.data.token;
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