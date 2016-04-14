(function () {
    'use strict';

    angular.module('blogApp')
        .run([
        '$location', '$rootScope', '$http', '$httpBackend', 'configFactory',
        function ($location, $rootScope, $http, $httpBackend, configFactory) {
            $httpBackend.whenGET('api/blogEntries').respond(function (method, url, data) {
               return [200, mocks.blogEntries(), {}];
            });

            $httpBackend.whenGET(/app\/blogApp\/templates\/.*/).passThrough();
            
            $rootScope.isLocalHost = ($location.host() === 'localhost');

            $rootScope.author = $rootScope.isLocalHost ? '[Privacy Filter]' : 'Joe Hoppe';
            $rootScope.year = configFactory.getCurrentYear();

            $rootScope.$on('$routeChangeSuccess', function (event, current) {
                //handle redirect - undefined title
                if (typeof current.$$route === 'undefined') {
                    return;
                }

                $rootScope.title = $rootScope.author + " - " + current.$$route.title;

                var tagLineTemp = current.$$route.tagLine;
                if (tagLineTemp !== undefined && tagLineTemp !== '') {
                    $rootScope.tagLine = tagLineTemp;
                } else {
                    $rootScope.tagLine = '';
                }
            });
        }
        ]);
})();