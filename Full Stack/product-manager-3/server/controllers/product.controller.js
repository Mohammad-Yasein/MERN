const Product = require('../models/product.model');

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then(newProduct => response.json({ product: newProduct }))
    .catch(error => response.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then(allProducts => response.json({ products: allProducts }))
    .catch(error => response.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.getProductById = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then(product => response.json({ product: product }))
    .catch(error => response.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then(updatedProduct => response.json({ product: updatedProduct }))
    .catch(error => response.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then(deletedProduct => response.json({ product: deletedProduct }))
    .catch(error => response.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};
