// home controller

(function () {
	'use strict';

	// define home controller with dependencies
	angular.module('ccApp')
		.controller('HomeCtrl', ['$scope', homeCtrl]);

	function homeCtrl ($scope) {
		console.log('homeCtrl check');
	}

}());