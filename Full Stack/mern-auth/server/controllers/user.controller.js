const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user.model');

module.exports.register = (request, response) => {
  User.create(request.body)
    .then(user => {
      const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      response
        .cookie('token', userToken, { httpOnly: true })
        .json({ message: 'SUCCESSFULLY REGISTERED!', user: user });
    })
    .catch(error => response.status(400).json(error));
};

module.exports.login = async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email: email });

  if (user === null) {
    return response.sendStatus(400);
  }

  const correctPassword = await bcrypt.compare(password, user.password);

  if (!correctPassword) {
    return response.sendStatus(400);
  }

  const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

  response
    .cookie('token', userToken, { httpOnly: true })
    .json({ message: 'SUCCESSFULLY LOGGED!', user: user });
};

module.exports.logout = (request, response) => {
  response.clearCookie('token');
  response.sendStatus(200);
};

module.exports.getAllUsers = (request, response) => {
  User.find({})
    .then(users => response.json(users))
    .catch(error => response.status(400).json(error));
};

module.exports.getUserBooks = (request, response) => {
  const token = request.headers.cookie.split('=')[1];
  const userId = jwt.verify(token, process.env.SECRET_KEY).id;
  User.findOne({ _id: userId })
    .then(user => response.json(user.books))
    .catch(error => response.status(400).json(error));
};

module.exports.addFavBook = async (request, response) => {
  const token = request.headers.cookie.split('=')[1];
  const userId = jwt.verify(token, process.env.SECRET_KEY).id;
  const user = await User.findOne({ _id: userId });

  if (user === null) {
    return response.sendStatus(400);
  }

  user.books.push(request.body.book);
  user.save().then(savedUser => response.json(savedUser.books));
};
