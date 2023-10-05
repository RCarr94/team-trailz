import { useState, useEffect } from "react"

// Services
import * as trailsAPI from "../../utilities/api/trails-api";

// Components
import TrailList from "../../components/TrailList/TrailList"
import SearchFilter from "../../components/SearchFilter/SearchFilter";

const trailTestItems = [
  { _id: 1, name: 'Trail 1', location: 'Location 1', length: 'Length 1', difficulty: 'Difficulty 1', rating: 'Rating 1', comments: 'Comments 1' },
  { _id: 2, name: 'Trail 2', location: 'Location 2', length: 'Length 2', difficulty: 'Difficulty 2', rating: 'Rating 2', comments: 'Comments 2' },
  { _id: 3, name: 'Trail 3', location: 'Location 3', length: 'Length 3', difficulty: 'Difficulty 3', rating: 'Rating 3', comments: 'Comments 3' },
  { _id: 4, name: 'Trail 4', location: 'Location 4', length: 'Length 4', difficulty: 'Difficulty 4', rating: 'Rating 4', comments: 'Comments 4' },
];

export default function HomePage() {
  const [trailItems, setTrailItems] = useState(trailTestItems);
  const [filteredData, setFilteredData] = useState(trailItems);

  // useEffect(function() {
  //   async function getTrails() {
  //     const trails = await trailsAPI.getAll();
  //     setTrailItems(trails);
  //   }
  //   getTrails();
  // }, []);


  return (
    <main>
      <h1>hello ryan </h1>
      <div>
        <SearchFilter trailItems={trailItems} setFilteredData={setFilteredData}/>
        <TrailList trailItems={filteredData} />
      </div>
    </main>
  )
}