import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState(null);
  const api_url ="https://api.adviceslip.com/advice";

  async function getApi() {
    const response = await axios.get(api_url);
    setQuote(response.data.slip.advice);
    console.log(response.data.slip.advice);
  }

  useEffect(() => {
    getApi();
  },[]);

  function getCards() {
    let ids = [];
    while(ids.length < 4) {
      let id = Math.floor(Math.random() * 224);
      if (!ids.includes(id)) {
        ids.push(id);
      }
    }
    console.log(ids);
  }

  getCards();

  return (
    <>
      <h1>Zen Quotes</h1>
      {quote ? <p>{quote}</p> : <p>Loading...</p>}
    </>
  )
}

export default App
