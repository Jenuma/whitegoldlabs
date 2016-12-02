(function() {
    "use strict";
    
    angular
        .module("wgl.test", [])
        .controller("TestController", TestController);
    
    TestController.$inject = ["$http"];
    
    function TestController($http) {
        var vm = this;

        vm.getTestData = function() {
            $http.get("/api/test")
                .then(function(response) {
                    vm.test = response.data[0].attr1;
                },
                function(response) {
                    
                });
        };
        
        vm.getTestData();
    }
})();
