'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', ['UsuarioSvc', function (UsuarioSvc) {
    
  	//
    var vm = this;
    vm.usuarios = [];
    vm.usuario = {
    	
    	nombre : '',
    };
    //logica

    vm.add = function(){
    	var valido = vm.usuarioValido(vm.usuario);
    	if (valido) {
    	vm.usuarios.push(vm.usuario);
    	return;
    	}

    	console.log('vacio');
    	
    };

	UsuarioSvc.get().then(function (response) {
		vm.usuarios = response.data;
	});

	//metodos utiles

	vm.usuarioValido = function(usuario){
 		if (!usuario) {
 			return false;
 		}
			return true;

 	};
    
	vm.generarClases = function(){
	if (vm.usuario.nombre) {
		return ['btn','btn-primary'];
	}
	return ['btn','btn-default'];
	};


  }]);
