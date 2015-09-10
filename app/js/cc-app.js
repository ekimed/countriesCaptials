(function () {
	angular.module('ccApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', routeConfig]);

	function routeConfig ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/countries', {
				templateUrl: 'views/country.html',
				controller: 'CountryCtrl'
			})
			.when('/countries/:country/captial', {
				templateUrl: 'views/detail.html',
				controller: 'DetailCtrl'
			})
			.otherwise({
				redirectTo: '/countries'
			});
	}

}());
