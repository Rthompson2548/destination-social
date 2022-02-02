import React from "react";
import "./PlaceList.css";
import PlaceItem from "../PlaceItem/PlaceItem";
import Card from "../../../shared/components/UIElements/Card/Card";
import Button from "../../../shared/components/FormElements/Button/Button";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2>No places found. Maybe create one?</h2>
        {/* redirects user to new place page */}
        <Button to="/places/new">Share place</Button>
      </Card>
    );
  }
  return (
    <ul>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          imageUrl={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
