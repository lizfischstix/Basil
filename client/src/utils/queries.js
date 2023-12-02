import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      balance
      email
      firstName
      lastName
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
