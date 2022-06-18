import { useEffect, useState} from 'react';

export default function QuoteGenerator() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function quoteGenerator() {
            const response = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
            const randomQuotes = await response.json();
            setQuotes(randomQuotes);
        } 
   quoteGenerator();
    }, []);

    return (
        <div classname="randomQuotes">
{quotes.map(random => <div>{random}</div> )}
    </div>
       )
}