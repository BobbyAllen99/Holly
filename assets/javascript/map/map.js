<<<<<<< HEAD
function initialize() {
  var myLatlng = new google.maps.LatLng(51.89183910000001,0.896173699999963);
  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    scrollwheel: false,
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hollys hair'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
=======
  function initialize() {
    var myLatlng = new google.maps.LatLng(51.89183910000001,0.896173699999963);
    var mapOptions = {
      zoom: 17,
      center: myLatlng,
      scrollwheel: false,
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hollys hair'
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
>>>>>>> origin/master
