import { React } from "react";

function SearchBar({inputText, setInputText}) {
    return (
       <div className="search">
        <input 
        id="Search"
        value={inputText}
        onInput={e => setInputText(e.target.value)}
        placeholder="Search"
        type="text"
        />
       </div>
    )
}

export default SearchBar;