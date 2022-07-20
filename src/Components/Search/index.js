import { useEffect, useState } from 'react';

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
    
    <div className="right-handdrawn">
    <h1 className="search">or search here</h1> 
    <div className="searchbox">
      
      <input placeHolder="Type here..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button  onClick={() => searchQuotes(searchTerm)}>Find a Quote</button>
    </div>
    <div id="quote-display">

{query?.length > 0 ? (
    <div className="container">
      {query.map(quote => {
        return (
        <div>"{quote}"</div>
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
    </>
  );
  
}

export default Search;

