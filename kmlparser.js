class Field{
	constructor(itemhtml, polygons, placeMarkName=""){
		// this.objectid = objectid;
		this.itemhtml = itemhtml;
		this.polygons = polygons;
		this.placeMarkName = placeMarkName;
	}
}

class KMLClass {
  constructor(filename) {
    this.filename = filename;
    this.fields = [];
    this.parse();
  }
  parse(){
		this.readTextFile(this.filename);
  }

  readTextFile(file){
			// var allText;
	    var rawFile = new XMLHttpRequest();
	    rawFile.open("GET", file, false); // Must not be synchronous or else will not return
	    rawFile.onreadystatechange = function ( ){
        if(rawFile.readyState === 4){
          if(rawFile.status === 200 || rawFile.status == 0){
              return rawFile.responseText;
          }
        }
	    }

	    
	    rawFile.send();
	    let ret_text = rawFile.responseText;
	    var doc = document.implementation.createHTMLDocument("example");
      doc.documentElement.innerHTML = ret_text;
	    let fields = parsehtml(doc);
      for(const field of fields ){
      	this.fields.push( field );
      }
	}

}



function parsehtml(xmlDoc){
		// Source: https://stackoverflow.com/questions/18032505/read-out-kml-file-with-javascript
		let Feilds = [];
		for (const item of xmlDoc.getElementsByTagName('Placemark')){
		  let googlePolygons = []
		  // let googleMarkers = []


	    let placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim()
	    let polygons = item.getElementsByTagName('Polygon')


	    // POLYGONS PARSE  Getting the Coordinates
	    for (const polygon of polygons) {
	      let coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim()
	      let points = coords.split(" ")

	      let googlePolygonsPaths = []
	      for (const point of points) {
	        let coord = point.split(",")
	        googlePolygonsPaths.push([coord[1],coord[0]]);
	      }
	      googlePolygons.push(googlePolygonsPaths)
	    }

	    // POLYGONS PARSE      
	    // for (const polygon of polygons) {
	    //   let coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim()
	    //   let points = coords.split(" ")

	    //   let googlePolygonsPaths = []
	    //   for (const point of points) {
	    //     let coord = point.split(",")
	    //     googlePolygonsPaths.push({ lat: +coord[1], lng: +coord[0] })
	    //   }
	    //   googlePolygons.push(googlePolygonsPaths)
	    // }

	    // // MARKER PARSE 
	    // for (const marker of markers) {
	    //   var coords = marker.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim()
	    //   let coord = coords.split(",")
	    //   googleMarkers.push({ lat: +coord[1], lng: +coord[0] })
	    // }

	    field = new Field(item, googlePolygons, placeMarkName);
	    Feilds.push(field);
		}
		return Feilds;
	}

function parseDocument(plainText){
	let parser = new DOMParser()
	let xmlDoc = parser.parseFromString(plainText, "text/xml")
	console.log("TYPE: "  + xmlDoc.documentElement.nodeName);
	console.log("YEP: " + xmlDoc.getElementsByTagName('html') );
	if(xmlDoc.documentElement.nodeName == 'html'){
		this.parsehtml(xmlDoc);
	} else if (xmlDoc.documentElement.nodeName == 'kml'){
		this.parsekml(xmlDoc);
	} else {
		alert("Mapping for this data is not implemented yet. Use KML: " + xmlDoc.documentElement.nodeName );
	}
}


function parsekml(xmlDoc){
	console.log("Not Implemented yet");
}







