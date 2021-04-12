const BookController = require('../controllers/book.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get('/api/books', authenticate, BookController.getAllBooks);
  app.post('/api/books', BookController.createBook);
};
