"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

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
  useEffect(() => {
    // Fix for default Leaflet icon issue with Webpack
    // This needs to be done once, ideally globally.
    // Placing it here runs it once per component mount.
    // Add a check to prevent re-applying if already done.
    if (!(L.Icon.Default.prototype as any)._iconUrlFixed) {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
      (L.Icon.Default.prototype as any)._iconUrlFixed = true; // Mark that this fix has been applied
    }
  }, []);

  // Ensure component only renders on client-side where Leaflet can access `window`
  if (typeof window === 'undefined') {
    return <div className="h-[400px] w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">Memuat peta...</div>;
  }

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className="h-[400px] w-full rounded-lg shadow-md z-0">
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
