// home controller

(function () {
	'use strict';

	// define home controller with dependencies
	angular.module('ccApp')
		.controller('HomeCtrl', ['$scope', '$location', homeCtrl]);

	function homeCtrl ($scope, $location) {
		console.log('homeCtrl check');
		$scope.goToCountry = function () {
			$location.path('/countries');
		};
	}

}());