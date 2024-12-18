"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
"chart.js"
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function BestSellingProductsCharts(){
   const data = {
    labels: ['Cows', 'Goats', 'Sheeps', 'Hens'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 45, 20, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
                  ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
                  ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className='bg-slate-300 dark:bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold mb-4 dark:text-slate-50 text-slate-900'>Best Selling Charts</h2>
    {/*  chart  */}
    <Pie data={data}/>
    </div>
  );
};
