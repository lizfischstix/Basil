import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me($userId: ID!) {
  me(userId: $userId) {
    _id
    email
    firstName
    lastName
    balance
    incomes {
      _id
      amount
      createAt
      description
    }
    expenses {
      _id
      amount
      category
      createAt
      description
    }
  }
}
`;