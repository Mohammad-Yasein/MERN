const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then(newProduct => res.json({ product: newProduct }))
    .catch(error => res.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};
