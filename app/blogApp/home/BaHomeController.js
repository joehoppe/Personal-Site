(function () {
    "use strict";

    angular
        .module("blogApp")
// ReSharper disable once FunctionsUsedBeforeDeclared
        .controller("BaHomeController", baHomeCtrl);

    // ReSharper disable once FunctionsUsedBeforeDeclared
    baHomeCtrl.$inject = []; //'$sanitize'

    function baHomeCtrl($http) { //$ngSanitize
        /* jshint validthis:true */
        var vm = this;

        function activate() {            
        }

        activate();
    }
})();