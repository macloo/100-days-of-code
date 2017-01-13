// requires https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY
$(document).ready(function() {

var getLatlong = new Promise(function(resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        // console.log( lat + "," + long );
      });
    } else {
      alert( "Geolocation is not enabled for this browser." );
    }
    if (lat && long) {
        var latlngArr = [ lat, long ];
        resolve(latlngArr);
    } else {
        reject(Error("Could not get latlong."));
    }
});

getLatlong.then(function(result) {
        alert(result[0] + ", " + result[1]);
    }, function(err) {
        alert(err);
});


}); // end document ready
