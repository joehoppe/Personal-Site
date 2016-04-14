//version 0.1
//override the angular exception handler service. pop a toast to display error message
(function () {
    "use strict";
    angular.module("blogApp").factory("$exceptionHandler", function ($injector) {
        return function (exception) { //(exception, cause) {
            var $log = $injector.get("$log");
            $log.error.apply($log, arguments);

            var runtimeErrorFactory = $injector.get("runtimeErrorFactory");
            runtimeErrorFactory.error(exception.message);
        };
    });
})();