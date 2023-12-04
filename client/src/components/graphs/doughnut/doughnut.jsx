import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';
import spendingData from "../fakeData";
import {Chart as ChartJS}from 'chart.js/auto';


function makeDoughnut() {
  
  
const [userData, setUserData] = useState({
  labels: Object.keys(spendingData),
  datasets: [{
    label: "Spending Category",
    data: Object.values(spendingData),
    backgroundColor: ['rebeccapurple', 'yellow', 'green', 'blue']
  }]
})

  return <Doughnut data={userData}/>
}

export default makeDoughnut; 