import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
// Services
import * as trailsAPI from "../../utilities/api/trails-api";

// Components
import TrailList from "../../components/TrailList/TrailList"
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import TrailDetailsPage from "../TrailDetailsPage/TrailDetailsPage";



export default function HomePage({ trailItems, trailTestItems }) {
  
  const [filteredData, setFilteredData] = useState(trailItems);

  // useEffect(function() {
  //   async function getTrails() {
  //     const trails = await trailsAPI.getAll();
  //     setTrailItems(trails);
  //   }
  //   getTrails();
  // }, []);


  return (
    <>
      <div className="w-1/2 mx-auto">
        <SearchFilter trailItems={trailItems} setFilteredData={setFilteredData}/>
      </div>
        <TrailList trailItems={filteredData} />
    </>
  )
}