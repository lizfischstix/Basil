import { Pie } from "react-chartjs-2";
import { useState } from 'react';
import spendingData from "../fakeData";
import {Chart as ChartJS}from 'chart.js/auto';

import { useQuery, useMutation } from "@apollo/client";
import {QUERY_ME} from '../../../utils/queries';

function makePie() {
  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const userExpenses = data.me.expenses;
  const categoryUserExpenses = data.me.expenses.categories;
  userExpenses.map(expense => expense.category)
  console.log(userExpenses)
  
  const aggregateExpenses = userExpenses.reduce((result,expense)=> {
    const{category, amount} = expense
    console.log(category, amount)
    const existingCategory = result.find((item)=> item.category === category)
    if (existingCategory){
      existingCategory.amount += amount
    }else {
      result.push({category, amount})
    }

    return result

  }, [])

  const userData = {
    labels: aggregateExpenses.map(expense => expense.category),
    datasets: [{
      label: "Spending Category",
      data: aggregateExpenses.map(expense => expense.amount),
      backgroundColor: ['rebeccapurple', 'yellow', 'green', 'blue', 'red', 'white']
    }]
  };


  return <Pie data={userData}/>
}

export default makePie; 