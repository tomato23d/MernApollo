const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const { Book, User } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
        return await Book.find();
    },

    book: async (parent, args) => {
        return await Book.findById(args.id)
    },

    users: async () => {
      return await User.find({}).populate('book');
  },

    user: async (parent, { userId }) => {
      return await User.findOne({_id: userId})
  },



    me: async (parent, args, context) => {
        if (context.user){
        const user = await User.findOne({_id: context.user._id})
        return user;
    }
        throw new AuthenticationError("user is not found");
    },},
  

  Mutation: {
    saveBook: async (parent, { bookData }, context) => {
        if (context.user){
          console.log(context.user);
        return await User.findByIdAndUpdate(
        { _id: context.user._id},
        {$push: {savedBooks: bookData}},
        {new: true}
      );}

       throw new AuthenticationError('You need to be logged in!');
  },

    removeBook: async (parent, { bookId }) => {
        if (context.user){
        return await User.findByIdAndUpdate(
        { _id: context.user_id },
        {$pull: {savedBooks: bookId}},
        {new: true}
      );}

      throw new AuthenticationError('You need to be logged in!');
  },

    login: async (parent, { email, password }, context) => {
        const user = await User.findOne({email})
        if (!user)
        throw new AuthenticationError("user is not found");

        const correctPassword = await user.isCorrectPassword(password);

        if(!correctPassword)
        throw new AuthenticationError("password is incorrect");

        const token = signToken(user);
        return { user, token };
    },
  
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
  
  
  }
};

module.exports = resolvers;
