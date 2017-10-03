const mapboxgl = require("mapbox-gl");
const makeMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiZWxsYXBpdGFzc2kiLCJhIjoiY2o4YnFuNTFlMDBwbDJ4c2Z1MXM1dzM4OCJ9.0vIPEe9Sv0KyFd6ItAZNFw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = makeMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);
