// no Google maps in this version
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
    // we run this to ensure the lat and long have been retrieved
    getLatlong().then(function(result) {
        var lati = result[0];
        var long = result[1];
        getWeatherData(lati, long);
    }, function(err) {
        // or alert the error, from reject
        alert(err);
    });

    function getWeatherData(lati, long) {
        var owmid = "c49857970eabb99289961b1f01300af5";
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" +
            lati + "&lon=" + long + "&APPID=" + owmid;
        $.getJSON(url, function(data) {
            var temp = data.main.temp;
            var cond = data.weather[0].main;
            $('#temp').text(temp);
            $('#cond').text(cond);
        });
    }

}); // end document ready
