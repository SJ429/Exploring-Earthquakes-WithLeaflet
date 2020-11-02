# Earthquakes
 
This project pulled earthquake data from the USGS website and looked at the relationship between tectonic plates and seismic activity.  
 
Leaflet was used to create base maps to choose from as well as separated out two different data sets into overlays that can be turned on and off independently with layer controls.

The JavaScript file "logic.js" pulled in the json data and generated maps using Leaflet and mapbox. 

Each circle represents an earthquake and the size and color reflect the magnitude of the earthquake.

![](Leaflet-Step-1/Images/Capture%20faultline%20final.PNG)

Maps are hoseted at https://sj429.github.io/Exploring-Earthquakes-WithLeaflet/


The dataset selected was all earthquakes for the past seven days, specifically, https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson.
Also, data set from the tectonic plates from https://github.com/fraxen/tectonicplates was used for visualization.

The United States Geological Survey, or USGS for short is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.


