import { useState } from "react";
import axios from "axios";

function Quote() {
    const [quote, setQuote] = useState("");

    const api_url = "https://api.adviceslip.com/advice";

    async function fetchQuote() {
    try {
        const response = await axios.get(api_url);
        setQuote(response.data.slip.advice);
    } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Failed to fetch quote. Try again!");
    }
}

return (
    <div>
    <h2>Quote</h2>
    {quote && <p> {quote} </p>}
    <SearchBar onSearch={fetchQuote} />
    </div>
    );
}

export default Quote;
