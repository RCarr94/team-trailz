import { useState, useEffect } from "react"
// Services
import * as trailsAPI from "../../utilities/api/trails";
// Components
import TrailList from "../../components/TrailList/TrailList"
import SearchFilter from "../../components/SearchFilter/SearchFilter";




export default function HomePage({ trailItems, setTrailItems }) {
  const [filteredData, setFilteredData] = useState(trailItems);

  useEffect(function () {
    async function getTrails() {
      const trails = await trailsAPI.getAll();
      setTrailItems(trails);
      setFilteredData(trails);
    }
    getTrails();
  }, [setTrailItems]);


  return (
    <>
      <h1 className="text-3xl text-center">Trails</h1>
      <div className="w-1/2 mx-auto">
        <SearchFilter trailItems={trailItems} setFilteredData={setFilteredData}/>
      </div>
        <TrailList trailItems={filteredData} />
    </>
  )
}