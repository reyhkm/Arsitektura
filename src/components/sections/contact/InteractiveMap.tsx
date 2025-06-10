"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet library itself
import { useEffect } from 'react';

// Fix for default Leaflet icon issue with Webpack
// This needs to be done once globally, or ensure your bundler handles it.
// If you still have issues, you might need to configure this in your next.config.js or a global setup file.
useEffect(() => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}, []);

interface InteractiveMapProps {
  position: [number, number]; // Latitude, Longitude
  zoom?: number;
  popupText?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  position,
  zoom = 13,
  popupText = 'Arkitektura Digital Head Office'
}) => {
  // Ensure component only renders on client-side where Leaflet can access `window`
  if (typeof window === 'undefined') {
    return <div className="h-[400px] w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">Memuat peta...</div>;
  }

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className="h-[400px] w-full rounded-lg shadow-md z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {popupText}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;
