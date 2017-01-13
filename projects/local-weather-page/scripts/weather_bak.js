// requires https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY

// this version does only getLatlong() and getCityFromLatlng()

$(document).ready(function() {

    function getLatlong() {
        // 'getLatlong' returns a promise - to handle async data
        return new Promise(function(resolve, reject) {
            if (navigator.geolocation) {
                // get lat and long and also check if they were retrieved
                navigator.geolocation.getCurrentPosition(function(position) {
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;
                    if (lat && long) {
                        // create new array
                        var latlngArr = [lat, long];
                        // for promise: resolve
                        resolve(latlngArr);
                    } else {
                        // for promise: reject
                        reject(Error("Could not get latlong."));
                    }
                }); // end if navigator.geolocation
            } else {
                // in case (navigator.geolocation) does not work
                alert("Geolocation is not enabled for this browser.");
            }
        });
    }

    // 'getLatlong' returns a promise
    // pattern, after .then: ( function(){ }, function(){ } )
    getLatlong().then(function(result) {
        var lati = result[0];
        var long = result[1];
        // now I finally get to run the function that needs the lat and long 
        getCityFromLatlng(lati, long);
    }, function(err) {
        // or alert the error, from reject
        alert(err);
    });

    function getCityFromLatlng(lati, long) {
        var geocoder = new google.maps.Geocoder;
        var latlng = {
            lat: parseFloat(lati),
            lng: parseFloat(long)
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


}); // end document ready
