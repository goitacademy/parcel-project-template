import { weatherQuotes } from './quotes.js';

function displayRandomWeatherQuote() {
  const weatherQuoteElement = document.querySelector('.quoteDisplay__text');
  const authorNameElement = document.querySelector('.quoteDisplay__author');

  const randomIndex = Math.floor(Math.random() * weatherQuotes.length);
  const { quote, author } = weatherQuotes[randomIndex];

  weatherQuoteElement.textContent = quote;
  authorNameElement.textContent = author;
}

setInterval(displayRandomWeatherQuote(), 6000);
displayRandomWeatherQuote();
