# leaflet-challenge

The United States Geological Survey, or USGS for short is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

This project pulls earthquake data from the USGS website. The dataset selected was all earthquakes for the past seven days, specifically, https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson. The JavaScript file "logic.js" pulls in the json data and generates map using Leaflet and mapbox. Each circle represents an earthquake and the size and color reflect the magnitude of the earthquake. 
the maps display the relationship between tectonic plates and seismic activity. Thus, a second data set from the tectonic plates from https://github.com/fraxen/tectonicplates was used for visualization.
