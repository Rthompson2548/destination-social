import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        {/* only if there is nothing after the "/" in url path */}
        <NavLink className="nav-link-item" to="/" exact>
          All users
        </NavLink>
      </li>
      <li>
        {/* only if logged in */}
        <NavLink className="nav-link-item" to="/u1/places">
          My places
        </NavLink>
      </li>
      <li>
        {/* only if logged in */}
        <NavLink className="nav-link-item" to="/places/new">
          Add place
        </NavLink>
      </li>
      <li>
        {/* only if not logged in */}
        <NavLink className="nav-link-item" to="/login">
          Login
        </NavLink>
      </li>
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
