import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <p>No data available for the chart</p>;
  }

  const chartData = {
    labels: data.map(item => item.category),
    datasets: [
      {
        data: data.map(item => item.amount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  return <Pie data={chartData} />;
};

export default PieChart;
