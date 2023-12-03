import React from 'react';
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const Home= () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  // Fetch user data
  const { loading, error, data } = useQuery(QUERY_ME);

  // Handle loading state
  if (loading) {
    // You can use loading skeletons or placeholders here
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    console.error("Error fetching user data:", error);
    return <p>An error occurred while fetching data.</p>;
  }

  // User data is available
  const userInfo = data.me;

  return (
    <>
      <h2>Incomes</h2>
      {userInfo.incomes.map((income) => (
        <div key={income._id}>
          <p>Description: {`${income.description}`}</p>
          <p>Amount: ${`${income.amount}`}</p>
        </div>
      ))}
      {userInfo.incomes.length === 0 && <p>No incomes found.</p>}

      <h2>Expenses</h2>
      {userInfo.expenses.map((expense) => (
        <div key={expense._id}>
          <p>Description: {`${expense.description}`}</p>
          <p>Amount: ${`${expense.amount}`}</p>
        </div>
      ))}
      {userInfo.expenses.length === 0 && <p>No expenses found.</p>}
    </>
  );
};

export default Home;