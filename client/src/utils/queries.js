import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      category
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
      category
      authors
      description
      link
      title
      image
    }
  }
`;


export const QUERY_BOOKS_CATEGORY = gql`
  query booksCategory($category: String!) {
    booksCategory(category: $category) {
      _id
      category
      authors
      description
      link
      title
      image
    }
  }
`;

export const QUERY_BOOKS_EDUCATION = gql`
  query booksEducation {
    booksEducation {
      _id
      category
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
        category
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

export const QUERY_BOOKS_FICTION = gql`
  query booksFiction {
    booksFiction {
      _id
      category
      authors
      description
      link
      title
      image
    }
  }
`;

export const QUERY_BOOKS_NONFICTION = gql`
  query booksNonFiction {
    booksNonFiction {
      _id
      category
      authors
      description
      link
      title
      image
    }
  }
`;
