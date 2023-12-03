import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    addUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
        password
      }
    }
  }
`;

export const ADD_INCOME = gql`
  mutation addIncome($amount: Float!, $description: String) {
    addIncome(amount: $amount, description: $description) {
      incomes {
        _id
        amount
        createAt
        description
      }
    }
  }
`;

export const UPDATE_INCOME = gql`
  mutation updateIncome($incomeId: ID!, $amount: Float!, $description: String) {
    updateIncome(
      incomeId: $incomeId
      amount: $amount
      description: $description
    ) {
      incomes {
        _id
        amount
        description
        createAt
      }
    }
  }
`;
