// components/LocationMarker.tsx
import React, { useRef, useEffect } from "react";
import { Marker, Popup, Polyline, useMapEvents } from "react-leaflet";
import L, { LatLng } from "leaflet";

var redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface LocationMarkerProps {
  position: LatLng | null;
  setPosition: (latlng: LatLng | null) => void;
  target: LatLng | null;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({
  position,
  setPosition,
  target,
}) => {
  const positionMarkerRef = useRef<L.Marker>(null);
  const targetMarkerRef = useRef<L.Marker>(null);

  useMapEvents({
    click(e) {
      if (position == null) {
        setPosition(e.latlng);
      }
    },
  });

  useEffect(() => {
    if (position && targetMarkerRef.current) {
      setTimeout(() => {
        if (targetMarkerRef.current) {
          targetMarkerRef.current.openPopup();
        }
      }, 15);
    }
  }, [position]);

  if (!position || !target) return null;

  const distance = position.distanceTo(target); // Distance in meters

  return (
    <>
      <Marker position={position} ref={positionMarkerRef}></Marker>

      <Marker position={target} icon={redIcon} ref={targetMarkerRef}>
        <Popup>You are off by {distance.toFixed(1)} m</Popup>
      </Marker>
      <Polyline positions={[position, target]} dashArray="5, 10" />
    </>
  );
};

export default LocationMarker;
