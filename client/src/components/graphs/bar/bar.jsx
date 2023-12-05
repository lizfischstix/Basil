import { Bar } from "react-chartjs-2";
import { useState } from 'react';
import spendingData from "../fakeData";
import {Chart as ChartJS}from 'chart.js/auto';

import { useQuery, useMutation } from "@apollo/client";
import {QUERY_ME} from '../../../utils/queries';

function makeBar() {
  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const userExpenses = data.me.expenses;

  const userData = {
    labels: userExpenses.map(expense => expense.category),
    datasets: [{
      label: "Spending Category",
      data: userExpenses.map(expense => expense.amount),
      backgroundColor: ['rebeccapurple', 'yellow', 'green', 'blue']
    }]
  };


  return <Bar data={userData}/>
}

export default makeBar; 