import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import currencyFormater from "../../utils/currencyFormater";

const Hello = ({ userInfo }) => {
  let totalIncome = 0;

  for (let i = 0; i < userInfo.incomes.length; i++) {
    totalIncome = userInfo.incomes[i].amount + totalIncome;
  }

  let totalExpense = 0;

  for (let i = 0; i < userInfo.expenses.length; i++) {
    totalExpense = userInfo.expenses[i].amount + totalExpense;
  }

  const balance = totalIncome - totalExpense;

  const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));
  return (
    <>

      <Box sx={{ flexGrow: 2, textAlign: 'center' }}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Item>Hello, {userInfo.firstName}!</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Current balance: {currencyFormater(balance)}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Total Income: {currencyFormater(totalIncome)}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Total Expense: {currencyFormater(totalExpense)}</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Hello;
