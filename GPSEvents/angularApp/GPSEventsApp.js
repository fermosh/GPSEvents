var GPSEventsApp = angular.module("GPSEventsApp", ['ngRoute']);

GPSEventsApp.controller('MainController',
    function ($scope, $route, $routeParams, $location) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
    });


GPSEventsApp.config(['$routeProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', {
              templateUrl: '/angularApp/dashboard/templates/_dashboard.html',
              controller: 'DashboardCtl',
              controllerAs: 'dashboard'
          })
          .when('/Units', {
              templateUrl: '/angularApp/units/templates/_units.html',
              controller: 'UnitsCtl',
              controllerAs: 'units'
          })
          .when('/Book/:bookId/ch/:chapterId', {
              templateUrl: 'chapter.html',
              controller: 'ChapterCtrl',
              controllerAs: 'chapter'
          }).otherwise({
              redirectTo: '/'
          });

    }
]);

