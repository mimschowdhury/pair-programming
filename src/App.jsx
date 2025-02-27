import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Board from "./components/Board/Board";
import Card from './components/Card/Card';

function App() {
  const [quotes, setQuotes] = useState([]);
  const api_url ="https://api.adviceslip.com/advice";

  async function getApi(ids) {
    let quoteList = [];
    for (let i = 0; i < ids.length; i++) {
      const response = await axios.get(`${api_url}/${ids[i]}`);
      quoteList.push(response.data.slip.advice);
    }

    quoteList = [...quoteList, ...quoteList];

    shuffleCards(quoteList);

    setQuotes(quoteList);
  }

  function getIds() {
    let ids = [];
    while (ids.length < 3) {
      let id = Math.floor(Math.random() * 224);
      if (!ids.includes(id)) {
        ids.push(id);
      }
    }
    return ids;
  }

  useEffect(() => {
    const ids = getIds();
    getApi(ids);
  }, []);

  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
       const randomIndex = Math.floor(Math.random() * i);
       const currIndex = i - 1;
       swap(array, currIndex, randomIndex)
    }
    return array;
  }

  return (
    <>
      <h1 className="heading">Advice Quest ✨</h1>
      <p className="instructions">Flip the cards to reveal some fun pieces of advice! Your goal is to match two identical quotes.</p>
      <p className="instructions">The game starts with six face-down cards, each containing a unique piece of advice. Three of the quotes have matching duplicates randomly placed on the board.</p>
      <p className="instructions">If the cards don't match, click any of the cards, and they will flip over, resetting the game. The game ends when all three matching pairs have been found!</p>

      <Board quotes={quotes}/>
    </>
  )
}

export default App
