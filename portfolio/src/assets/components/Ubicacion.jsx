import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuración del ícono del marcador para evitar errores de carga de iconos
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CustomMarker = ({ position, photoUrl, location }) => {
  const customIcon = L.divIcon({
    className: 'custom-icon',
    html: `
      <div class="relative w-16 h-16 rounded-full border-4 border-lightgreen overflow-hidden shadow-lg">
        <img src="${photoUrl}" alt="Location" class="w-full h-full object-cover"/>
      </div>
    `,
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>
        <div className="flex flex-col items-center">
          <img src={photoUrl} alt="Location" className="w-32 h-32 rounded-full object-cover" />
          <p>{location}</p>
        </div>
      </Popup>
    </Marker>
  );
};

const MapWithBubble = ({ photoUrl, location }) => {
  const position = [32.7767, -96.7970]; // Coordenadas para Dallas, Texas
  const mapTilerAccessToken = 'QonBQoyfa2gXSAa4mHk1'; // Reemplaza con tu token de MapTiler

  const mapTilerUrl = `https://api.maptiler.com/maps/1ddf56e4-3a70-40bb-8478-2c1e89fb0acc/256/{z}/{x}/{y}.png?key=${mapTilerAccessToken}`;
  return (
    <div className="w-full h-full relative">
      <MapContainer center={position} zoom={10} className="w-full h-96 rounded-lg">
        <TileLayer
          url={`https://api.maptiler.com/maps/basic-dark/256/{z}/{x}/{y}.png?key=${mapTilerAccessToken}`}

          attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
        />
        <CustomMarker position={position} photoUrl={photoUrl} location={location} />
      </MapContainer>
      
    </div>
  );
};

export default MapWithBubble;
