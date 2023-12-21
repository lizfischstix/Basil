import { Bar } from "react-chartjs-2";
import { useState } from 'react';
import {Chart as ChartJS}from 'chart.js/auto';

import { useQuery, useMutation } from "@apollo/client";
import {QUERY_ME} from '../../../utils/queries';


  const MakeExtraBar= ()=> {

    const { loading, data } = useQuery(QUERY_ME, {
        fetchPolicy: "no-cache",
      });

      if (loading) {
        return <div>Loading...</div>;
      }
    
    const userExpenses = data.me.expenses;
    const expenseArray = userExpenses.map(expense => expense.amount)
    
    const sumExpense = expenseArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );
      
    
    const userIncome = data.me.incomes;
    const incomeArray = userIncome.map(income => income.amount)
    
    const sumIncome = incomeArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );

    const userData = {
        labels: ["Total Income", "Total Expenses"],
        datasets: [{
          label: "Income vs. Expense",
          data: [sumIncome, sumExpense],
          backgroundColor: ['green', '#902b68']
        }]
      };
    
    
      return <Bar data={userData}/>
  }

  export default MakeExtraBar;