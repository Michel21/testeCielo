angular.module('app').controller('AccountController',  function($scope, accountResources) {
	
	$scope.accounts = [];
	$scope.mensagem = '';

	accountResources.query(function(result) {
		$scope.accounts = result;
	}, function() {
		$scope.mensagem = "Serviço indisponivel, tente novamente";
	});
});