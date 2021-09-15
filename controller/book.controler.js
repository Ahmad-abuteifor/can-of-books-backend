'use strict';

const BookModel = require('../models/book.model')


const getBooks = (request, response) => {

  BookModel.find((error, bookstuff) => {
    response.json(bookstuff)
  });

};
const createBook = (request, response) => {
  const { title, description, status, email } = request.body;
console.log("hello");

  const newBook = new BookModel({
    title, description, status, email
  });

  newBook.save();

  response.json(newBook);

}
const deleteBook = (request, response) => {
  console.log("print the parms",request.params);
  const bookId = request.params.books_id;
 
  BookModel.deleteOne({ _id: bookId }, (error, deletedData) => {

    response.json(deletedData);
  });
}



const updateBook = (request, response) => {
   const { title, description, status, email } = request.body;
   const bookId = request.params.books_id;

   BookModel.findByIdAndUpdate({ _id: bookId }, { title, description, status, email }, { new: true }, (error, updatedbookData) => {

    response.json(updatedbookData);
  });
}
module.exports = {
  getBooks,
  createBook,
  deleteBook,
  updateBook
}