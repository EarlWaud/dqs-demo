const express = require('express');
const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'Les Miserables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }
];
bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'books',
      {
        nav:
          [
            { link: '/books', title: 'Books' },
            { link: '/authors', title: 'Authors' }
          ],
        title: 'Book List',
        books
      }
    );
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('hello single book');
  });

module.exports = bookRouter;