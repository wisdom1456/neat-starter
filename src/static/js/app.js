const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

if (marqueeContent) {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
}

var tds = document.querySelectorAll("udate");
for (i = 0; i < tds.length; ++i) {
    tds[i].innerHTML = tds[i].innerHTML.replace(/&nbsp;/g, " ");
}

var markers = [
    {
        GPS1: -34.031342,
        GPS2: 18.577419,
        client_address: "somewhere1"
    }
];

function initialize() {
    initMap();
    initMap2();
}

function initMap() {
    var latlng = new google.maps.LatLng(-34.031342, 18.577419); // default location
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControl: true
    };

    var map = new google.maps.Map(document.getElementById("mapall"), myOptions);
    var infowindow = new google.maps.InfoWindow(),
        marker,
        lat,
        lng;

    for (i = 0; i < markers.length; i++) {
        lat = markers[i].GPS1;
        lng = markers[i].GPS2;
        name = markers[i].client_address;

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            name: name,
            map: map
        });
        google.maps.event.addListener(
            marker,
            "click",
            function (e) {
                infowindow.setContent(this.name);
                infowindow.open(map, this);
            }.bind(marker)
        );
    }
}
var markers2 = [
    {
        GPS1: -33.92465,
        GPS2: 18.84382,
        client_address: "somewhere2"
    }
];

function initMap2() {
    var latlng = new google.maps.LatLng(-33.92465, 18.84382); // default location
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControl: true
    };

    var map = new google.maps.Map(document.getElementById("mapall2"), myOptions);
    var infowindow = new google.maps.InfoWindow(),
        marker,
        lat,
        lng;

    for (i = 0; i < markers2.length; i++) {
        lat = markers2[i].GPS1;
        lng = markers2[i].GPS2;
        name = markers2[i].client_address;

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            name: name,
            map: map
        });
        google.maps.event.addListener(
            marker,
            "click",
            function (e) {
                infowindow.setContent(this.name);
                infowindow.open(map, this);
            }.bind(marker)
        );
    }
}
