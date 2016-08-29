var GPSEventsApp = angular.module("GPSEventsApp");

var ShopsCtl = GPSEventsApp.controller('ShopsCtl',
[
    '$route', '$routeParams', '$location', '$sce', '$http',
    function($route, $routeParams, $location, $sce, $http) {
        var ctl = this;
        ctl.$route = $route;
        ctl.$location = $location;
        ctl.$routeParams = $routeParams;
        ctl.showForm = false;
        ctl.newShop = {
            name: "",
            address: "",
            location: { latitude: 0, longitude: 0 },
            mapUrl: $sce
                .trustAsResourceUrl("http://www.openstreetmap.org/export/embed.html?bbox=0%2C0%2C0%2C0&amp;layer=mapnik&amp;marker=0%2C0")
        }

        ctl.GetIframeSrc = function(location) {
            return $sce.trustAsResourceUrl("http://www.openstreetmap.org/export/embed.html?bbox=" +
                (location.longitude - .001) +
                "%2C" +
                (location.latitude - .001) +
                "%2C" +
                (location.longitude + .001) +
                "%2C" +
                (location.latitude + .001) +
                "&amp;layer=mapnik&amp;marker=" +
                location.latitude +
                "%2C" +
                location.longitude);
        }

        ctl.shopCollection = [
            {
                shopId: "b8ea6808-2bf9-44ca-a3e0-de68d8b2781a",
                name: "Taller principal",
                address: "Prado de los tabachines 262, Zapopan, Jalisco",
                location: {
                    latitude: 20.6562313,
                    longitude: -103.4137656
                },
                mapUrl: ctl.GetIframeSrc({
                    latitude: 20.6562313,
                    longitude: -103.4137656
                })
            },
            {
                shopId: "c6a288c5-2fdd-4e42-8f36-bbebd74c4546",
                name: "Taller Magdalena",
                address: "Juarez 49, Magdalena, Jalisco",
                location: {
                    latitude: 20.9090973,
                    longitude: -103.9819264
                },
                mapUrl: ctl.GetIframeSrc({
                    latitude: 20.9090973,
                    longitude: -103.9819264
                })

            },
            {
                shopId: "cf8f0a86-c049-43f6-9c5e-af0fe1fbb379",
                name: "Taller Acatlan",
                address: "Hidalgo 33, Acatlan de Juarez, Jalisco",
                location: {
                    latitude: 20.4227283,
                    longitude: -103.5908478
                },
                mapUrl: ctl.GetIframeSrc({
                    latitude: 20.4227283,
                    longitude: -103.5908478
                })

            }
        ];

        ctl.ShowNewShopForm = function() {
            ctl.showForm = true;
        }
        ctl.CancelNewShop = function() {
            ctl.newShop = {
                name: "",
                address: "",
                location: { latitude: 0, longitude: 0 },
                mapUrl: $sce
                    .trustAsResourceUrl("http://www.openstreetmap.org/export/embed.html?bbox=0%2C0%2C0%2C0&amp;layer=mapnik&amp;marker=0%2C0")
            }
            ctl.showForm = false;
        }
        ctl.AddShop = function() {
            ctl.shopCollection.push(ctl.newShop);
            ctl.CancelNewShop();
        }
        ctl.UpdateNewFormMap = function() {
            $http.get("http://nominatim.openstreetmap.org/search?q=" +
                    encodeURI(ctl.newShop.address) +
                    "&format=json")
                .then(
                    function(response) {
                        var lat = response.data[0].lat;
                        var lon = response.data[0].lon;
                        ctl.newShop.mapUrl = ctl.GetIframeSrc({ latitude: lat, longitude: lon });
                    },
                    function(response) {}
                );
        }
    }
]);
