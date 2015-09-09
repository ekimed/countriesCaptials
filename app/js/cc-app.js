angular.module('ccApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/countries', {
			templateUrl: 'views/country.html',
			controller: "CountryCtrl"
		})
		.when('/capitals', {
			templateUrl: 'views/capital.html',
			controller: "CapitalCtrl"
		});
	}]);