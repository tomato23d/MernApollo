import { gql } from '@apollo/client';


export const SAVE_BOOK = gql`
mutation saveBook( $_id: ID!, $authors: [String], $description: String!, $title: String!) {
  saveBook(_id: $id, authors: $authors, description: $description, title: $title){
    
    _id
    bookId
    authors
    description
    title
    link
    image
  }
   
  }`;


export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!, ) {
  removeBook(bookId: $bookId){
    
   bookId
  }
   
  }`;

  export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;
