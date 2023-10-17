import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utilities/services/trails';


export default function TrailListItem({ trailItem }) {

  const city = extractCityFromLocation(trailItem.location);

  function extractCityFromLocation(location) {
    const parts = location.split(',');
    
    if (parts.length >= 3) {
      const city = parts[parts.length - 3].trim();
      return city;
    }
    return null;

  }


  return (
    <div className="relative flex w-full max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl ">
      <div className="relative mx-6 mt-6 rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <div className="h-[12rem] w-full overflow-hidden">
          <img src={trailItem.image} alt="ui/ux review check" className="h-auto w-full object-cover" />
        </div>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-4 flex flex-col">
        <div className="mb-2">
          <h5 className="block font-sans text-base font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {trailItem.trailName}, {city}
          </h5>
        </div>
          
        <div>
          <p className="flex-grow font-sans text-sm font-light leading-relaxed text-gray-700 antialiased overflow-ellipsis">
            Difficulty: {capitalizeFirstLetter(trailItem.difficulty)}
          </p>
          <p className="font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-yellow-700">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.760-.415-2.212 .749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg> */}
            {trailItem.length} km
          </p>
        </div>
        <Link to={`/trails/${trailItem._id}`} className="mt-2">
          <button
            className="block w-full select-none rounded-lg bg-green-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}









