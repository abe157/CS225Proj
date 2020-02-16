function OnlineMap(){
	// Source: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/
	var mymap = L.map('mapid',  ).setView([33.973, -117.328], 14);
	L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
	}).addTo( mymap );
	return mymap;
}


function OfflineMap() {
	var mymap = L.map('mapid').setView([33.973, -117.328], 14, {minZoom: 12 , maxZoom: 15});
	L.tileLayer('4uMaps/{z}/{x}/{y}.png',{  minZoom: 12, maxZoom: 15  }).addTo(mymap);
	return mymap;
}



function AddPolygon(field, map, color='blue'){
	/*
	blue: No information
	red: Order Needs filled
	yellow: reccently applied
	orange: Scheduled, needs to be filled
	*/ 
	var polygon = L.polygon(field.polygons, {color: color}).addTo(map);
	var popupContent = field.itemhtml.getElementsByTagName("description")[0].outerHTML // popup discription
	polygon.bindPopup(popupContent)
}



function LoadMap() {
	var x = navigator.onLine;
	var mymap;
	if(x){
		mymap = OnlineMap();
	} else {
		alert("THIS IS OFFLINE. SOME FUNCTIONALITY WILL BE MISSING");
		// document.getElementById("demo").innerHTML = "NO THIS IS NOT ONLINE";
		mymap = OfflineMap();
	}

	kmlfile = new KMLClass("LandAlloc_20191120.kml");

	for(const feild of kmlfile.fields){
		AddPolygon(feild , mymap);
	}

}




