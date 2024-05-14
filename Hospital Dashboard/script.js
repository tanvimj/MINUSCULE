const xValues = ['Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [40,45,51,63,56,39,29,42,63,97],
      borderColor: "#ff751a",
      fill: false
    }, { 
      data: [50,60,70,75,62,48,56,81,89,76],
      borderColor: "#00b3b3",
      fill: false
    }, { 
      data: [70,80,58,50,69,76,85,92,81,97],
      borderColor: "#ff3300",
      fill: false
    }]
  },
  options: {
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false // hide the legend
      }
    }
  }
});
