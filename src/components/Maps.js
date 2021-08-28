import React from "react";
import "./Map.css";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
export default function Map() {
  const [viewport, setViewport] = useState({
    width: 2000,
    height: 600,
    latitude: 22.4877,
    longitude: 77.0376,
    zoom: 8,
    pitch:40
  });
  return (
    <div className="map">
    <ReactMapGL
      mapboxApiAccessToken={
        "pk.eyJ1IjoiYWpheWRldiIsImEiOiJja3N2cXQzZmQxbDcyMzFwbm94ZnVxa2syIn0.gvwPvkEKuhpYvJsp4ATq4w"
      }
      mapStyle = {"mapbox://styles/mapbox/dark-v10"}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    /></div>
  );
}