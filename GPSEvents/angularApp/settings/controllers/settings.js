var GPSEventsApp = angular.module("GPSEventsApp");

var SettingsCtl = GPSEventsApp.controller('SettingsCtl',
[
    '$route', '$routeParams', '$location', '$sce', '$http',
    function($route, $routeParams, $location, $sce, $http) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
        ctl.showForm = false;
        ctl.originalSettings = {
            siGasEndPoint: "http://www.sigas.com/webService",
            GPSMargin: 300
        };
        ctl.theSettings = angular.copy(ctl.originalSettings);

        ctl.Cancel = function () {
            ctl.theSettings = angular.copy(ctl.originalSettings);
        }
        ctl.SaveSettings = function() {
            ctl.originalSettings = angular.copy(ctl.theSettings);
        }
    }
]);
