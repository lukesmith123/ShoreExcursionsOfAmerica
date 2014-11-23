function initialise() {
         
    	var myLatlng = new google.maps.LatLng(31.555197,-91.403171);  // Add the coordinates
    	var mapOptions = {
        zoom: 15, // The initial zoom level when your map loads (0-20)
        center: myLatlng, // Centre the Map to our coordinates variable
        mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
		disableDefaultUI: true,
      	}
    	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); // Render our map within the empty div
         
		var image = new google.maps.MarkerImage("http://www.google.com/mapfiles/marker.png", null, null, null, new google.maps.Size(20,32)); // Create a variable for our marker image.
             
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
new google.maps.LatLng(31.555371,-91.395226),
new google.maps.LatLng(31.555631,-91.396303),
new google.maps.LatLng(31.555782,-91.396803),
new google.maps.LatLng(31.556384,-91.397774),
new google.maps.LatLng(31.556453,-91.397856),
new google.maps.LatLng(31.557687,-91.399612),
new google.maps.LatLng(31.5621,-91.406003),
new google.maps.LatLng(31.561047,-91.407075),
new google.maps.LatLng(31.56108,-91.407168),
new google.maps.LatLng(31.561084,-91.407189),
new google.maps.LatLng(31.561078,-91.407218),
new google.maps.LatLng(31.560331,-91.408614),
new google.maps.LatLng(31.560302,-91.408728),
new google.maps.LatLng(31.560271,-91.4089),
new google.maps.LatLng(31.560227,-91.409062),
new google.maps.LatLng(31.560168,-91.409253),
new google.maps.LatLng(31.559755,-91.410474),
new google.maps.LatLng(31.55953,-91.411364),
new google.maps.LatLng(31.55953,-91.411364),
new google.maps.LatLng(31.559477,-91.411714),
new google.maps.LatLng(31.559425,-91.411882),
new google.maps.LatLng(31.559371,-91.411979),
new google.maps.LatLng(31.558969,-91.412407),
new google.maps.LatLng(31.558427,-91.412909),
new google.maps.LatLng(31.558093,-91.413073),
new google.maps.LatLng(31.557742,-91.413165),
new google.maps.LatLng(31.557514,-91.41316),
new google.maps.LatLng(31.557253,-91.413069),
new google.maps.LatLng(31.557079,-91.412905),
new google.maps.LatLng(31.556965,-91.412727),
new google.maps.LatLng(31.556913,-91.412498),
new google.maps.LatLng(31.556904,-91.41222),
new google.maps.LatLng(31.556927,-91.411972),
new google.maps.LatLng(31.557041,-91.411761),
new google.maps.LatLng(31.557216,-91.411575),
new google.maps.LatLng(31.558213,-91.410911),
new google.maps.LatLng(31.558352,-91.410761),
new google.maps.LatLng(31.558432,-91.410576),
new google.maps.LatLng(31.558477,-91.410326),
new google.maps.LatLng(31.558439,-91.410012),
new google.maps.LatLng(31.558383,-91.409754),
new google.maps.LatLng(31.558394,-91.409311),
new google.maps.LatLng(31.558453,-91.408803),
new google.maps.LatLng(31.558453,-91.408608),
new google.maps.LatLng(31.558423,-91.40847),
new google.maps.LatLng(31.558351,-91.408308),
new google.maps.LatLng(31.557079,-91.409499),
new google.maps.LatLng(31.555682,-91.410785),
new google.maps.LatLng(31.555597,-91.410887),
new google.maps.LatLng(31.555581,-91.410903),
new google.maps.LatLng(31.555416,-91.410981),
new google.maps.LatLng(31.555291,-91.41102),
new google.maps.LatLng(31.554915,-91.411096),
new google.maps.LatLng(31.555291,-91.41102),
new google.maps.LatLng(31.555416,-91.410981),
new google.maps.LatLng(31.555581,-91.410903),
new google.maps.LatLng(31.555597,-91.410887),
new google.maps.LatLng(31.555682,-91.410785),
new google.maps.LatLng(31.557079,-91.409499),
new google.maps.LatLng(31.559744,-91.407016),
new google.maps.LatLng(31.560263,-91.407745),
new google.maps.LatLng(31.559986,-91.40807),
new google.maps.LatLng(31.559683,-91.40836),
new google.maps.LatLng(31.559038,-91.407694),
new google.maps.LatLng(31.560558,-91.40627),
new google.maps.LatLng(31.558551,-91.403384),
new google.maps.LatLng(31.557761,-91.404121),
new google.maps.LatLng(31.558352,-91.404927),
new google.maps.LatLng(31.559575,-91.403793),
new google.maps.LatLng(31.559894,-91.403551),
new google.maps.LatLng(31.560627,-91.402863),
new google.maps.LatLng(31.562585,-91.401014),
new google.maps.LatLng(31.562012,-91.400151),
new google.maps.LatLng(31.560425,-91.401615),
new google.maps.LatLng(31.559166,-91.399767),
new google.maps.LatLng(31.558316,-91.400516),
new google.maps.LatLng(31.557686,-91.39961),
new google.maps.LatLng(31.555912,-91.40128),
new google.maps.LatLng(31.557759,-91.404116),
new google.maps.LatLng(31.556983,-91.40478),
new google.maps.LatLng(31.556369,-91.403844),
new google.maps.LatLng(31.55579,-91.403058),
new google.maps.LatLng(31.555726,-91.402943),
new google.maps.LatLng(31.555086,-91.402047),
new google.maps.LatLng(31.554614,-91.401657),
new google.maps.LatLng(31.554513,-91.401595),
new google.maps.LatLng(31.552593,-91.400725),
new google.maps.LatLng(31.551224,-91.400218),
new google.maps.LatLng(31.551073,-91.400146),
new google.maps.LatLng(31.550868,-91.400024),
new google.maps.LatLng(31.550133,-91.399405),
new google.maps.LatLng(31.549872,-91.399206),
new google.maps.LatLng(31.549673,-91.399098),
new google.maps.LatLng(31.549942,-91.398362),
new google.maps.LatLng(31.550036,-91.398009),
new google.maps.LatLng(31.550075,-91.39775),
new google.maps.LatLng(31.550077,-91.397537),
new google.maps.LatLng(31.550013,-91.397317),
new google.maps.LatLng(31.549272,-91.395859),

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

