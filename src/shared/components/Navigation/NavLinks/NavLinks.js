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
          All users
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
        <li>
          <NavLink className="nav-link-item" to="/login">
            Login
          </NavLink>
        </li>
      }
      <li>
        {/* only if not logged in */}
        <NavLink className="nav-link-item" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
