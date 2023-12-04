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

export const QUERY_INCOME = gql`
  query income($incomeId: ID!) {
    income(incomeId: $incomeId) {
      _id
      amount
      createAt
      description
    }
  }
`;

