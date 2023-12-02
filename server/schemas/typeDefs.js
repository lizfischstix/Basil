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
    incomes:[Income]
    expenses:[Expense]
  }

  type Mutation {
    addUser(email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    addIncome(description: String, amount: Float!): User
    addExpense(amount: Float!, description: String, category: String!): User
    removeIncome(id: ID!): User 
    removeExpense(id: ID!): User
  }
`;

module.exports = typeDefs;
