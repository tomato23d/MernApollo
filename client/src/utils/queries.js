import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      bookId
      authors
      description
      link
      title
      image
    }
  }
`;

export const QUERY_SINGLE_BOOK = gql`
  query singleBook($id: ID!) {
    book(id: $id) {
      _id
      bookId
      authors
      description
      link
      title
      image
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      books
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      password
      savedBooks
    }
  }
`;

export const QUERY_USER = gql`
  query singleUser($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      password
      savedBook
    }
  }
`;

