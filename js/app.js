function initialise() {
         
    	var myLatlng = new google.maps.LatLng(31.555197,-91.403171);  // Add the coordinates
    	var mapOptions = {
        zoom: 15, // The initial zoom level when your map loads (0-20)
        center: myLatlng, // Centre the Map to our coordinates variable
        mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
		disableDefaultUI: true,
      	}
    	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); // Render our map within the empty div
         
		var image = new google.maps.MarkerImage("http://www.google.com/mapfiles/marker.png", null, null, null, new google.maps.Size(20,28)); // Create a variable for our marker image.
             
		var markerLatLng = new google.maps.LatLng(31.559404, -91.408971);	 
			 
		var marker = new google.maps.Marker({ // Set the marker
    	position: markerLatLng, // Position marker to coordinates
    	icon:image, //use our image as the marker
    	map: map, // assign the market to our map variable
    	title: 'Click to visit our company on Google Places' // Marker ALT Text 
		});
		
		var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Rosalie Mansion:</h3>'+
      '<div id="bodyContent">'+
      '<p>This historic pre-civil war mansion was built in 1823. Rosalie Mansion is owned and operated by the Daughters of the American Revolution. During the Civil War it served as Union Headquarters for the Natchez area. Enjoy the lovely gardens of this National Historic Landmark.</p>'+
      '</div>'+
      '</div>';

  	  var infowindow = new google.maps.InfoWindow({
      content: contentString,
	  maxWidth: 250,
  	  });

	 google.maps.event.addListener(marker, 'click', function() {
     infowindow.open(map,marker);
  	 });
	 
	var flightPlanCoordinates = [
    new google.maps.LatLng(31.560192, -91.403269),
    new google.maps.LatLng(31.562587, -91.401016),
    new google.maps.LatLng(31.562011, -91.400147),
    new google.maps.LatLng(31.560430, -91.401617),
	new google.maps.LatLng(31.559177, -91.399782),
	new google.maps.LatLng(31.558317, -91.400519),
	new google.maps.LatLng(31.560195, -91.403266),
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#f68b1f',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });

  flightPath.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialise); // Execute our 'initialise' function once the page has loaded. 

