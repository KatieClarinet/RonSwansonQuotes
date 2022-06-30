import { useEffect, useState } from 'react';
import './Search.css'
import Navbar from '../../Components/Navbar';


const API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search'

const Search = () => {
const [searchTerm, setSearchTerm] = useState("");
const [query, setQuery] = useState([]);

useEffect(() => {
  searchQuotes();
}, []);

const searchQuotes = async (quote) => {
const response = await fetch(`${API_URL}/${quote}`);
const data = await response.json();
setQuery(data);
console.log(data)
  };

  return (
    <>
    <Navbar />
    <div className="container">
    <div className ="left">
    <div id="title-photo">
          <img alt="ron swanson" className="ron" src="https://live.staticflickr.com/65535/52165967008_3329b09b91_w.jpg" />
        </div>
    </div>
    <div className="right">
      
      <input placeHolder="Type here..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button  onClick={() => searchQuotes(searchTerm)}>Find a Quote</button>
    <div id="quote-display">

{query?.length > 0 ? (
    <div className="container" id="container">
      {query.map(quote => {
        return (
        <div>{quote}</div>
        );
      })}
      
    </div>
    
  ) : (
    <div className ='empty'>
      <h2>No quotes found</h2>
    </div>
  )}
    </div>
    </div>
    </div>
    </>
  );
  
}

export default Search;

