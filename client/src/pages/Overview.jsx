import React from 'react';
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const Overview = () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }


  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const addIncome = (event) => {
    event.preventDefault();
    window.location.assign('/income');
  };

  const updateIncome = (event, incomeId) => {
    event.preventDefault();
    window.location.assign(`/income/${incomeId}/update`);
  }

  const { loading, data } = useQuery(QUERY_ME);

  // Handle loading state
  if (loading) {
    // You can use loading skeletons or placeholders here
    return <div>Loading...</div>;
  }

  // User data is available
  const userInfo = data.me;

  return (
    <>
      <h2>Incomes</h2>
      <button onClick={addIncome}> Add Income </button>
      {userInfo.incomes.map((income) => (
        <div key={income._id}>
          <p>Description: {`${income.description}`}</p>
          <p>Amount: ${`${income.amount}`}</p>
          <button onClick={(event) => updateIncome(event, income._id)}>Edit</button>
          <button>Delete</button>
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

export default Overview;
