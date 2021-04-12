const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'BOOK NAME IS REQUIRED!'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);
