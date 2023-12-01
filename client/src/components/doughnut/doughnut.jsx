const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };


const DoughnutGraph = () => {
    return (
        <>
            <div>
            <canvas id="myChart"></canvas>
            </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</>
    )
}