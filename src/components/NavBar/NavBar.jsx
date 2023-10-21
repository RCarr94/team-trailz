
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'

export default function NavBar({ user, setUser }) {
  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className="shadow-lg border-green-500 mb-10">
      <div className="w-full mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center w-2/5 w-auto order-1 mt-4 md:mt-0">
            <svg
              className="icon icon-tabler icon-tabler-tree"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13l-2 -2" />
                <path d="M12 12l2 -2" />
                <path d="M12 21v-13" />
                <path d="M9.824 15.995a3 3 0 0 1 -2.743 -3.69a2.998 2.998 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
              </g>
            </svg>
            <Link to="/" className="md:text-3xl text-lg text-gray-700 hover:bg-transparent border-0 block pl-3 pr-4 py-2 hover:text-green-700 p-0">
              TeamTrailz
            </Link>
          </div>

          <div className="w-3/5 w-auto order-1 flex items-center justify-end md:space-x-8 mt-4 md:mt-0" id="mobile-menu-3">
            <ul className="flex-row flex md:space-x-8 ">
              <li>
                <Link to="/about" className="text-base text-gray-700 hover:bg-transparent border-0 block pl-3 pr-4 py-2 hover:text-green-700 p-0">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-700 hover:bg-transparent border-0 block pl-3 pr-4 py-2 hover:text-green-700 p-0">
                  Home
                </Link>
              </li>
              {user ? (
                <>
                  <Link
                    to="/trails/new"
                    className="text-base text-gray-700 hover:bg-transparent border-0 block pl-3 pr-4 py-2 hover:text-green-700 p-0"
                  >
                    Add A Trail
                  </Link>
                  <Link
                    to=""
                    onClick={handleLogOut}
                    className="text-base text-gray-700 hover:bg-transparent border-0 block pl-3 pr-4 py-2 hover:text-green-700 p-0"
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signin" className="text-base text-gray-700 hover:bg-transparent border-0 block pl-3 pr-4 py-2 hover:text-green-700 p-0">
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="text-base text-gray-700 hover:bg-transparent border-0 block pl-3 pr-4 py-2 hover:text-green-700 p-0"
                  >
                    Register
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}