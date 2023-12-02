import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      expenses {
        amount
        description
      }
      firstName
      lastName
      incomes {
        amount
        description
      }
      balance
    }
  }
`;
