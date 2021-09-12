const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());



const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;



mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
const { getBooks } = require('./controller/book.controler');



const SeedBook = require('./helper/book.seed');
// SeedBook()
app.get('/books', getBooks)



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });