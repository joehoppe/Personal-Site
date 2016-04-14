(function () {
    'use strict';

    angular
        .module('blogApp')
        .controller('BaFeedbackController', feedbackCtrl);

    feedbackCtrl.$inject = ['$log', '$scope'];

    function feedbackCtrl($log, $scope) {
        /* jshint validthis:true */
        var vm = this;

        $scope.submitForm = function () {
            vm.showStatus = false;
            var ajaxCallStatus = false;

            if ($scope.feedback.$valid === false) {
                return;
            }

            if (ajaxCallStatus) {
                vm.message = "Thank you for your feedback!";
            } else {
                vm.message = "An error has occurred!";
            }

            vm.showStatus = true;
        };

        activate();

        function activate() { }

        //asdf use to throw error
    }
})();
