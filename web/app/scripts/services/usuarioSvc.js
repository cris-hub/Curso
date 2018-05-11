'use strict';
angular
  .module('webApp')
  .factory('UsuarioSvc', ['$http', function ($http) {

   
    var urlApi = 'http://localhost:58242/';

    var get = function () {
      return $http.get(urlApi+'api/usuarios');
    };

    return {
      get: get
    }; 
  }]);
