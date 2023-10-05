

export default function TrailListItem({ trailTestItem }) {
  return (
    <div>
      <h2>{trailTestItem.name}</h2>
      <p>{trailTestItem.location}</p>
      <p>{trailTestItem.length}</p>
      <p>{trailTestItem.rating}</p>
      <p>{trailTestItem.description}</p>
      <p>{trailTestItem.comments}</p>
    </div>
  );
}