'use strict';
angular
  .module('webApp')
  .factory('UsuarioSvc', ['$http', '$q',function ($http,$q) {
    var defered = $q.defer();
    var promise = defered.promise;
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var service = this;

    var urlApi = 'http://localhost:58242/';

    service.getAll =  () => {
       $http.get(urlApi + 'api/usuarios')
        .then((response) => {
          defered.resolve(response);
        },
        (error) => {
          defered.reject(error);
        });

       return promise;
    };

    service.getById = function(id) {
      return $http.get(urlApi + 'api/usuarios/' + id);
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
      getAll: service.getAll,
      getById: service.getById,
      update: update
    };
  }]);
