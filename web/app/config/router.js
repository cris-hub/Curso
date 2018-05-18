'use strict';

angular
  .module('webApp')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'vm'
      })
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'vm'
      })
      .when('/usuario/:id/editar', {
        templateUrl: 'views/editar.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  }]);
