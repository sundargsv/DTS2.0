//--Start CustomerFactory--//

'use strict';
angular.module('dts2').factory('CustomerService', ['$http', '$q', function($http, $q){
    
    // var REST_SERVICE_URI = 'http://192.168.1.197:8084/DTSAPI/webapi/DTS/CustomerSearch';

    var REST_SERVICE_URI = 'jsons/customer.json';
     var factory = {
                fetchAllCustomer: fetchAllCustomer
            };
         
            return factory;
            
            function fetchAllCustomer() {
                var deferred = $q.defer();
                $http.get(REST_SERVICE_URI)
                    .then(
                    function (response) {
                        /*console.log(response.data);*/
                        deferred.resolve(response.data);

                    },
                    function(errResponse){
                        console.error('Error while fetching Customer Details');
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }
}]);

//--End CustomerFactory--//
