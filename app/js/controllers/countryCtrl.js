// country page controller
(function () {
	'use strict';

	// define country controller
	angular.module('ccApp')
		.controller('CountryCtrl', ['$scope', countryCtrl]);

	function countryCtrl ($scope) {
		console.log('countryCtrl check');
	}
}());