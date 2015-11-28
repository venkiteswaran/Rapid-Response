LiveVictimMapCoordinates = new Meteor.Collection("LiveLocation");

Template.LiveVictimMap.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options

      // alert (db.LiveLocation.count());

      // var Lat = db.LiveLocation.findone(i)[Lat];
      // var Lng = db.LiveLocation.findone(i)[Lng;


      return {
        
        center: new google.maps.LatLng(Lat, Lng),
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
