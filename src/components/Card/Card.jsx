import React from "react";

function Card({ card, onClick, isFlipped }) {
return (
        <div
            className={`card ${isFlipped ? "flipped" : ""}`}
            onClick={() => onClick(card)}
        >
            {isFlipped ? <p>{card.advice}</p> : <p> ? </p>}
        </div>
    );
}

export default Card;
