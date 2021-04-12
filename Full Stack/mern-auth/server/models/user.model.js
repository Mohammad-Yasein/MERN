const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'FIRST NAME IS REQUIRED!'],
      minLength: [3, 'FIRST NAME MUST BE AT LEAST 3 CHARACTERS LONG!'],
    },
    lastName: {
      type: String,
      required: [true, 'LAST NAME IS REQUIRED!'],
      minLength: [3, 'LAST NAME MUST BE AT LEAST 3 CHARACTERS LONG!'],
    },
    email: {
      type: String,
      required: [true, 'EMAIL IS REQUIRED!'],
      index: true,
      unique: true,
      validate: {
        validator: value => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(value),
        message: 'INVALID EMAIL FORMAT!',
      },
    },
    password: {
      type: String,
      required: [true, 'PASSWORD IS REQUIRED!'],
      minLength: [6, 'PASSWORD MUST BE AT LEAST 6 CHARACTERS LONG!'],
    },
    country: {
      type: String,
      required: [true, 'COUNTRY NAME IS REQUIRED!'],
    },
    books: {
      type: Array,
    },
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: 'EMAIL ADDRESS IS IN USE!' });

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
