import React, { useState, useContext } from "react";
import "./PlaceItem.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import Button from "../../../shared/components/FormElements/Button/Button";
import Modal from "../../../shared/components/UIElements/Modal/Modal";
import Map from "../../../shared/components/UIElements/Map/Map";
import { UserContext } from "../../../shared/user-context/user-context";

const PlaceItem = (props) => {
  /** gives the component access to the login status of the user */
  const loginStatus = useContext(UserContext);
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  /** state of display of the delete warning modal alert */
  const [showDeletePlaceWarning, setShowDeletePlaceWarning] = useState(false);

  const deletePlaceHandler = () => {
    /** displays delete warning alert when delete button is clicked */
    setShowDeletePlaceWarning(true);
  };

  const cancelDeletePlaceHandler = () => {
    /** removes delete warning alert when cancel button is clicked */
    setShowDeletePlaceWarning(false);
  };

  const confirmDeletePlaceHandler = () => {
    console.log("Deletion confirmed: Your place is being removed");
    /** removes delete warning alert */
    setShowDeletePlaceWarning(false);
  };

  return (
    <React.Fragment>

      <Modal
        style={{ marginTop: "100px" }}
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        className="footer-button"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        header="Are you sure?"
        footerClass=""
        /** only shows delete warning when the initial delete button is clicked */
        show={showDeletePlaceWarning}
        /** displays original page of place when cancelled */
        onCancel={cancelDeletePlaceHandler}
        footer={
          <div>
              <Button onClick={cancelDeletePlaceHandler}>Cancel</Button>        
              <Button onClick={confirmDeletePlaceHandler}>Delete</Button>     
          </div>
        }
      >
        <p>
          Are you sure you want to delete this place? This cannot be undone.
        </p>
      </Modal>
      <li className="place-item">
        <h1>{`${props.pageTitle}'s places`}</h1>
        <Card className="place-item-card">
          <div>
            <img
              className="place-item-image"
              src={props.imageUrl}
              alt={props.title}
            />
          </div>

          <div className="place-item-information">
            <div>
              
              <h2 className="place-item-title">{props.title}</h2>
              <p className="place-item-description">{props.description}</p>
              <h3 className="place-item-address">{props.address}</h3>
            </div>
            <div className="place-item-buttons place-item__actions">
              <Button inverse onClick={openMapHandler}>Map View</Button>
              {/* only displays the edit & delete buttons if the user is logged in */}
              {loginStatus.isLoggedIn && (
                 <Button to={`/places/${props.id}`}>Edit</Button>
              )}                     
      
              {loginStatus.isLoggedIn && (
                <Button onClick={deletePlaceHandler}>Delete</Button>
              )}    
            </div>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
