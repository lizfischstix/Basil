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
    createdAt: String
  }

  type Expense {
    _id: ID!
    amount: Float!
    description: String
    category: String!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    income(incomeId: ID!): Income
    expense(expenseId: ID!): Expense
  }

  type Mutation {
    addUser(email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    addIncome(description: String, amount: Float!, createdAt:String!): User
    updateIncome(incomeId: ID!, description: String, amount: Float!, createdAt:String!): User
    deleteIncome(incomeId: ID!): User
    addExpense(amount: Float!, description: String, category: String!, createdAt:String!): User
    updateExpense(expenseId: ID!, description: String, amount: Float!, createdAt:String!, category: String!): User
    deleteExpense(expenseId: ID!): User
  }
`;

module.exports = typeDefs;
