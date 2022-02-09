import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
       <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
   </div>
  );
};

export default Card;
