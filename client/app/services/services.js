angular.module('memos.services', [])
.factory('Auth', function ($http, $location) {
	var signin = function (user) {
		return $http({
			method: 'POST',
			url: '/signin',
			data: user
		})
		.then(function (resp) {
			return resp;
		});
	};

	var signup = function (user) {
		return $http({
			method: 'POST',
			url: '/signup',
			data: user
		})
		.then(function (resp) {
			return resp;
		});
	};

	var signOut = function () {
		return $http({
			method: 'GET',
			url: '/signout'
		})
		.then(function(resp){
			return resp
		});
	};


	return {
		signin: signin,
		signup: signup,
		signOut: signOut
	};
})
.factory('Render',function($http, $location){
	var getAll = function(){
		return $http({
			method:'GET',
			url:'/memos'
		})
		.then(function(resp){
			return resp.data;
		})
	}

	return {
		getAll: getAll
	};
})
.factory('Write',function($http, $location){
	var addMemo = function(memo){
		return $http({
			method:'POST',
			url:'/write',
			data: memo
		})
		.then(function(resp){
			return resp;
		})
	}
	return {
		addMemo: addMemo
	};
})