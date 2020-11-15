//define urls
var api_quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

//define markers for map
function marketSize(magnitude) {
    return magnitude * 4;
};

var earthquakes = new L.LayerGroup();

//api call to get geoson data
d3.json(api_quakes, function(geoJson) {
    L.geoJSON(geoJson.features, {
        pointToLayer: function(geoJsonPoint, latlng) {
            return L.circleMarket(latlng, {radius: markerSize(geoJsonPoint.properties.mag) });
        },

        style: function(geoJsonFeature) {
            return {
                fillColor: Color(geoJsonFeature.properties.mag),
                fillOpacity: 0.7,
                weight: 0.1,
                color: "black"
            }
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                "<h4 style='text-align:center;'>" + new Date(feature.properties.time) +
                "</h4> <hr> <h5 style='text-align:center;'>" + feature.properties.title + "</h5>");
        }
    }).addTo(earthquakes);
    createImageBitmap(earthquakes);
});