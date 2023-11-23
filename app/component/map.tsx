"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L, { LatLng } from "leaflet"; // Corrected import
import LocationMarker from "./location";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const defaultCenter = new LatLng(40.7531, -73.9712);

interface MapComponentProps {
  position: LatLng | null;
  setPosition: (latlng: LatLng | null) => void;
  target: LatLng | null;
}

const MapPick: React.FC<MapComponentProps> = ({
  position,
  setPosition,
  target,
}) => {
  return (
    <div className="h-full w-full">
      <MapContainer center={defaultCenter} zoom={13} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker
          position={position}
          setPosition={setPosition}
          target={target}
        />
      </MapContainer>
    </div>
  );
};

export default MapPick;
