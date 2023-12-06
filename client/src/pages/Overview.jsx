import React from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { DELETE_INCOME, DELETE_EXPENSE } from "../utils/mutations";
import IncomeTable from "../components/incomeTable";
import ExpenseTable from "../components/expenseTable";
import { styled } from "@mui/system";
import GraphDropdown from "../components/graphs/graphDropdown";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import InputIcon from "@mui/icons-material/Input";
import OutputIcon from "@mui/icons-material/Output";
import Hello from "../components/Hello";

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

  const [deleteExpense, { err }] = useMutation(DELETE_EXPENSE, {
    refetchQueries: [QUERY_ME, "me"],
  });

  const removeExpense = async (event, expenseId) => {
    event.preventDefault();
    try {
      const { data } = await deleteExpense({ variables: { expenseId } });
    } catch (error) {
      console.error(error);
    }
  };

  const updateIncome = (event, incomeId) => {
    event.preventDefault();
    window.location.assign(`/income/${incomeId}/update`);
  };

  const [deleteIncome, { error }] = useMutation(DELETE_INCOME, {
    refetchQueries: [QUERY_ME, "me"],
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

  if (!data) {
    Auth.logout();
  }

  // User data is available
  const userInfo = data.me;

  const containerStyle = {
    border: "1px solid #ddd", // Add a border with a light gray color
    borderRadius: "8px", // Add rounded corners
    marginBottom: "20px", // Add some spacing between containers
    padding: "20px", // Add internal padding
    marginTop: "20px",
    background: "white",
  };

  const buttoncontainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    gap: "50px",
  };
  

  return (
    <>
    <div className="text-center" id="hello" style={containerStyle}>
        <Hello userInfo={userInfo} />
      </div>

      <div className="container" style={buttoncontainer}>
        <Button
          variant="outlined"
          startIcon={<InputIcon />}
          onClick={(event) => addIncome(event)}
        >
          Add Income
        </Button>
        <Button
          variant="outlined"
          startIcon={<OutputIcon />}
          onClick={(event) => addExpense(event)}
        >
          Add Expense
        </Button>
      </div>

    </>
  );  
  
};

export default Overview;
