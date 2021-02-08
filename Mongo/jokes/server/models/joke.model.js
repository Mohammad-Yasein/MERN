const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, 'SETUP IS REQUIRED!'],
      minlength: [10, 'SETUP MUST BE AT LEAST 10 CHARACTERS LONG!'],
    },
    punchline: {
      type: String,
      required: [true, 'PUNCHLINE IS REQUIRED!'],
      minlength: [3, 'PUNCHLINE MUST BE AT LEAST 3 CHARACTERS LONG!'],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
