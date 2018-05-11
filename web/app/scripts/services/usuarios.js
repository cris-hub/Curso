'use strict'
angular.module('wepApp').
factory('UsuarioSvc', ['$http',function ($http) {
	var urlApi = 'http://localhost:58242/'
	
	var get = function(){
		$http.get(urlApi+'api/Usuarios');
	}
	return {
get : get
	};
}])