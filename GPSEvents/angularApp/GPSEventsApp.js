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
          .when('/Vouchers', {
              templateUrl: '/angularApp/vouchers/templates/_vouchers.html',
              controller: 'VouchersCtl',
              controllerAs: 'vouchers'
          })
          .when('/Shops', {
              templateUrl: '/angularApp/shops/templates/_shops.html',
              controller: 'ShopsCtl',
              controllerAs: 'shops'
          }).otherwise({
              redirectTo: '/'
          });

    }
]);

