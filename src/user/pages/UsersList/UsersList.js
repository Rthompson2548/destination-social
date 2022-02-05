import React from "react";
import "./UsersList.css";
import UserItem from "../../components/UserItem/UserItem";
import Card from "../../../shared/components/UIElements/Card/Card";
/** displays a list of all users, or a not found message if no users exist */
const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users Found</h2>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <ul className="users-list">
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
