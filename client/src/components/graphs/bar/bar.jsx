import { Bar } from "react-chartjs-2";
import { useState } from 'react';
import spendingData from "../fakeData";
import {Chart as ChartJS}from 'chart.js/auto';


function makeBar() {
  
  
const [userData, setUserData] = useState({
  labels: Object.keys(spendingData),
  datasets: [{
    label: "Spending Data",
    data: Object.values(spendingData),
    backgroundColor: ['rebeccapurple', 'yellow', 'green', 'blue']
  }]
})

  return <Bar data={userData}/>
}

export default makeBar; 