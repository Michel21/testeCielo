angular.module('myDiretivas', [])
	.directive('myPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;

		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/my-painel.html';

		return ddo;
	})
    

    .directive('myGrafic', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.templateUrl = 'js/directives/my-grafic.html';
        ddo.controller = function($scope, $http) {
            $http.get('/totalControleLancamento')
             .success(function(result) {
                $scope.labels = ["Quantida de Lancamentos", "Quantidade Remessas", "Valor Lancamentos"];
                $scope.data = [result.quantidadeLancamentos, result.quantidadeRemessas, result.valorLancamentos];
         })
        .error(function(erro) {
            console.log(erro);
        });
     };
        return ddo;
    });