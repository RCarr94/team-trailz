import { useState } from 'react';
import './SearchFilter.css';


export default function SearchFilter({ trailItems, setFilteredData }) {
  const [searchTrails, setSearchTrails] = useState('');
  

  const handleSearch = function(evt) {
    const query = evt.target.value.toLowerCase();
    setSearchTrails(query);

    const filteredResults = trailItems.filter(trail => 
      trail.name.toLowerCase().includes(query.toLowerCase()) || trail.location.toLowerCase().includes(query)
    );
    setFilteredData(filteredResults);
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Trails"
        value={searchTrails}
        onChange={handleSearch}
      />
    </div>
  );
}; 