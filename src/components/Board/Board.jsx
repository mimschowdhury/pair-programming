import Card from "../Card/Card";
import React, { useState } from "react";
import "./Board.scss";

function Board({ quotes, onCardClick }) {
  const [flippedCards, setFlippedCards] = useState([]);
  let isComplete = false;

  const handleCardClick = (card) => {
    if (flippedCards.includes(card.id)) {
        setFlippedCards([]);
        return; 
    }
    setFlippedCards([...flippedCards, card.id]); 
    onCardClick(card.card);
    if(flippedCards.length=6) {
        isComplete=true;
    }
  };

  return (
    <div className="board">
      {quotes.map((quote, index) => (
        <Card
          key={index}
          id={index}
          card={quote}
          onClick={handleCardClick}
          isFlipped={flippedCards.includes(index)} 
        />
      ))}
    </div>
  );
}

export default Board;