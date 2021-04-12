const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'COUNTRY NAME IS REQUIRED!'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Country', CountrySchema);
