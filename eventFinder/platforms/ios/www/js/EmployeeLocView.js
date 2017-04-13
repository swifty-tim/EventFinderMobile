var EmployeeLocView = function () {

    var map;

    this.initialize = function() {
        this.$el = $('<div/>');
        //this.$el.on('click', '.go-back-button', this.hideMap);
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        //alert("Map loading");
        //this.showMap();
        return this;
    };

    this.hideMap = function() {
       alert("Map Hidding");
       Mapbox.hide(
            {},
            this.onSuccess,
            this.onError
        );
    }

    this.showMap = function() {
        Mapbox.show({
            style: 'emerald',
            margins: {
            'left': 0,
            'right': 0,
            'top': 100,
            'bottom': 100
            },
                center: {
                lat: 52.3702160,
                lng: 4.8951680
                },
                zoomLevel: zoom, // 0 (the entire world) to 20, default 10
                showUserLocation: true, // default false
                hideAttribution: true, // default false
                hideLogo: true, // default false
                hideCompass: false, // default false
                disableRotation: false, // default false
                disableScroll: false, // default false
                disableZoom: false, // default false
                disablePitch: false, // default false
                markers: [
                {
                    'lat': 52.3732160,
                    'lng': 4.8941680,
                    'title': 'Nice location',
                    'subtitle': 'Really really nice location',
                    'image': 'www/img/markers/hi.jpg' // TODO support this on a rainy day
                },
                {
                    'lat': 51.503364051,
                    'lng': -0.1276250,
                    'title': 'My location',
                    'subtitle': 'Really really nice location',
                    'image': 'www/img/markers/hi.jpg' // TODO support this on a rainy day
                }
                ]
            },
            function (result) {
                console.log(JSON.stringify(result));
                // let's add a callback for these markers - invoked when the callout is tapped (Android) or the (i) icon in the marker callout (iOS)
                Mapbox.addMarkerCallback(function (selectedMarker) {
                alert("Marker selected: " + JSON.stringify(selectedMarker));
                });
            },
            function (error) {
                alert(error);
            }
        )

    }

    this.initialize();
}

// var EmployeeLocView = function(employee) {

//     // var map;
//     // var jsonLoc;

//     // var curIcon = L.ExtraMarkers.icon({
//     //     icon: 'fa-crosshairs',
//     //     iconColor: 'white',
//     //     markerColor: 'blue',
//     //     shape: 'square',
//     //     prefix: 'fa'
//     // });


//     this.initialize = function() {
//         this.$el = $('<div/>');
//     };

//     this.render = function() {
//         this.$el.html(this.template(employee));
//         return this;
//     };

//     // this.setMapToCurrentLocation = function() {
//     //     console.log("In setMapToCurrentLocation.");
            
//     //     var myLatLon = L.latLng(52.32396135, -6.42415696);
//     //     L.marker(myLatLon, {icon: curIcon}).addTo(map);
//     //     map.flyTo(myLatLon, 15);

//     //     myPos = new myGeoPosition(pos);
//     //     jsonLoc = JSON.stringify(myPos);
//     // };

//     //  thid.updatePosition =function() {
//     //     console.log("In updatePosition.");

//     //         var myPos = JSON.parse(jsonLoc);
//     //         $.ajax({
//     //             type: "PATCH",
//     //             headers: {"Authorization": localStorage.authtoken},
//     //             url: HOST + URLS["updateposition"],
//     //             data: {
//     //                 lat: myPos.coords.latitude,
//     //                 lon: myPos.coords.longitude
//     //             }
//     //         }).done(function (data, status, xhr) {
//     //             showOkAlert("Position Updated");
//     //         }).fail(function (xhr, status, error) {
//     //             var message = "Position Update Failed\n";
//     //             if ((!xhr.status) && (!navigator.onLine)) {
//     //                 message += "Bad Internet Connection\n";
//     //             }
//     //             message += "Status: " + xhr.status + " " + xhr.responseText;
//     //             showOkAlert(message);
//     //         }).always(function () {
//     //             $.mobile.navigate("#map-page");
//     //     });
//     // }

//     this.initialize();
// }