import { useState, useEffect } from "react"
// Services
import * as trailsAPI from "../../utilities/api/trails";
// Components
import TrailList from "../../components/TrailList/TrailList"
import SearchFilter from "../../components/SearchFilter/SearchFilter";




export default function HomePage({ trailItems, setTrailItems, user }) {
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
      { user ?
      <h1 className="text-3xl text-center mb-8">Hey there, {user.name}!</h1>
      :
      <h1 className="text-2xl text-center mb-8">Welcome to TeamTrailz!</h1>
      }
      <div className="w-1/2 mx-auto mb-8">
        <SearchFilter trailItems={trailItems} setFilteredData={setFilteredData}/>
      </div>
        <TrailList trailItems={filteredData} />
    </>
  )
}