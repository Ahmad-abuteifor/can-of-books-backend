'use strict';

const BookModel =require('../models/book.model')



const SeedBook = () => {

    
    const book1 = new BookModel({
      title: 'Rich Dad Poor Dad',
      description:' What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
      status:'avalable',
      email:'reichandboordad@gmail.com'

      
    });

book1.save()
    const book2 = new BookModel({
        title: 'The Lean Startup',
        description:'How Today Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses ',
        status:'avalable',
        email:'Startup@gmail.com'
  
        
      });
      book2.save()

      const book3 = new BookModel({
        title: 'The 7 Habits of Highly Effective People',
        description:'In The 7 Habits of Highly Effective People, author Stephen R. Covey presents a holistic, integrated, principle-centered approach for solving personal and professional problems. ',
        status:'avalable',
        email:'Habits@gmail.com'
  
        
      });
      book3.save()

    console.log("data done");
  
    
  }
  
  module.exports = SeedBook;