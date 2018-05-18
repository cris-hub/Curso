'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('UsuarioCtrl', ['UsuarioSvc', '$location', '$routeParams', '$window', function (UsuarioSvc,    $location, $routeParams) {

    //
    var vm = this;
    vm.usuarios = [];
    vm.usuarioEditar;
    vm.usuario = {
      id: undefined,
      nombre: '',
    };
    

    //logica

    vm.add =  () => {
      var valido = vm.usuarioValido(vm.usuario);
      if (valido) {
        UsuarioSvc.add(vm.usuario).then(function (response) {
          vm.usuarios.push(response.data);
        });

        return;
      }
      console.log('vacio');

    };

    

    vm.delete = function (idUser) {
      console.log(idUser);
      UsuarioSvc.userDelete(idUser).then(function(response){
        vm.usuarios.splice(response.data,1);
      });
        
      
    };

    if ($routeParams.id) {
      UsuarioSvc.getById($routeParams.id).then(function (response) {
        console.log(vm.usuarioEditar)
        vm.usuarioEditar = response.data;
        console.log(vm.usuarioEditar)
      });
    } 

    
    
    vm.init = function () {
      UsuarioSvc.getAll().then(function (response) {
        vm.usuarios = response.data;
      });
    };
    


    

    vm.update = function () {
      UsuarioSvc.update(vm.usuarioEditar).then(function () {
        $location.path('/usuarios');
      });
    };



    //metodos utiles
    vm.a = ''
    vm.b = ''
    vm.copiar = function () {
      if (vm.a) {
        var copiar = confirm('copiar texto')
        if (copiar) {
          vm.b = vm.a;
          vm.a = '';
        }
      }else if (vm.b){
        var copiar = confirm('copiar texto')
        if (copiar) {
          vm.a = vm.b;
          vm.b = '';
        }
      }
    }


    vm.usuarioValido = function (usuario) {
      if (!usuario) {
        return false;
      }
      return true;

    };


    vm.generarClases = function () {
      if (vm.usuario.nombre) {
        return ['btn', 'btn-primary'];
      }
      return ['btn', 'btn-default'];
    };

    vm.init();
  }]);
