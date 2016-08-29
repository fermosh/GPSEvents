var GPSEventsApp = angular.module("GPSEventsApp");

var StationsCtl = GPSEventsApp.controller('StationsCtl',
[
    '$route', '$routeParams', '$location', '$sce','$http',  
    function($route, $routeParams, $location, $sce, $http) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
        ctl.showForm = false;
        ctl.newStation = {
            name: "",
            address: "",
            location: { latitude: 0, longitude: 0 },
            mapUrl: $sce.trustAsResourceUrl("http://www.openstreetmap.org/export/embed.html?bbox=0%2C0%2C0%2C0&amp;layer=mapnik&amp;marker=0%2C0")
        }

        ctl.GetIframeSrc = function (location) {
            return $sce.trustAsResourceUrl("http://www.openstreetmap.org/export/embed.html?bbox=" + (location.longitude - .001) + "%2C" + (location.latitude - .001) +
                "%2C" + (location.longitude + .001) + "%2C" + (location.latitude + .001) + "&amp;layer=mapnik&amp;marker=" + location.latitude + "%2C" + location.longitude);
        }

        ctl.stationCollection = [
            {
                stationId: "b8ea6808-2bf9-44ca-a3e0-de68d8b2781a",
                name: "Servicio Minerva de Guadalajara",
                address: "Calle Fernando Celada 175, Col. Vallarta Norte, 44690 Guadalajara, Jal., Mexico",
                location: {
                    latitude: 20.6747572,
                    longitude: -103.3902426
                },
                mapUrl: ctl.GetIframeSrc({
                    latitude: 20.6747572,
                    longitude: -103.3902426
                })
            },
            {
                stationId: "c6a288c5-2fdd-4e42-8f36-bbebd74c4546",
                name: "Servicio Gasolinera Magdalena",
                address: "Calle Hidalgo Pte. 450, Centro, 46470 Magdalena, Jal., Mexico",
                location: {
                    latitude: 20.9117387,
                    longitude: -103.9897098
                },
                mapUrl: ctl.GetIframeSrc({
                    latitude: 20.9117387,
                    longitude: -103.9897098
                })

            },
            {
                stationId: "cf8f0a86-c049-43f6-9c5e-af0fe1fbb379",
                name: "Gasolinera Las Torres",
                address: "Av. Lazaro Cardenas 860, 8 de Juilo, 8 de Julio, 44910 Guadalajara, Jal., Mexico",
                location: {
                    latitude: 20.6437679,
                    longitude: -103.3594078
                },
                mapUrl: ctl.GetIframeSrc({
                    latitude: 20.6437679,
                    longitude: -103.3594078
                })

            }
        ];

        ctl.ShowNewStationForm = function () {
            ctl.showForm = true;
        }
        ctl.CancelNewStation = function () {
            ctl.newStation = {
                name: "",
                address: "",
                location: {latitude:0 , longitude:0},
                mapUrl: $sce.trustAsResourceUrl("http://www.openstreetmap.org/export/embed.html?bbox=0%2C0%2C0%2C0&amp;layer=mapnik&amp;marker=0%2C0")
            }
            ctl.showForm = false;
        }
        ctl.AddStation = function () {
            ctl.stationCollection.push(ctl.newStation);
            ctl.CancelNewStation();
        }
        ctl.UpdateNewFormMap = function() {
            $http.get("http://nominatim.openstreetmap.org/search?q="+encodeURI(ctl.newStation.address)+"&format=json").then(
                function(response) {
                    var lat = response.data[0].lat;
                    var lon = response.data[0].lon;
                    ctl.newStation.mapUrl = ctl.GetIframeSrc({ latitude:lat, longitude:lon });
                },
                function(response) {}
            );
        }
    }
]);
