'use strict';
angular
  .module('webApp')
  .factory('UsuarioSvc', ['$http', function ($http) {
   var config = {
    headers : {
      'Content-Type': 'application/json'
    }
  };
   

    var urlApi = 'http://localhost:58242/';

    var get = function () {
      return $http.get(urlApi+'api/usuarios');
    };

    var add = function (usuario) {
      return $http.post(urlApi+'api/usuarios',usuario,config);
    };

    var userDelete = function (id){
      return $http.delete(urlApi+'api/usuarios/'+id);
    };
    return {
      userDelete : userDelete,
      add: add,
      get: get
    }; 
  }]);
