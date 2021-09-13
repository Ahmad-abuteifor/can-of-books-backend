const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const { getBooks,createBook,
  deleteBook } = require('./controller/book.controler');

const SeedBook = require('./helper/book.seed');
// SeedBook()

app.get('/books', getBooks)
app.post('/books', createBook);
app.delete('/books/:books_id', deleteBook);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });