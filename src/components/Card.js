import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.item.image}`} className="card-image"></img>

      <div className="card-info">
        <h1> {props.item.country}</h1>
        <h3>{props.item.location}</h3>
        <h4>{props.item.date}</h4>
        <p> {props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
