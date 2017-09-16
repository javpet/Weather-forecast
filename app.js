function weather() {

    var location = document.getElementById("location");
    var apiKey = 'YOUR API KEY GOES HERE';
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';

       $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        $('#temp').html(data.currently.temperature + '° F');
        $('#minutely').html(data.minutely.summary);
        $('#timezone').html(data.timezone);
      });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }

  weather();
