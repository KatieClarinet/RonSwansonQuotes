import {useState} from 'react';
import './Quote.css';

export default function QuoteGenerator() {
    const [quotes, setQuotes] = useState([]);

  async function handleClick() {
    const response = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
    const randomQuotes = await response.json();
    setQuotes(randomQuotes);
  }
  return (

    <div id="button-container">
      <button onClick={handleClick}></button>
            {quotes.map(random => {
        return (
            <div>"{random}"</div>          
        );
      })}
    </div>
  );
};

