import React from 'react';
import Card from './Card';


const books = [
    {
        "bookId": 1,
        "authors": "Colleen Hoover",
        "description": "The darkest thriller of the year",
        "title": "Too Late",
        //"link": "https://www.booktopia.com.au/too-late-colleen-hoover/book/9781408729465.html",

        "link": "https://www.amazon.com.au/Too-Late-darkest-thriller-year/dp/1408729466/ref=sr_1_1?crid=1480TCNSLHTQP&keywords=colleen+hoover+too+late&qid=1689424921&sprefix=collen+hoover+too+late%2Caps%2C312&sr=8-1",
      },
      {
        "bookId": 2,
        "authors": "Richard Harris",
        "description": "What we can learn from the world's leading risk-takers",
        "title": "The Art of Risk",
        "link": "https://www.booktopia.com.au/the-art-of-risk-richard-harris/book/9781761106774.html"
      },
      {
        "bookId": 3,
        "authors": "James Halliday",
        "description": "The bestselling and definite guide to australian wine",
        "title": "Halliday Wine Companion 2024",
        "link": "https://www.booktopia.com.au/halliday-wine-companion-2024-james-halliday/book/9781761450037.html"
      },
      {
        "bookId": 4,
        "authors": "Kate Grenville",
        "description": "A Biographical Novel",
        "title": "Restless Dolly Maunder",
        "link": "https://www.booktopia.com.au/restless-dolly-maunder-kate-grenville/book/9781922790330.html"
      }

];

export default function Display() {
  return (
  
    <Card books={books}
    
    />
  );
}
