
const typeDefs = `
  type User {
    _id: ID!
    email: String!
    password: String!  
    firstName: String!
    lastName: String!
    balance: Float!
    incomes: [Income]
    expenses: [Expense]
  }

  type Income {
    _id: ID!
    amount: Float!
    description: String
    createAt: String
  }

  type Expense {
    _id: ID!
    amount: Float!
    description: String
    category: String!
    createAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    Incomes: [Income]
    Expenses: [Expense]
  }

  type Mutation {
    addUser(email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    createIncome(amount: Float!, description: String): Income
    createExpense(amount: Float!, description: String, category: String!): Expense
    removeIncome(id: ID!): Income 
    removeExpense(id: ID!): Expense
  }
`;

module.exports = typeDefs;
