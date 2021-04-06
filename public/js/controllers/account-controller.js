angular.module('app').controller('AccountController',  function($scope, accountResources) {
	
	$scope.accounts = [];
	
	accountResources.query(function(result) {
		$scope.accounts = result;
		console.log(result);
	}, function(erro) {
		console.log(erro);
	});
});