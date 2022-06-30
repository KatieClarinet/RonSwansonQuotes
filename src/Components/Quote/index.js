import {useState} from 'react';

export default function Quote() {
    const [quotes, setQuotes] = useState([]);

  async function handleClick() {
    const response = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
    const randomQuotes = await response.json();
    setQuotes(randomQuotes);
  }
  return (
    <>
    <h1>Click for random Ron Quote!</h1> 
    <div className="button-container">
      <button className="button-moustache" onClick={handleClick}></button>
            {quotes.map(random => {
        return (
            <div className="quote-display">"{random}"</div>  
        );
      })}
    
    </div>
    </>
  );
};

