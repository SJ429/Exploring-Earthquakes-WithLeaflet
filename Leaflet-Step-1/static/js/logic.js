// Store API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson"
  console.log(queryUrl)
// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once there is a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  function onEachLayer(feature) {
    return new L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
      radius: circleSize(feature.properties.mag),
      fillOpacity: 0.8,
      color: getColor(feature.properties.mag),
      fillColor: getColor(feature.properties.mag)
    });
  }

  // Define a function to run once for each feature in the features array
  // Give each feature a popup to describe the magnitude, place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindTooltip("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p><hr><p>" + feature.properties.mag + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: onEachLayer
  });

  // Send earthquakes layer to the createMap function
  createMap(earthquakes);
}

// Create maps
function createMap(earthquakes) {

  // Define maps: streetmap, satellite and darkmap layers
  var streets =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution:  "Map data &copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
   tileSize: 512,
   maxZoom: 18,
   zoomOffset: -1,
   id: "mapbox/streets-v11",
   accessToken: API_KEY
})
  var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-v9",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });
  
  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streets,
    "Satellite Map": satellite,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create map and give the map and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streets, earthquakes]
  });

  // Create a layer control
  // Pass in the baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
// Create function to set the color for different magnitude
function getColor(magnitude) {
  // Conditionals for magnitude
  if (magnitude >= 5) {
    return "darkred";
  }
  else if (magnitude >= 4) {
    return "red";
  }
  else if (magnitude >= 3) {
   return "darkorange";
  }
  else if (magnitude >= 2) {
    return "yellow";
  }
  else if (magnitude >= 1) {
    return "yellowgreen";
  }
  else {
    return "green";
  }
};

// Define a circleSize function that will give each size magnitude of the earthquake in each location
function circleSize(magnitude) {
return magnitude*3;
}