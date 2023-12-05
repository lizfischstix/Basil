import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';
import spendingData from "../fakeData";
import {Chart as ChartJS}from 'chart.js/auto';

import { useQuery, useMutation } from "@apollo/client";
import {QUERY_ME} from '../../../utils/queries';



// function makeDoughnut() {

// const { loading, data } = useQuery(QUERY_ME, {
//   fetchPolicy: "no-cache",
// });
// if (loading) {
  
//   return <div>Loading...</div>;
// }

// const userExpenses = data.user.expenses;
// console.log(userExpenses)


  
// const [userData, setUserData] = useState({
//   labels: Object.values(userExpenses.category),
//   datasets: [{
//     label: "Spending Category",
//     data: Object.values(userExpenses.amounts),
//     backgroundColor: ['rebeccapurple', 'yellow', 'green', 'blue']
//   }]
// })

//   return <Doughnut data={userData}/>
// }


function makeDoughnut() {
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

  return <Doughnut data={userData} />;
}


export default makeDoughnut; 


// import { Doughnut } from "react-chartjs-2";
// import { useState, useEffect } from 'react';
// import spendingData from "../fakeData";
// import { Chart as ChartJS } from 'chart.js/auto';
// import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_ME } from '../../../utils/queries';

// function makeDoughnut() {
//   const { loading, data } = useQuery(QUERY_ME, {
//     fetchPolicy: "no-cache",
//   });

//   useEffect(() => {
//     if (!loading && data) {
//       const userExpenses = data.me.expenses;
//       setUserData({
//         labels: userExpenses.categories,
//         datasets: [{
//           label: "Spending Category",
//           data: userExpenses.amounts,
//           backgroundColor: ['rebeccapurple', 'yellow', 'green', 'blue']
//         }]
//       });
//     }
//   }, [loading, data]);

//   const [userData, setUserData] = useState({
//     labels: [],
//     datasets: [{
//       label: "Spending Category",
//       data: [],
//       backgroundColor: ['rebeccapurple', 'yellow', 'green', 'blue']
//     }]
//   });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return <Doughnut data={userData} />;
// }

// export default makeDoughnut;
