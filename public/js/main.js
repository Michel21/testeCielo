angular.module('app', ['myDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'accountServicos','chart.js'])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'AccountController'
		});

		$routeProvider.otherwise({redirectTo: '/home'});

	});