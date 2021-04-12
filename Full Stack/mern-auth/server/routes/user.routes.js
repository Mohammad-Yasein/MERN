const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get('/api/users', authenticate, UserController.getAllUsers);
  app.get('/api/users/me/fav', authenticate, UserController.getUserBooks);
  app.put('/api/users/me/fav', authenticate, UserController.addFavBook);
  app.post('/api/register', UserController.register);
  app.post('/api/login', UserController.login);
  app.get('/api/logout', authenticate, UserController.logout);
};
