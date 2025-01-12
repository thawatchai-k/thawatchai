
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardcomponent from './Components/Cardcomponent'
import React, { useEffect, useState } from 'react';



function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the books data from the JSON file or API
  useEffect(() => {
    fetch('http://localhost:3001/checkbook') // Replace with the actual path
      .then((response) => response.json()) // Parse the JSON data
      .then((data) => {
        setBooks(data); // Set the books data to state
      })
      .catch((error) => console.error('Error loading data:', error)); // Handle errors
  }, []); // Empty dependency array means it runs once when the component mounts


  return (
    <>
    <div className="container">
    {books && books.length > 0 ? (
        books.map((book) => (
          <Cardcomponent
            key={book.Code} // Ensure each card has a unique key
            image={book.Cover}
            title={book.Title}
            description={book.Description}
            author={book.Author}
            publishing={book.Publishing}
            price={book.Price}
          />
        ))
      ) : (
        <div>No books found</div> // Show message if no books available
      )}
    </div>  
    </>
  )
}

export default App
