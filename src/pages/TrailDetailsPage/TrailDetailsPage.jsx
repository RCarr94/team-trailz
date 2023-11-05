import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Map from '../../components/Map/Map';
import { capitalizeFirstLetter } from '../../utilities/services/trails';

export default function TrailDetailsPage({ trailItems, user }) {
const { trailId } = useParams();

const trail = trailItems.find(trail => trail._id === trailId);
console.log(trail);

  return (
    <>
      {user && trail.user == user._id ? (
      <div>
        <Link to={`/edit/${trailId}`}><button>EDIT</button> </Link>
      </div>
      ) : null}
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <aside className="sm:w-full md:w-1/2">
          <div className="w-full h-full border-4 border-black">
            <img alt="trail" src={trail.image} />
          </div>
          <div className="w-full block">
              <Map trailLat={trail.latitude} trailLng={trail.longitude} />
          </div>
        </aside>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-4xl leading-none text-gray-600  ">{trail.trailName}</h1>
          </div>

          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Location</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{trail.location}</p>
            </div>
          </div>

          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Trail Length</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{trail.length} km</p>
            </div>
          </div>

          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Difficulty</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{capitalizeFirstLetter(trail.difficulty)}</p>
            </div>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{trail.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}