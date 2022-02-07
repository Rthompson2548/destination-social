import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../user-context/user-context";
import "./NavLinks.css";

const NavLinks = (props) => {

  /** component will re-render any time this context changes */
  const loginStatus = useContext(UserContext);

  return (
    <ul className="nav-links">
      <li>
        {/* only if there is nothing after the "/" in url path */}
        <NavLink className="nav-link-item" to="/" exact>
          Home
        </NavLink>
      </li>

      {/* only rendered if user is logged in */}
      {loginStatus.isLoggedIn &&
        <li>  
          <NavLink className="nav-link-item" to="/u1/places">
            My places
          </NavLink>
        </li>
      }
      {/* only render if user is logged in */}
      {loginStatus.isLoggedIn &&
        <li>
          <NavLink className="nav-link-item" to="/places/new">
            Add place
          </NavLink>
        </li>
      }

      {/* only render if the user is not already logged in */}
      {!loginStatus.isLoggedIn &&
        (<li>
          <NavLink className="nav-link-item" to="/login">
            Log In
          </NavLink>
        </li>)
      }
      <li>
        <NavLink className="nav-link-item" to="/signup">
          Sign Up
        </NavLink>
      </li>

      {/* only displays the log out button in nav bar if the user is logged in */}
      {loginStatus.isLoggedIn && (
        <li>
          <button className="log-out-button" onClick={loginStatus.logout}>Log Out</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
