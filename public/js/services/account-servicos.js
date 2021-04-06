angular.module('accountServicos', ['ngResource'])
	.factory('accountResources', function($resource) {
		return $resource('/listaControleLancamento', null, {
			'get' : { 
				method: 'GET'
			}
		});
	})
