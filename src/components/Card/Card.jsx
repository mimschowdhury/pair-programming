import React from "react";
import "../Card/Card.scss";

function Card({ id, card, isFlipped, onClick }) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
    //   onClick={() => onClick(`${card}:${id}`)}
    onClick={() => onClick({card, id})}
    >
      {isFlipped ? <p>{card}</p> : <p>?</p>}
    </div>
  );
}

export default Card;
