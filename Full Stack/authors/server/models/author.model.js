const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'AUTHOR NAME IS REQUIRED!'],
      minLength: [3, 'AUTHOR NAME MUST BE AT LEAST 3 CHARACTERS LONG!'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Author', AuthorSchema);
