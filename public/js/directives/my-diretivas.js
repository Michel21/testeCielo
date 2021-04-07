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

            const formatPrice = function(value) {
               return  new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(value)
            }
                
            $http.get('/totalControleLancamento')
             .success(function(result) {
                $scope.labels = ["Quantidade de Lancamentos", "Quantidade Remessas", "Valor Lancamentos"];
                $scope.data = [result.quantidadeLancamentos, result.quantidadeRemessas, result.valorLancamentos];
         })
        .error(function() {
            $scope.mensagem = "Serviço indisponivel, tente novamente";
        });
     };
        return ddo;
    });