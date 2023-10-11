import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import './Map.css';

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  if (!isLoaded) return <div>Loading...</div>
  return <MakeMap />;
}

function MakeMap() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap
      zoom={8}
      center={center}
      mapContainerClassName="map-container">
      <MarkerF position={center} />
      </GoogleMap>
  );
}
