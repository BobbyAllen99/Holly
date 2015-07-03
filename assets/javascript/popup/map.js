function initialize() {
  var myLatlng = new google.maps.LatLng(51.89183910000001,0.896173699999963);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hollys hair'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);