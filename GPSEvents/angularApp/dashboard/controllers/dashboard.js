var GPSEventsApp = angular.module("GPSEventsApp");
    
GPSEventsApp.controller('DashboardCtl',
[
    '$route', '$routeParams', '$location',
    function DashboardCtl($route, $routeParams, $location) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
    }
]);
