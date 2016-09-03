var GPSEventsApp = angular.module("GPSEventsApp", ['ngRoute']);

var MainController = GPSEventsApp.controller('MainController',
    function($scope, $route, $routeParams, $location) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
        ctl.selectedPageIndex = 0;
        ctl.menuSearch = "";
        ctl.pages = [
            {
                url: "#/",
                name: "Tablero",
                icon: "dashboard"
            },
            {
                url: "#Units",
                name: "Unidades",
                icon: "truck"
            },
            {
                url: "#Vouchers",
                name: "Vales",
                icon: "credit-card"
            },
            {
                url: "#Shops",
                name: "Talleres",
                icon: "wrench"
            },
            {
                url: "#Stations",
                name: "Gasolineras",
                icon: "tachometer"
            },
            {
                url: "#Settings",
                name: "Configuracion",
                icon: "gears"
            }
        ];
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
          .when('/Units/:economicNumber', {
              templateUrl: '/angularApp/units/templates/_unitDetails.html',
              controller: 'UnitDetailsCtl',
              controllerAs: 'unitDetails'
          })
          .when('/Vouchers', {
              templateUrl: '/angularApp/vouchers/templates/_vouchers.html',
              controller: 'VouchersCtl',
              controllerAs: 'vouchers'
          })
          .when('/Stations', {
              templateUrl: '/angularApp/stations/templates/_stations.html',
              controller: 'StationsCtl',
              controllerAs: 'stations'
          })
          .when('/Settings', {
              templateUrl: '/angularApp/settings/templates/_settings.html',
              controller: 'SettingsCtl',
              controllerAs: 'settings'
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

