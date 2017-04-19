// // Google Maps 

var distributionCentresMap;
function initDistributionCentresMap() {

	var distributionCentresMap = new google.maps.Map(document.getElementById('distribution-centres-map'), {
    center: {lat: -29.021, lng: 142.589},
    zoom: 4, 
    styles : [
    	{
    		featureType:"water",
    		elementType:"geometry",
    		stylers: [
	    		{color:"#e9e9e9"},
	    		{lightness:17}
	    	]
	    }, 
	    {
	    	featureType:"landscape",
	    	elementType:"geometry",
	    	stylers: [
	    		{color:"#f5f5f5"}, 
	    		{lightness:20}
	    	]
	   	},
	   	{ 	
	   		featureType:"road.highway",
	   		elementType:"geometry.fill", 
	   		stylers: [
	   			{color:"#ffffff"}, 
	   			{lightness:17}
	   		]
	   	},
	   	{ 
	   		featureType:"road.highway",
	   		elementType:"geometry.stroke",
	   		stylers: [
	   			{color:"#ffffff"},
	   			{lightness:29},
	   			{weight:0.2}
	   		]
	   	},
	   	{	
	   		featureType:"road.arterial",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#ffffff"},
	   			{lightness:18}
	   		]
	   	},
	   	{
	   		featureType:"road.local",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#ffffff"}, 
	   			{lightness:16}
	   		]
	   	},
	   	{	
	   		featureType:"poi",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#f5f5f5"},
	   			{lightness:21}
	   		]
	   	},
	   	{ 
	   		featureType:"poi.park",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#dedede"},
	   			{lightness:21}
	   		]
	   	},
	   	{
	   		elementType:"labels.text.stroke",
	   		stylers: [
	   			{visibility:"on"},
	   			{color:"#ffffff"}, 
	   			{lightness:16}
	   		]
	   	},
	   	{
	   		elementType:"labels.text.fill",
	   		stylers: [
	   			{saturation:36},
	   			{color:"#333333"},
	   			{lightness:40}
	   		]
	   	},
	   	{
	   		elementType:"labels.icon",
	   		stylers: [
	   			{visibility:"off"}
	   		]
	   	},
	   	{	
	   		featureType:"transit",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#f2f2f2"},
	   			{lightness:19}
	   		]
	   	},
	   	{	
	   		featureType:"administrative",
	   		elementType:"geometry.fill",
	   		stylers: [
	   			{color:"#fefefe"},
	   			{lightness:20}
	   		]
	   	},
	   	{
	   		featureType:"administrative",
	   		elementType:"geometry.stroke",
	   		stylers: [
	   			{color:"#fefefe"},
	   			{lightness:17},
	   			{weight:1.2}
	   		]
	   	}
    ],
    main_color: '#007148',
    saturation_value: -1,
    brightness_value: 1,
    disableDefaultUI: true, 
    scrollwheel: false
  });

	var image = 'img/icon_map_pin.png';

	var distributionCentresMarker1 = new google.maps.Marker({
		position: {lat: -29.406, lng: 115.728},
		map: distributionCentresMap,
		icon: image
	});

	var distributionCentresMarker2 = new google.maps.Marker({
		position: {lat: -32.866, lng: 135.240},
		map: distributionCentresMap,
		icon: image
	});

	var distributionCentresMarker3 = new google.maps.Marker({
		position: {lat: -33.158, lng: 149.427},
		map: distributionCentresMap,
		icon: image
	});

	var distributionCentresMarker4 = new google.maps.Marker({
		position: {lat: -37.529, lng: 147.054},
		map: distributionCentresMap,
		icon: image
	});

	var distributionCentresMarker5 = new google.maps.Marker({
		position: {lat: -28.057, lng: 148.390},
		map: distributionCentresMap,
		icon: image
	});
}

var contactsMap;
function initContactsMap() {

	var contactsMap = new google.maps.Map(document.getElementById('contacts-map'), {
    center: {lat: -37.928528, lng: 145.2149084},
    zoom: 15, 
    styles : [
    	{
    		featureType:"water",
    		elementType:"geometry",
    		stylers: [
	    		{color:"#e9e9e9"},
	    		{lightness:17}
	    	]
	    }, 
	    {
	    	featureType:"landscape",
	    	elementType:"geometry",
	    	stylers: [
	    		{color:"#f5f5f5"}, 
	    		{lightness:20}
	    	]
	   	},
	   	{ 	
	   		featureType:"road.highway",
	   		elementType:"geometry.fill", 
	   		stylers: [
	   			{color:"#ffffff"}, 
	   			{lightness:17}
	   		]
	   	},
	   	{ 
	   		featureType:"road.highway",
	   		elementType:"geometry.stroke",
	   		stylers: [
	   			{color:"#ffffff"},
	   			{lightness:29},
	   			{weight:0.2}
	   		]
	   	},
	   	{	
	   		featureType:"road.arterial",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#ffffff"},
	   			{lightness:18}
	   		]
	   	},
	   	{
	   		featureType:"road.local",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#ffffff"}, 
	   			{lightness:16}
	   		]
	   	},
	   	{	
	   		featureType:"poi",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#f5f5f5"},
	   			{lightness:21}
	   		]
	   	},
	   	{ 
	   		featureType:"poi.park",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#dedede"},
	   			{lightness:21}
	   		]
	   	},
	   	{
	   		elementType:"labels.text.stroke",
	   		stylers: [
	   			{visibility:"on"},
	   			{color:"#ffffff"}, 
	   			{lightness:16}
	   		]
	   	},
	   	{
	   		elementType:"labels.text.fill",
	   		stylers: [
	   			{saturation:36},
	   			{color:"#333333"},
	   			{lightness:40}
	   		]
	   	},
	   	{
	   		elementType:"labels.icon",
	   		stylers: [
	   			{visibility:"off"}
	   		]
	   	},
	   	{	
	   		featureType:"transit",
	   		elementType:"geometry",
	   		stylers: [
	   			{color:"#f2f2f2"},
	   			{lightness:19}
	   		]
	   	},
	   	{	
	   		featureType:"administrative",
	   		elementType:"geometry.fill",
	   		stylers: [
	   			{color:"#fefefe"},
	   			{lightness:20}
	   		]
	   	},
	   	{
	   		featureType:"administrative",
	   		elementType:"geometry.stroke",
	   		stylers: [
	   			{color:"#fefefe"},
	   			{lightness:17},
	   			{weight:1.2}
	   		]
	   	}
    ],
    main_color: '#007148',
    saturation_value: -1,
    brightness_value: 1,
    scrollwheel: false
  });

	var image = 'img/icon_map_pin.png';

	var contactsMarker1 = new google.maps.Marker({
		position: {lat: -37.928528, lng: 145.2149084},
		map: contactsMap,
		icon: image
	});
}

