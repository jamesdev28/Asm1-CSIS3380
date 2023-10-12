/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      source: "Steve Jobs",
      citation:"Google",
      year:2015
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      source: "Albert Einstein",
      citation:"Google",
      year:1960
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      source: "Eleanor Roosevelt",
      citation:"Google",
      year:2004
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      source: "Winston Churchill",
      citation:"Google",
      year:2003
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      source: "Dalai Lama",
      citation:"Google",
      year:2013
    },
    {
      quote: "Kindness is a language that the deaf can hear and the blind can see.",
      source: "Mark Twain",
      citation:"Google",
      year:2024
    },
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: 2016
    }
  ];
  



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    return quotes[randomIndex];
}


/***
 * `printQuote` function
***/
function printQuote() {
    // Get a random quote
  const randomQuote = getRandomQuote();
  
  // Build html
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  html += `</p>`;
  
  // Display the quote
  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/

document.getElementById('load-quote').addEventListener('click', printQuote);


printQuote();