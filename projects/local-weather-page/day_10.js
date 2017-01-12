// requires https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY


$(document).ready(function() {

    // each works alone
    // getLatlong();
    // geocodeLatLng();

  function geocodeLatLng() {
    var geocoder = new google.maps.Geocoder;
    // var latlongArr = getLatlong();
    var latlongArr = [ 29.653551, -82.322391 ];
    latlng = {
      lat: parseFloat(latlongArr[0]),
      lng: parseFloat(latlongArr[1])
    };
    geocoder.geocode({
      'location': latlng
    }, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
        $('#loc').text(results[1].formatted_address);
        /* if (results[0]) {
          var city = results[0].address_components[3].long_name;
          var state = results[0].address_components[5].long_name;
          var country = results[0].address_components[6].long_name;
          $('#loc').text(city + ", " + state + ", " + country);
        */
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  }

  function getLatlong() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        // console.log( lat + "," + long );
        return [ lat, long ];
      });
    } else {
      alert( "Geolocation is not enabled for this browser." );
      return false;
    }
  }


}); // end document ready
