const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'PLAYER NAME IS REQUIRED!'],
      minLength: [2, 'PLAYER NAME MUST BE AT LEAST 2 CHARACTERS LONG!'],
    },
    position: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Player', PlayerSchema);
