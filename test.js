const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const ChartJS = require('chart.js');



const width = 800;
const height = 600;
const chartCallback = (ChartJS) => {
    // Global ChartJS settings
    ChartJS.defaults.global.responsive = true;
    ChartJS.defaults.global.maintainAspectRatio = false;
    
};
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

const data = [1, 2, 3, 4, 5];

const loopWithProgress = async () => {
  const labels = [];
  const chartData = [];
  for (let i = 0; i < data.length; i++) {
    labels.push(i);
    chartData.push(data[i]);
    console.log(i);
    const imageBuffer = await chartJSNodeCanvas.renderToBuffer({
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Progress',
            data: chartData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    console.log(`Chart for iteration ${i}: ${imageBuffer}`);
  }
};

loopWithProgress();
