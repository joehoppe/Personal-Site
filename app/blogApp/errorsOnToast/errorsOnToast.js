//version 0.1
(function () {
    "use strict";
    angular.module("errors-on-toast", [
    // Angular modules         
    // Custom modules 
    // 3rd Party Modules
        "toastr"
    ]);
})();
(function () {
    "use strict";
    angular
        .module("errors-on-toast")
        .factory("runtimeErrorFactory", runtimeErrorFactory);

    runtimeErrorFactory.$inject = ["$location", "toastr", "configFactory"];

    function runtimeErrorFactory($location, toastr, configFactory) {
        var service = {
            error: error
        };
        var host = $location.host();
        var allowedUrls = [];
        //allowedUrls = null - works on all
        //allowedUrls = [] - works on all
        //allowedUrls = [a, b] - works on a b
        if (typeof configFactory.errorToastTheseURLs !== 'undefined' && configFactory.errorToastTheseURLs.length !== null && configFactory.errorToastTheseURLs.length > 0) {
            allowedUrls = configFactory.errorToastTheseURLs;
        }
        function isUrlAllowed() {
            return allowedUrls.length === 0 ||
                allowedUrls.indexOf(host) !== -1;
        }
        function error(message) {
            if (isUrlAllowed(host) === true) {
                toastr.error(message, "Error");
            }
        }
        return service;
    }
})();