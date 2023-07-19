const { gql } = require('apollo-server-express');

const typeDefs = gql`
 
  type Book {
    _id: ID!
    bookId: String! 
    authors: [String]
    description: String!
    title: String!
    link: String
    image: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input Bookinput {
    _id: ID!
    bookId: String! 
    authors: [String]
    description: String!
    title: String!
    link: String
    image: String
  }


  type Query {
    me: User
    books: [Book]!
    book(id: ID!) : Book
    users: [User]!
    user: User

  }

type Mutation {
  saveBook( bookData: Bookinput): User
  removeBook(id: ID!): User
  login(email: String!, password: String!): Auth
  addUser(email: String!, password: String!, username: String!): Auth
 }

`;

module.exports = typeDefs;
