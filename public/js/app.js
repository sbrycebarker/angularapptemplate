angular.module('insertAppName',['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./views/main.html",
      controller: 'mainCtrl'
    }).state('vehicles', {
      url: '/vehicles',
      templateUrl: "../views/vehicles.html"
    })
})
