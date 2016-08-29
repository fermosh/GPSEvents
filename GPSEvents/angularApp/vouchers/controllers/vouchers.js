var GPSEventsApp = angular.module("GPSEventsApp");
    
var VouchersCtl = GPSEventsApp.controller('VouchersCtl',
[
    '$route', '$routeParams', '$location',
    function ($route, $routeParams, $location) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
    }
]);
