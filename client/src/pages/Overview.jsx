import React from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

import { DELETE_INCOME } from "../utils/mutations";
import IncomeTable from '../components/incomeTable';
import ExpenseTable from '../components/expenseTable';
import { styled } from '@mui/system';
import GraphDropdown  from '../components/graphs/graphDropdown';

const Overview = () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  const addExpense = (event) => {
    event.preventDefault();
    window.location.assign("/expense");
  };

  const addIncome = (event) => {
    event.preventDefault();
    window.location.assign("/income");
  };
  
  const updateExpense = (event, expenseId) => {
    event.preventDefault();
    window.location.assign(`/expense/${expenseId}/update`);
  };

  const deleteExpense = (event, expenseId) => {
    event.preventDefault();
    // Implement the logic to delete the expense, then navigate to the desired page
    // Example: history.push('/expenses');
  };

  const updateIncome = (event, incomeId) => {
    event.preventDefault();
    window.location.assign(`/income/${incomeId}/update`);
  };

  const [deleteIncome, { error }] = useMutation(DELETE_INCOME,{
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const removeIncome = async (event, incomeId) => {
    event.preventDefault();

    try {
      const { data } = await deleteIncome({ variables: { incomeId } });
    } catch (error) {
      console.error(error);
    }
  };

  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  // Handle loading state
  if (loading) {
    // You can use loading skeletons or placeholders here
    return <div>Loading...</div>;
  }

  // User data is available
  const userInfo = data.me;

  const StyledButton = styled("button")({
    padding: "8px",
    fontSize: "15px",
  });

  const containerStyle = {
    border: "1px solid #ddd", // Add a border with a light gray color
    borderRadius: "8px", // Add rounded corners
    marginBottom: "20px", // Add some spacing between containers
    padding: "20px", // Add internal padding
    marginTop: "50px",
  };

  return (
    <>
      <div className="container" id="graphs" style={containerStyle}>
        <GraphDropdown />
      </div>

      <div className="container" style={containerStyle}>
        <h2 className="text-center">Income</h2>
        <StyledButton className="bg-info" onClick={(event) => addIncome(event)}>
          Add Income
        </StyledButton>
        <IncomeTable
          data={userInfo.incomes}
          onUpdate={updateIncome}
          onDelete={removeIncome}
        />
        {userInfo.incomes.length === 0 && <p>No incomes found.</p>}
      </div>

      <div className="container" style={containerStyle}>
        <h2 className="text-center">Expenses</h2>
        <StyledButton
          className="bg-danger"
          onClick={(event) => addExpense(event)}
        >
          Add Expense
        </StyledButton>
        <ExpenseTable
          data={userInfo.expenses}
          onUpdate={updateExpense}
          onDelete={deleteExpense}
        />
        {userInfo.expenses.length === 0 && <p>No expenses found.</p>}
      </div>
    </>
  );
};

export default Overview;
