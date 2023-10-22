import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import './Map.css';

export default function Map({ trailLat, trailLng}) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDVRXAWPrWRiy9bqP5di-gTkYjrhW940ec',
  });

  if (!isLoaded) return <div>Loading...</div>
  return <MakeMap trailLat={trailLat} trailLng={trailLng}/>;
}




function MakeMap({trailLat = 44, trailLng = -123}) {
    const lat = trailLat;
    const lng = trailLng;
  const center = useMemo(() => ({ lat: lat, lng: lng }), []);
  return (
    <div className="w-full">
      <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName="map-container">
      <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}
