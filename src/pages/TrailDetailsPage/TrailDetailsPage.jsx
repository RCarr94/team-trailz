import { getById } from '../../utilities/api/trails';
import { useParams } from 'react-router-dom';

export default function TrailDetailsPage({ trailItems }) {
const { trailId } = useParams();

const trail = trailItems.find(trail => trail._id === trailId);

  return (
    <>
      <div className="details-page-container">
        <div className="details-card-container">
          <h2 className="bold-header">Trail: {trail.trailName}</h2>
          <p>Location: {trail.location}</p>
          <p>Length: {trail.length} km</p>
          <p>Difficulty: {trail.difficulty}</p>
        </div>
        <div className="comments-section">
          <p>LOOP SO THAT EACH COMMENT WILL SHOW UP FOR SPECIFIC TRAIL</p>
        </div>
      </div>
    </>
  )
}