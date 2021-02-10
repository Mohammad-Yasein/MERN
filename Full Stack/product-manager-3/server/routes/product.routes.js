const ProductController = require('../controllers/product.controller');

module.exports = app => {
  app.get('/api/products', ProductController.getAllProducts);
  app.get('/api/products/:id', ProductController.getProductById);
  app.post('/api/products/new', ProductController.createProduct);
  app.put('/api/products/:id/edit', ProductController.updateProduct);
  app.delete('/api/products/:id/delete', ProductController.deleteProduct);
};
