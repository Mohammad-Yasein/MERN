const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(error => res.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.findJokeById = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(jokeById => res.json({ joke: jokeById }))
    .catch(error => res.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.findRandomJoke = (req, res) => {
  Joke.countDocuments().exec((error, count) => {
    const random = Math.floor(Math.random() * count);
    Joke.findOne()
      .skip(random)
      .exec((error, randomJoke) =>
        error ? res.json({ message: 'SOMETHING WENT WRONG!', error: error }) : res.json({ joke: randomJoke })
      );
  });
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(error => res.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(error => res.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(deletedJoke => res.json({ joke: deletedJoke }))
    .catch(error => res.json({ message: 'SOMETHING WENT WRONG!', error: error }));
};
