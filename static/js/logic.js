console.log("this is logic.js");

const API_KEY = "pk.eyJ1IjoiaGF1Y2tjIiwiYSI6ImNraHV6dGVmazA2dGQzMW1vZGh5d3NybTAifQ.mmDcfDE8B-oYlEjfZFBPgA";

// Define url
url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"

// Create Layers for the map
var grayMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  });
 

  var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-v9",
    accessToken: API_KEY
  });

  var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/outdoors-v11",
    accessToken: API_KEY
  });

// Create base map layers
var base_map={
    GrayMap: grayMap,
    Satellite: satellite,
    Outdoors :outdoors
};

//Create map object and geographical reference
var myMap = L.map("mapid",{
    center: [40.7, -94.5],
    zoom: 2,
    layers: [grayMap, satellite, outdoors]
});
grayMap.addTo(myMap);

// Create Earthquake & Tectonic variables
var earthquakes=new L.LayerGroup();
var plates=new L.LayerGroup();

// Variable Overlays
var overlays={
    "Earthquakes":earthquakes,
    "Tectonic Plates":plates
};
// Add a Control to the Map
L.control.layers(base_map,overlays).addTo(myMap);

d3.json(url,function(earthquakeData)
{
    console.log(earthquakeData.features)

// define the marker colors as they relate to the earthquake magnitudes
function Color(magnitude) {
    if (magnitude > 5) {
        return 'red'
    } else if (magnitude > 4) {
        return 'darkorange'
    } else if (magnitude > 3) {
        return 'orange'
    } else if (magnitude > 2) {
        return 'yellow'
    } else if (magnitude > 1) {
        return 'darkgreen'
    } else {
        return 'lightgreen'
    }
};

// Set Marker Size
function markerSize(mag) {
    if (mag===0){
        return 1;
    }
    
    return mag*4;
    }

});