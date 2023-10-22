import { usePlacesWidget } from 'react-google-autocomplete';
import { useState } from 'react';



export default function GoogleSearchBar({ location, setLocation, handleChange, setLatitude, setLongitude }) {
  const [inputLocation, setInputLocation] = useState(location);

  const { ref: materialRef } = usePlacesWidget({
    apiKey: 'AIzaSyDVRXAWPrWRiy9bqP5di-gTkYjrhW940ec',
    onPlaceSelected: (place) => {
      console.log('Selected Place:', place);
      if (place.formatted_address) {
        setInputLocation(place.formatted_address);
        setLocation(place.formatted_address);
      }
      if (place.geometry && place.geometry.location) {
        console.log('Latitude:', place.geometry.location.lat());
        console.log('Longitude:', place.geometry.location.lng());
        setLatitude(place.geometry.location.lat());
        setLongitude(place.geometry.location.lng());
      }
    },
    options: {
      types: [],
      componentRestrictions: null,
    },
  });


  
  return (
    <>
      <label className="mb-3 block text-base font-medium text-green-800 text-left" htmlFor="location">
        Location
      </label>
      <input
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-700 focus:shadow-md"
        type="text"
        name="location"
        value={inputLocation}
        onChange={(e) => {
          setInputLocation(e.target.value);
          setLocation(e.target.value);
          handleChange(e);
        }}
        ref={materialRef}
        autoComplete="on"
        required
      />
    </>
  );
}
