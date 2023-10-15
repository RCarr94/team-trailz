import { usePlacesWidget } from 'react-google-autocomplete';

const defaultState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip_code: '',
  googleMapLink: '',
};

export default function GoogleSearchBar() {

  const { ref: materialRef } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    onPlaceSelected: (place) => {
      console.log('Selected Place:', place);
      if (place.geometry && place.geometry.location) {
        console.log('Latitude:', place.geometry.location.lat());
        console.log('Longitude:', place.geometry.location.lng());
      }
    },
    options: {
      types: [],
      componentRestrictions: null,
    },
  });

  
  return (
    <div style={{ width: '250px', marginTop: '20px' }}>
      <span style={{ color: 'black' }}>Material UI</span>
      <input ref={materialRef} />
    </div>
  );
}
