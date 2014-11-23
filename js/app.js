function initialise() {
         
    	var myLatlng = new google.maps.LatLng(31.555197,-91.403171);  // Add the coordinates
    	var mapOptions = {
        zoom: 15, // The initial zoom level when your map loads (0-20)
        center: myLatlng, // Centre the Map to our coordinates variable
        mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
		disableDefaultUI: true,
      	}
    	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); // Render our map within the empty div
         
		var image = new google.maps.MarkerImage("http://www.google.com/mapfiles/marker.png", null, null, null, new google.maps.Size(20,26)); // Create a variable for our marker image.
             
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
      '<h1 id="firstHeading" class="firstHeading">Rosalie Mansion:</h1>'+
      '<div id="bodyContent">'+
      '<p>This historic pre-civil war mansion was built in 1823. Rosalie Mansion is owned and operated by the Daughters of the American Revolution. During the Civil War it served as Union Headquarters for the Natchez area. Enjoy the lovely gardens of this National Historic Landmark.</p>'+
      '</div>'+
      '</div>';

  	  var infowindow = new google.maps.InfoWindow({
      content: contentString,
	  maxWidth: 300,
  	  });

	 google.maps.event.addListener(marker, 'click', function() {
     infowindow.open(map,marker);
  	 });
}
google.maps.event.addDomListener(window, 'load', initialise); // Execute our 'initialise' function once the page has loaded. 

