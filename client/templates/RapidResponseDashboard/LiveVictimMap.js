<<<<<<< HEAD
=======
LiveVictimMapCoordinates = new Meteor.Collection("LiveLocation");
>>>>>>> 9c2d6001bf69537af256488ddbf29ce8741c0f71

Template.LiveVictimMap.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
<<<<<<< HEAD
      loc = livelocation.find();
      var lat =loc.lat;
      var lon = loc.lon;
     // alert(lat);
      //alert(lon);
=======

      // alert (db.LiveLocation.count());

      // var Lat = db.LiveLocation.findone(i)[Lat];
      // var Lng = db.LiveLocation.findone(i)[Lng;


>>>>>>> 9c2d6001bf69537af256488ddbf29ce8741c0f71
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
<<<<<<< HEAD
   
=======
>>>>>>> 9c2d6001bf69537af256488ddbf29ce8741c0f71

    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
