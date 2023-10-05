import TrailListItem from "../TrailListItem/TrailListItem";



export default function TrailList({ trailItems }) {
  const trails = trailItems.map(trail =>
    <TrailListItem
      key={trail._id}
      trailItem={trail}
    />
  );
  return (
    <main>
      {trails}
    </main>
  );
}