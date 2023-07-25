import { gql } from '@apollo/client';


export const SAVE_BOOK = gql`
mutation saveBook( $bookData: Bookinput) {
  saveBook(bookData: $bookData){
    username
  }
  }`;



export const REMOVE_BOOK = gql`
mutation removeBook($_id: ID!) {
  removeBook(_id: $_id) {
    _id
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
