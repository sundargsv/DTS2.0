'use strict';
var app = angular.module('dts2', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $routeProvider
    .when("/home", {
        templateUrl: "pages/home.html",
        controller: "homeController"
    })
    .when("/customerSearch", {
        templateUrl: "pages/customer/customerSearch.html",
        controller: "customerController"
    })
    .otherwise({
      redirectTo: "/home"
    });
     $locationProvider.hashPrefix('');
    //  $locationProvider.html5Mode({
    //     enabled : true,
    //     requireBase : false
    //  });
}]);

app.controller("homeController", function ($scope) {
    console.log('im here');
     $scope.header = "Home Page";
  });
