import { useState, useEffect } from "react"

// Services
import * as trailsAPI from "../../utilities/api/trails-api";

// Components
import TrailList from "../../components/TrailList/TrailList"

export default function HomePage() {
  const [trailItems, setTrailItems] = useState([]);

  useEffect(function() {
    async function getTrails() {
      const trails = await trailsAPI.getAll();
      setTrailItems(trails);
    }
    getTrails();
  }, []);

  return (
    <main>
      <h1>hello ryan </h1>
      <div>
        <TrailList trailItems={trailItems}/>
      </div>
    </main>
  )
}