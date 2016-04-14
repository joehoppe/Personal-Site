(function () {
    'use strict';

    angular
        .module('blogApp')
        .directive('baLatestCards', latestCards);

    latestCards.$inject = ['$window', '$http'];

    function latestCards($window, $http) {
        // Usage:
        //     <data-latest-cards></data-latest-cards>
        // Creates:
        // 
        var directive = {
            restrict: 'E',
            templateUrl: "app/blogApp/templates/baLatestCards.html",
            controller: function ($scope) {
                var vm = this;
                loadEntries(vm);
            }
            , controllerAs: 'latestCardsVm'
        };
        return directive;

        function loadEntries(vm) {
            $http.get("api/blogEntries").then(function (response) {
                vm.entries = response.data;
            });
        }
    }

})();