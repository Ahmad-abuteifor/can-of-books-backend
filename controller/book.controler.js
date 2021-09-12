'use strict';

const BookModel = require('../models/book.model')


const getBooks = (request, response) => {

    BookModel.find((error, bookstuff) => {
    response.json(bookstuff)
  });

};


module.exports = {
    getBooks
}