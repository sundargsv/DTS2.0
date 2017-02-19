'use strict';
angular.module('dts2').controller('customerController', ['$scope', 'CustomerService', function($scope, CustomerService) {
    $scope.header = "Customer Search";
    $scope.customer={id:null,name:'',phoneNumber:'',email:''};
    $scope.customers = [];


    fetchAllCustomer();


    function fetchAllCustomer(){
        CustomerService.fetchAllCustomer()
            .then(
            function(d) {
               /* console.log(d);*/
                $scope.customers = d;


            },
            function(errResponse){
                console.error('Error while fetching customers');
            }
        );
    }


}]);
