import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TrailDetailsPage({ trailItems }) {
const { trailName } = useParams();
const trail = trailItems.find((trailItem) => trailItem.name === trailName);

  return (
    <>
      <div className="details-page-container">
        <div className="details-card-container">
          <h2 className="bold-header">Trail:{trailName}</h2>
          <p>{trail.location}</p>
          <p>{trail.length}</p>
          <p>{trail.difficulty}</p>
          <p>{trail.rating}</p>
        </div>
        <div className="comments-section">
          <p>LOOP SO THAT EACH COMMENT WILL SHOW UP FOR SPECIFIC TRAIL</p>
        </div>
      </div>
    </>
  )
}