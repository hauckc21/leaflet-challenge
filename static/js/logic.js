//define urls
var api_quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

//define markers for map
function marketSize(magnitude) {
    return magnitude * 4;
};

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

