$(document).ready(function() {
    // Calcular posición
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var coords = position.coords;
            showMap(position);
        });
    }


    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var $ul = $('#datos');

        $ul.append("<li>Latitud: " + position.coords.latitude + "</li>");
        $ul.append("<li>Longitud: " + position.coords.longitude + "</li>");
        $ul.append("<li>Accruracy: " + position.coords.accuracy + "</li>");
        $ul.append("<li>Altitud: " + position.coords.altitude + "</li>");
        $ul.append("<li>Accuracy of Altitud: " + position.coords.altitudeAccuracy + "</li>");
        $ul.append("<li>Heading: " + position.coords.heading + "</li>");
        $ul.append("<li>Speed: " + position.coords.speed + "</li>");

        /*console.log("Latitud: " + position.coords.latitude);
        console.log("Longitud: " + position.coords.longitude);
        console.log("Accruracy: " + position.coords.accuracy);
        console.log("Altitud" + position.coords.altitude);
        console.log("Accuracy of Altitud: " + position.coords.altitudeAccuracy);
        console.log("Heading: " + position.coords.heading);
        console.log("Speed: " + position.coords.speed);*/

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude, position.coords.accuracy);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }



});