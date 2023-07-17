const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');

// import schema from Book.js
const bookSchema = require('./Book');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    //reserve an array to save books for the user
    savedBooks: [{type: Schema.Types.ObjectId, ref: 'Book'}]
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// user saved books `bookCount`
userSchema.virtual('bookCount').get(function () {
  return this.savedBooks.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
