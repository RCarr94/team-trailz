import { Link } from 'react-router-dom';


export default function TrailListItem({ trailItem }) {
  return (
    <div>
      <Link 
        to={`/trails/${trailItem.name}`}>
        <h2>{trailItem.name}</h2>
      </Link>
      <p>{trailItem.location}</p>
      <p>{trailItem.length}</p>
      <p>{trailItem.rating}</p>
      <p>{trailItem.description}</p>
      <p>{trailItem.comments}</p>
    </div>
  );
}