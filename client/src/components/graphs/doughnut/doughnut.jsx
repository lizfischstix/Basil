import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';
import {Chart as ChartJS}from 'chart.js/auto';

import { useQuery, useMutation } from "@apollo/client";
import {QUERY_ME} from '../../../utils/queries';


function makeDoughnut() {
  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const userExpenses = data.me.expenses;
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

  console.log(aggregateExpenses)

  const userData = {
    labels: aggregateExpenses.map(expense => expense.category),
    datasets: [{
      label: "Spending by Category",
      data: aggregateExpenses.map(expense => expense.amount),
      backgroundColor: ['#902b68', '#32620E', '#68902b', '#9dcd5a', '#f3e9d2', 'rgb(144,43,104, .7)', 'rgb(144,43,104, .3)', 'black']
    }]
  };

  return <Doughnut data={userData} />;
}


export default makeDoughnut; 


