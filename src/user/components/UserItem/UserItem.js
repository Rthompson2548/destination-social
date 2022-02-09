import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Avatar from "../../../shared/components/UIElements/Avatar/Avatar";

const UserItem = (props) => {
  return (
    <li className="user">
        <Link to={`/${props.id}/places`}>
          <div className="user-container">
            <div className="right">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-info">
              <h2 className="user-name">{props.name}</h2>
              <h3 className="user-places">
                {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </div>
        </Link>
    </li>
  );
};

export default UserItem;
