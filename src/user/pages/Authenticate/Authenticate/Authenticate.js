import React from "react";
import "./Authentic.css";
import Login from "../Login/Login";

/**
 * need to check if a user's id already exists
 * if not
 */
const Authenticate = (props) => {
  return (
    <div className="login">
      <Login />
    </div>
  );
};

export default Authenticate;
