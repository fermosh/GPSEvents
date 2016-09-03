var GPSEventsApp = angular.module("GPSEventsApp");
    
var UnitsCtl = GPSEventsApp.controller('UnitsCtl',
[
    '$route', '$routeParams', '$location',
    function ($route, $routeParams, $location) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
        ctl.showForm = false;
        ctl.newUnit = {
            economicNumber: "",
            GPSIP: "",
            fuelCapacity: "",
            make: "",
            model: "",
            licensePlate: ""
        }
        ctl.unitCollection = [];
        ctl.ShowNewUnitForm = function () {
            ctl.showForm = true;
        }
        ctl.CancelNewUnit = function () {
            ctl.newUnit = {
                economicNumber: "",
                GPSIP: "",
                fuelCapacity: "",
                make: "",
                model: "",
                licensePlate: ""
            }
            ctl.showForm = false;
        }
        ctl.AddUnit = function () {
            ctl.unitCollection.push(ctl.newUnit);
            ctl.CancelNewUnit();
        }
    }
]);
