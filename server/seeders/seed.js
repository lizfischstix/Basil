const mongoose = require('mongoose');
const User = require('../model/User');


const db = require('../config/connection');

// Sample user data
const userData = [
  {
    email: 'user1@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    balance: 1000,
    incomes: [
      { amount: 500, description: 'Salary' },
      { amount: 200, description: 'Freelance work' },
    ],
    expenses: [
      { amount: 200, description: 'Groceries', category: 'Food' },
      { amount: 100, description: 'Utilities', category: 'Bills' },
    ],
  },
  {
    email: 'user2@example.com',
    password: 'secret123',
    firstName: 'Alice',
    lastName: 'Smith',
    balance: 1500,
    incomes: [
      { amount: 800, description: 'Part-time job' },
      { amount: 300, description: 'Consulting gig' },
    ],
    expenses: [
      { amount: 150, description: 'Dining out', category: 'Food' },
      { amount: 120, description: 'Internet', category: 'Bills' },
    ],
  },
  // Add more user data if needed
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Income.deleteMany({});
    await Expense.deleteMany({});

    // Seed users, incomes, and expenses
    const users = await User.create(userData);

    console.log('Database seeded successfully:', users);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    try {
      // Close the database connection
      await db.close();
      console.log('Database connection closed successfully.');
    } catch (error) {
      console.error('Error closing database connection:', error);
    }
  }
};

// Run the seed function
seedDatabase();
