import  {quotes} from "./quotesData.js"

const randomQuote = document.querySelector('.quote__text');
const randomAuthor = document.querySelector('.quote__author');


function showRandomQuote() {
    let displayQuote = Math.floor(Math.random() * quotes.length);
    randomQuote.innerHTML = quotes[displayQuote].quote;
    randomAuthor.innerHTML = quotes[displayQuote].author;
}
 
  setInterval(showRandomQuote, 8000);
  showRandomQuote()