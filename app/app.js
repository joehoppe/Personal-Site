(function () {
    "use strict";

    angular.module("blogApp", [
        // Angular modules 
        "ngRoute",
        "ngSanitize",
        "ngMockE2E",

        // Custom modules 
        "errors-on-toast"

        // 3rd Party Modules
    ]).config([
        "$routeProvider", "$compileProvider",
        function ($routeProvider, $compileProvider) {
            $routeProvider.when("/Disclaimer",
            {
                title: "Disclaimer",
                tagLine: "Disclaimer",
                templateUrl: "app/blogApp/templates/disclaimer.html"
            });
            $routeProvider.when("/Feedback",
            {
                title: "Feedback",
                tagLine: "Feedback",
                templateUrl: "app/blogApp/templates/feedback.html"
            });
            $routeProvider.when("/AboutMe",
            {
                title: "About Me",
                tagLine: "About Me",
                templateUrl: "app/blogApp/templates/aboutMe.html"
            });
            $routeProvider.when("/",
            {
                title: "Home",
                templateUrl: "app/blogApp/templates/home.html"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
            
            var isLocalHost = window.location.hostname === 'localhost';
            
            if(isLocalHost){
                //improve perfromance
                $compileProvider.debugInfoEnabled(false);
                
                if(console){
                    console.log('Debug Info disabled because host is' + window.location.hostname);
                }    
            }
            
            //$locationProvider.html5Mode(true); //in terms of IE, only works with IE11+

            //TODO: fix
            //config.errorToastTheseURLs = ["localhost"];
        }
    ]);
})();