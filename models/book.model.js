'use strict';
const mongoose = require('mongoose');


const BookSchema=new mongoose.Schema({
    title:{type:String},
    description: { type: String },
    status: { type: String },
    email: { type: String }

})





const BookModel = mongoose.model('ourbook', BookSchema);

module.exports = BookModel;