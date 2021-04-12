const Player = require('../models/player.model');

module.exports.createPlayer = (request, response) => {
  Player.create(request.body)
    .then(player => response.json(player))
    .catch(error => response.status(400).json(error));
};

module.exports.getAllPlayers = (request, response) => {
  Player.find({})
    .then(players => response.json(players))
    .catch(error => response.status(400).json(error));
};

module.exports.getPlayerById = (request, response) => {
  Player.findOne({ _id: request.params.id })
    .then(player => response.json(player))
    .catch(error => response.status(400).json(error));
};

module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true })
    .then(player => response.json(player))
    .catch(error => response.status(400).json(error));
};

module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => response.status(400).json(error));
};
