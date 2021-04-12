const Book = require('../models/book.model');

module.exports.createBook = (request, response) => {
  Book.create(request.body)
    .then(book => response.json(book))
    .catch(error => response.status(400).json(error));
};

module.exports.getAllBooks = (request, response) => {
  Book.find({})
    .then(books => response.json(books))
    .catch(error => response.status(400).json(error));
};
