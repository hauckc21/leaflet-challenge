console.log("this is logic.js");

const API_KEY = "pk.eyJ1IjoiaGF1Y2tjIiwiYSI6ImNrZnkzMDIyazF6ZWYycm10MTYxNGdxOWQifQ.HOOSVyjfl9NHhChgPB1YWgeyJ1IjoiY29sbGVlbjU0NyIsImEiOiJja2Z5YzFrc2ExbDBpMzFxcWc4NHpsZ2ZtIn0.etuB1olIeSofH9wCvn6aPA";

// Get data url
// url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
var api_quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

var gray = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
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

