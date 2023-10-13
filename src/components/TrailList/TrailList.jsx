import TrailListItem from "../TrailListItem/TrailListItem";



export default function TrailList({ trailItems }) {
  const trails = trailItems.map(trail =>
    <TrailListItem
      key={trail._id}
      trailItem={trail}
    />
  );
  return (
    <main className="flex flex-wrap gap-4 justify-evenly">
      {trails}
    </main>
  );
}