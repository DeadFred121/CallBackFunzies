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

// // create a new book
// const newBook = Book({
//   title: 'The King In Yellow',
//   author: 'Robert W. Chambers'
// });

// // save the book via callback
// newBook.save(function (err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   // read books via callback
//   Book.find(function (err, books) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('These are your books!', books);
//   })
//   console.log('Book created!');
// });

// // create another book
// const anotherBook = Book({
//   title: 'The Necronomicon',
//   author: 'H.P. Lovecraft'
// });

// // save the book via promise
// anotherBook.save()
//   .then(() => {
//     console.log('Book saved!');
//     // read books via promise
//     return Book.find()
//   })
//   .then((books) => {
//     console.log('These are your books!', books)
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// create a third book
// const thirdBook = Book({
//   title: 'A Study In Emerald',
//   author: 'Neil Gaiman'
// });

// // save the book via async/await
// saveAndFetchThirdBook = async () => {
//   try {
//     await thirdBook.save()
//     console.log('Book saved!')
//     const books = await Book.find()
//     console.log('These are your books!', books)
//     return books
//   } catch (err) {
//     console.log(err)
//   }
// }

// saveAndFetchThirdBook()

// find the book The King In Yellow
// update the author to Hastur
Book.findOneAndUpdate({ title: 'The King In Yellow' }, { author: 'Hastur' }, {new: true}, function (err, book) {
  if (err) {
    console.log(err);
    return;
  }
  // we have the updated book returned to us
  console.log(book);
});




  

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Book Depository listening on port 3000!'));

