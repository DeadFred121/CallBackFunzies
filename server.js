const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/bookdb', {useMongoClient: true});

const bookSchema = new Schema({
  title: String,
  author: String,
  created_at: Date,
  updated_at: Date
});

const Book = mongoose.model('Book', bookSchema);

// create a new book
const newBook = Book({
  title: 'The King In Yellow',
  author: 'Robert W. Chambers'
});

// save the user
newBook.save(function (err) {
  if (err) throw err;

  console.log('Book created!');
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Book Depository listening on port 3000!'));

