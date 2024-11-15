import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const UofACoordinates = [53.5232, -113.5263];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 z-0">
      <div className="w-full h-full max-w-2xl mx-auto">
        <MapContainer
          center={UofACoordinates}
          zoom={15}
          scrollWheelZoom={true}
          zoomControl={false}
          className="w-full h-full rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <Marker position={UofACoordinates}>
            <Popup>University of Alberta, Edmonton</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Map;
