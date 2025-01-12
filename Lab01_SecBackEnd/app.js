const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Choose your preferred port

const books = [
    {
      Code: "B001",
      Title: "The Adventure Begins",
      Cover: "maxresdefault.jpg", // Image source
      Description: "A captivating story of a young explorer's journey.",
      Category: 1, // Fiction
      Author: "Alice Brown",
      Publishing: "Epic Publishing",
      Price: "$15.99",
      Bestsellers: true,
      Suggestions: true
    },
    {
      Code: "B002",
      Title: "Mysteries of the Universe",
      Cover: "Mysteries of the Universe.jpg", // Image source
      Description: "A deep dive into the unexplained phenomena of the cosmos.",
      Category: 2, // Non-fiction
      Author: "Mark Johnson",
      Publishing: "Cosmic Press",
      Price: "$22.50",
      Bestsellers: true,
      Suggestions: true
    },
    {
      Code: "B003",
      Title: "Journey to the Past",
      Cover: "Journey to the Past.jpg", // Image source
      Description: "An exciting historical adventure filled with mystery.",
      Category: 1, // Fiction
      Author: "Eve Taylor",
      Publishing: "History Books",
      Price: "$18.00",
      Bestsellers: true,
      Suggestions: true
    },
    {
      Code: "B004",
      Title: "The Code Breaker",
      Cover: "https://example.com/code_breaker_cover.jpg", // Image source
      Description: "A thrilling story of hackers and secrets that could change the world.",
      Category: 1, // Fiction
      Author: "David King",
      Publishing: "Tech Reads",
      Price: "$25.00",
      Bestsellers: false,
      Suggestions: false
    },
    {
      Code: "B005",
      Title: "Ocean Wonders",
      Cover: "https://example.com/ocean_wonders_cover.jpg", // Image source
      Description: "Explore the depths of the ocean and discover its hidden wonders.",
      Category: 2, // Non-fiction
      Author: "Sophie Lee",
      Publishing: "Nature Press",
      Price: "$20.00",
      Bestsellers: false,
      Suggestions: false
    }
];


app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from your frontend URL
    methods: ['GET', 'POST'], // Specify allowed methods (adjust as needed)
    allowedHeaders: ['Content-Type'], // Specify allowed headers
  }));

  
async function checkBookStatus (books){ 
    const filteredBooks = books.filter(book => book.Bestsellers === true && book.Suggestions === true);
    return filteredBooks;
}  


// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
// Define a simple route
app.get('/checkbook', async (req, res) => {
    let getbestSellerorSuggestion = await checkBookStatus (books);
    // console.log(getbestSellerorSuggestion);
    res.json(getbestSellerorSuggestion);
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
