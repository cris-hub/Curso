'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', ['UsuarioSvc', '$location', function (UsuarioSvc, $location) {

    //
    var vm = this;
    vm.usuarios = [];
    vm.usuarioEditar;
    vm.usuario = {
      id: undefined,
      nombre: '',
    };


    //logica

    vm.add = function () {
      var valido = vm.usuarioValido(vm.usuario);
      if (valido) {
        UsuarioSvc.add(vm.usuario).then(function (response) {
          vm.usuarios.push(response.data);
        });

        return;
      }
      console.log('vacio');

    };

    vm.delete = function (id) {
      console.log(id);
      UsuarioSvc.userDelete(id).then(function () {

        $location.path('#');
      });

    };

    UsuarioSvc.get().then(function (response) {
      vm.usuarios = response.data;
    });

    vm.editar = function (id) {
      vm.usuarioEditar = vm.usuarios.find(function (usuario) {
        usuario.id === id;
        return usuario;
      });
      console.log(vm.usuarioEditar);
    };

    vm.update = function () {
      
     
      UsuarioSvc.update(vm.usuarioEditar).then(function (response) {
        
      });
    };



    //metodos utiles

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


  }]);
