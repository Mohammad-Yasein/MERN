const Author = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
  Author.create(request.body)
    .then(author => response.json(author))
    .catch(error => response.status(400).json(error));
};

module.exports.getAllAuthors = (request, response) => {
  Author.find({})
    .then(authors => response.json(authors))
    .catch(error => response.status(400).json(error));
};

module.exports.getAuthorById = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then(author => response.json(author))
    .catch(error => response.status(400).json(error));
};

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true })
    .then(author => response.json(author))
    .catch(error => response.status(400).json(error));
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => response.status(400).json(error));
};
