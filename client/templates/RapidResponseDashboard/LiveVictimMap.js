
Template.LiveVictimMap.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      loc = livelocation.find();
      var lat =loc.lat;
      var lon = loc.lon;
     // alert(lat);
      //alert(lon);
      return {
        center: new google.maps.LatLng(12.6, 80.1),
        zoom: 8
      };
    }
  }
});

Template.LiveVictimMap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
   

    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
