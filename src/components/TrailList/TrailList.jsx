import TrailListItem from "../TrailListItem/TrailListItem";

const trailTestItems = [
  {name: "Trail 1", location: "Location 1", length: "Length 1", difficulty: "Difficulty 1", rating: "Rating 1", comments: "Comments 1"},
  {name: "Trail 2", location: "Location 2", length: "Length 2", difficulty: "Difficulty 2", rating: "Rating 2", comments: "Comments 2"},
  {name: "Trail 3", location: "Location 3", length: "Length 3", difficulty: "Difficulty 3", rating: "Rating 3", comments: "Comments 3"},
  {name: "Trail 4", location: "Location 4", length: "Length 4", difficulty: "Difficulty 4", rating: "Rating 4", comments: "Comments 4"},
]

export default function TrailList() {
  const trails = trailTestItems.map(trail =>
    <TrailListItem
      key={trail._id}
      trailTestItem={trail}
    />
  );
  return (
    <main>
      {trails}
    </main>
  );
}