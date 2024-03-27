import React, { useState, useEffect } from 'react';
import data from './data/data.json';

import './App.css';

function App() {
  const [randomBook, setRandomBook] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomBook(data[randomIndex]);
  }, []);

  const handleRandomBookClick = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomBook(data[randomIndex]);
  };

  return (
    <div className="container">
      <h1 className='text-center mt-5'>Random book</h1>
      <div className="book-details">
        {randomBook && (
          <div>
            <h1>Name:{randomBook.author}</h1>
            <span>State:{randomBook.country}</span>
            <p>Language:{randomBook.language}</p>
            <p>Title:{randomBook.title}</p>
           
            <p>Pages:{randomBook.pages}</p>
          </div>
        )}
      </div>
      <button onClick={handleRandomBookClick} type="button" className="btn btn-success mt-3">Random Book</button>
    </div>
  );
}

export default App;
