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
        createdAt
        description
      }
      expenses {
        _id
        amount
        category
        createdAt
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
      createdAt
      description
    }
  }
`;

// export const QUERY_EXPENSES = gql`
//   query expenses($expenseId: ID!) {
//     expense(expenseId: $expenseId) {
//       _id
//       amount
//       createdAt
//       description
//     }
//   }
// `;

