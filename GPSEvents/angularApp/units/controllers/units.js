var GPSEventsApp = angular.module("GPSEventsApp");
    
GPSEventsApp.controller('UnitsCtl',
[
    '$route', '$routeParams', '$location',
    function UnitsCtl($route, $routeParams, $location) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;

    }
]);
