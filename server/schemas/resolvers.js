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

        console.log(user.incomes);

        const income = user.incomes.filter(
          (income) => income._id.valueOf() === incomeId
        );

        console.log(income);

        return income[0];
      }
      throw AuthenticationError;
    },
    income: async (parent, { incomeId }, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        console.log(user.incomes);

        const income = user.incomes.filter(
          (income) => income._id.valueOf() === incomeId
        );

        console.log(income);

        return income[0];
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
      { incomeId, description, amount },
      context
    ) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id, "incomes._id": incomeId },
          { $set: { "incomes.$": { description, amount } } },
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
  },
};

module.exports = resolvers;
