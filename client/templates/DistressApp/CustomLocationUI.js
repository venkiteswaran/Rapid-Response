
Template.CustomLocationUI.events({
  'click #custom-location-link'(ev) {
    ev.preventDefault();

    // if (Geolocation.error()) {
    //   alert(`There's a problem with your Geolocation! Error we got: ${Geolocation.error()}`);
    // }


    Session.set("customLocationOptionSelected", true);
  },

  
  'click #select-location-button'(ev) {
    ev.preventDefault();

    Session.set("customLocationOptionSelected", false);
   
  }



  })


Template.CustomLocationUI.helpers({
  selectlocationOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(12.6, 80.1),
        zoom: 8
      };
    }
  }
});

Template.CustomLocationUI.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('selectlocation', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
      draggable:true,
      title:"Drag me to the distress location"
    
    });


    // This listener lets us drag markers on the map and update their corresponding document.
    google.maps.event.addListener(marker, 'dragend', function(event) {
      var locCurrent = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      Session.set("distressCallCoords", locCurrent);
    });
  });
});






