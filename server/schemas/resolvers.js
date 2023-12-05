const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("User not authenticated");
    },

    income: async (parent, { incomeId }, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        const income = user.incomes.filter(
          (income) => income._id.valueOf() === incomeId
        );

        return income[0];
      }
      throw AuthenticationError;
    },

    expense: async (parent, { expenseId }, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        const expense = user.expenses.filter(
          (expense) => expense._id.valueOf() === expenseId
        );

        return expense[0];
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Invalid credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addIncome: async (parent, { description, amount, createdAt }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { incomes: { description, amount, createdAt } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    updateIncome: async (
      parent,
      { incomeId, description, amount, createdAt },
      context
    ) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id, "incomes._id": incomeId },
          { $set: { "incomes.$": { description, amount, createdAt } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    deleteIncome: async (parent, { incomeId }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { incomes: { _id: incomeId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    addExpense: async (
      parent,
      { amount, description, category, createdAt },
      context
    ) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { expenses: { description, amount, category, createdAt } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    updateExpense: async (
      parent,
      { expenseId, description, amount, createdAt, category },
      context
    ) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id, "expenses._id": expenseId },
          {
            $set: {
              "expenses.$": { description, amount, createdAt, category },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    deleteExpense: async (parent, { expenseId }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { expenses: { _id: expenseId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
