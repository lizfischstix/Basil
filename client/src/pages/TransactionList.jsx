import React from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

import { DELETE_INCOME, DELETE_EXPENSE } from "../utils/mutations";
import IncomeTable from "../components/incomeTable";
import ExpenseTable from "../components/expenseTable";
import { Grid, Typography, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Hello from "../components/Hello";

const Transaction = () => {
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

  // User data is available
  const userInfo = data.me;

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* First table - Income */}
        <Grid item xs={12} md={8} xl={6}>
          <Paper elevation={3} style={{ padding: "16px", overflowX: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddCircleIcon
                onClick={addIncome}
                color="success"
                sx={{ fontSize: 30 }}
              />
              <Typography
                variant="h4"
                align="center"
                style={{ padding: "16px" }}
              >
                Income
              </Typography>
              <IncomeTable
                data={userInfo.incomes}
                onUpdate={updateIncome}
                onDelete={removeIncome}
              />
              {userInfo.incomes.length === 0 && <p>No incomes found.</p>}
            </div>
          </Paper>
        </Grid>

        {/* Second table - Expenses */}
        <Grid item xs={12} md={8} xl={6}>
          <Paper elevation={3} style={{ padding: "16px", overflowX: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddCircleIcon
                onClick={addExpense}
                color="success"
                sx={{ fontSize: 30 }}
              />
              <Typography
                variant="h4"
                align="center"
                style={{ padding: "16px" }}
              >
                Expenses
              </Typography>
              <ExpenseTable
                data={userInfo.expenses}
                onUpdate={updateExpense}
                onDelete={removeExpense}
              />
              {userInfo.expenses.length === 0 && <p>No expenses found.</p>}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};


export default Transaction;
