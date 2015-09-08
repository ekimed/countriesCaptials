angular.module('ccApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		});
	}]);