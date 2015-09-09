// country page controller
(function () {
	'use strict';

	// define country controller
	angular.module('ccApp')
		.controller('CountryCtrl', ['$scope', '$http', '$window', countryCtrl]);

	function countryXmlParser (data) {
		// name, country code, capital, area in km2, popl, continent
		var res = [];
		var headers = {
			name: "countryName",
			code: "countryCode",
			capital: "capital",
			area: "areaInSqKm",
			pop: "population",
			continent: "contintentName"
		};
		var temp;

		for (var i = 0; i < data.length; i++) {
			temp = {};
			for (var key in headers) {
				if (data[i].getElementsByTagName(headers[key]).length && data[i].getElementsByTagName(headers[key])[0].childNodes.length) {
					temp[headers[key]] = data[i].getElementsByTagName(headers[key])[0].childNodes[0].nodeValue;
				}
			}

			res.push(temp);
		}

		return res;


	}

	function countryCtrl ($scope, $http, $window) {
		var parser, xmlDoc, countriesArray;
		var url = 'http://api.geonames.org/countryInfo?username=ekimed';
		// get countries
		$http({
			cache: true,
			url: url,
			method: 'GET'
		}).success(function (res) {

				// parse the XML data
				if ($window.DOMParser) {
					parser = new $window.DOMParser();
					xmlDoc = parser.parseFromString(res, 'text/xml');
				} else if ($window.ActiveXObject) {
					// IE
					xmlDoc = new $window.ActiveXObject('Microsoft.XMLDOM');
					xmlDoc.async = false;
					xmlDoc.loadXml(res);
				} else {
					throw new Error('Cannot parse XML data');
				}
				countriesArray = countryXmlParser(xmlDoc.getElementsByTagName('country'));
				$scope.countries = countriesArray;
			}
			
		);
	}
}());