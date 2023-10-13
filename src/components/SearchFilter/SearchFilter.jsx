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
    <div className="flex items-center">
      <input
        className="border border-gray-400 text-gray-900 text-base rounded-lg block w-full pl-4 p-2 "
        type="text"
        placeholder="Search Trails"
        value={searchTrails}
        onChange={handleSearch}
      />
    </div>
  );
}; 