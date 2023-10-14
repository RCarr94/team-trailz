
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'

export default function NavBar({ user, setUser }) {
  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      <Link to="/about">About TeamTrailz</Link>
      &nbsp; | &nbsp;
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      { user ?
        <>
          <Link to="/trails/new">Add A Trail</Link>
          &nbsp; | &nbsp;
          <span className="name">Hey there!</span>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
        :
        <>
          <Link to="/signin">Sign In</Link>
          &nbsp; | &nbsp;
          <Link to="/register">Register</Link>
        </>
      }
      </nav>
  );
}