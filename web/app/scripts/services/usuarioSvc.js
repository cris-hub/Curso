'use strict';
angular
  .module('webApp')
  .factory('UsuarioSvc', ['$http', function ($http) {

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var service = this;

    var urlApi = 'http://localhost:58242/';

    service.get = function () {
      return $http.get(urlApi + 'api/usuarios');
    };

    service.add = function (usuario) {
      return $http.post(urlApi + 'api/usuarios', usuario, config);
    };

    var userDelete = function (id) {
      return $http.delete(urlApi + 'api/usuarios/' + id);
    };

    var update = function (usuario) {
      return $http.put(urlApi + 'api/usuarios/' + usuario.id, usuario, config);
    };

    return {
      userDelete: userDelete,
      add: service.add,
      get: service.get,
      update: update
    };
  }]);
