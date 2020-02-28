// import { GetAppPlotInfo } from './all.js';

function OnlineMap(){
	// Source: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/
	var mymap = L.map('mapid',  ).setView([33.973, -117.328], 14);
	L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		// subdomains: ['a','b','c']
	}).addTo( mymap );

	return mymap;
}


function OfflineMap() {
	var mymap = L.map('mapid').setView([33.973, -117.328], 14, {minZoom: 12 , maxZoom: 15});
	L.tileLayer('4uMaps/{z}/{x}/{y}.png',{  minZoom: 12, maxZoom: 15  }).addTo(mymap);
	return mymap;
}

// async function GetOrderHtml(){
//   const options = {
//     method: "GET", 
//   };
//   const response = await fetch("order.html", options); //method is 
//   return response;
// }





async function AddPolygon(field, map, color='blue'){
	/*
	blue: No information
	red: Order Needs filled
	yellow: reccently applied
	orange: Scheduled, needs to be filled
	*/ 

	var popupContent = field.itemhtml.getElementsByTagName("description")[0].childNodes[6];


	var plantID = popupContent.getElementsByTagName("td")[0].innerHTML ;
	var objectID = popupContent.getElementsByTagName("td")[3].innerHTML ; 


	const order_button = document.createElement('button');
	order_button.setAttribute("type","button");
	order_button.setAttribute("class","btn btn-secondary");
	order_button.setAttribute("onclick","window.location.href='order.html?fieldid='+'" + objectID + "';");
	order_button.textContent = "New Order";

	const view_button = document.createElement('button');
	view_button.setAttribute("type","button");
	view_button.setAttribute("class","btn btn-secondary");
	view_button.setAttribute("onclick","window.location.href='view.html?fieldid='+'" + objectID + "';");
	view_button.textContent = "View Orders";

	const document_button = document.createElement('button');
	document_button.setAttribute("type","button");
	document_button.setAttribute("class","btn btn-secondary");
	document_button.setAttribute("onclick","window.location.href='document.html?fieldid='+'" + objectID + "';");
	document_button.textContent = "Doc. Orders";

	popupContent.append(order_button);
	popupContent.append(view_button);
	popupContent.append(document_button);


	const feild_info = await GetAppPlotInfo(objectID);
	if(feild_info.length > 0){
		color = 'orange';
		var polygon = L.polygon(field.polygons, {color: color}).addTo(map);
		polygon.bindPopup(popupContent);
		return;
	} 

	var polygon = L.polygon(field.polygons, {color: color}).addTo(map);
	polygon.bindPopup(popupContent);

}


function showPosition(mymap) {
    //var x = navigator.onLine;
    if (( navigator.geolocation)){
		navigator.geolocation.getCurrentPosition( function(position){
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			L.marker([lat, lng]).addTo(mymap);
		} )
	}
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


	kmlfile = new KMLClass("./LandAlloc_20191120.kml");

	for(const feild of kmlfile.fields){
		AddPolygon(feild , mymap);
		// break; // place here for testing with a feild
	}

	showPosition(mymap);	

}




