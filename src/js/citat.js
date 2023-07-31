function quoteRandom() {
  const quotePhrase = document.querySelector('.quote-phrase');
  const quoteAuthor = document.querySelector('.quote-author');

  const element = quotes[Math.floor(Math.random() * quotes.length)];

  quotePhrase.textContent = element.text;
  quoteAuthor.textContent = element.author;
}

const quotes = [
  {
    number: 1,
    text: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    number: 2,
    text: 'It is hard to fail, but it is worse never to have tried to succeed',
    author: 'Theodore Roosevelt',
  },
  {
    number: 3,
    text: 'Failure is success if we learn from it.',
    author: 'Malcolm Forbes',
  },
  {
    number: 4,
    text: 'Success is best when it’s shared.',
    author: ' Howard Schultz',
  },
  {
    number: 5,
    text: 'Failure is success in progress.',
    author: 'Albert Einstein',
  },
  {
    number: 6,
    text: 'Practice makes perfect.',
    author: 'Vince Lombardi',
  },
  {
    number: 7,
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    number: 8,
    text: 'It always seems impossible until it’s done.',
    author: 'Nelson Mandela',
  },
  {
    number: 9,
    text: 'People begin to become successful the minute they decide to be.',
    author: 'Harvey MacKay',
  },
  {
    number: 10,
    text: 'All our dreams can come true; if we have the courage to pursue them.',
    author: 'Walt Disney',
  },
];

quoteRandom();
