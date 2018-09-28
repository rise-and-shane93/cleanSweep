//locations for offices
/* var locations = [
    ['Georgia', 34.563059, -84.934870],
    ['New Jersey Corporate Office', 40.920712, -74.179956],
    ['Ohio', 40.630811, -83.090300]
];

//launch map
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: new google.maps.LatLng(38.45, -78.87),
    mapTypeId: google.maps.MapTypeId.HYBRID
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
} */

$('.ga-map').click(function() {
  $('iframe').attr("src", "https://maps.google.com/maps?q=127%20nance&t=&z=13&ie=UTF8&iwloc=&output=embed");
});

$('.nj-map').click(function() {
  $('iframe').attr("src", "https://maps.google.com/maps?q=62%20kearney%20st&t=&z=13&ie=UTF8&iwloc=&output=embed");
});

$('.oh-map').click(function() {
  $('iframe').attr("src", "https://maps.google.com/maps?q=1582%20likens%20rd&t=&z=13&ie=UTF8&iwloc=&output=embed");
});

"https://maps.google.com/maps?q=62%20kearney%20st&t=&z=13&ie=UTF8&iwloc=&output=embed"