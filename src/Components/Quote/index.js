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
    <div className="left-handdrawn">
      <h1 className="quote">Click for random Ron Quote!</h1> 
        <button className="button-moustache" onClick={handleClick}></button>
            {quotes.map(random => {
            return (
            <p className="quote-display">"{random}"</p>  
        );
      })}
    </div>

        <div className="middle">
          <img alt="ron swanson" className="ron" src="https://live.staticflickr.com/65535/52165967008_3329b09b91_w.jpg" />
        </div>
    
    </>
  );
};

