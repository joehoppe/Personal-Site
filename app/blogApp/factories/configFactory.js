(function () {
    'use strict';

    angular
        .module('blogApp')
        .service('configFactory', ConfigFactory);

    ConfigFactory.$inject = [];

    function ConfigFactory() {
        this.getCurrentYear = getCurrentYear;

        function getCurrentYear() {
            return new Date().getFullYear();
        }
    }
})();