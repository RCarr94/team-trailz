

export default function TrailListItem({ trailItem }) {
  return (
    <div>
      <h2>{trailItem.name}</h2>
      <p>{trailItem.location}</p>
      <p>{trailItem.length}</p>
      <p>{trailItem.rating}</p>
      <p>{trailItem.description}</p>
      <p>{trailItem.comments}</p>
    </div>
  );
}