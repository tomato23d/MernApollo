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
  {
    me {
      _id
      username
      email
      savedBooks {
        _id
        bookId
        authors
        description
        title
        link
        image
      }
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
  query singleUser {
    user {
      _id
      username
      email
      password
      savedBook
    }
  }
`;

