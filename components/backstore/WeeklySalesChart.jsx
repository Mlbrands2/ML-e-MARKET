import { type } from 'os';
import { title } from 'process';
import React from 'react';
"use client"
import React, {useState} from 'react';
export default function WeeklySalesChart(){
  const tabs=[
    {
      title:"Sales"
      type:'sales'
    },
    {
      title:"Orders"
      type:'orders'
    }
  ]
  const [chartToDisplay,setChatToDisplay]=useState('sales')
  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>Best Selling Charts</h2>
    <div className="p-4">
      {/* tabs */}
     

<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
       tabs.map((tab,i)=>{
        return()
       })
        <li className="me-2">
            <button  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Sales</button>
        </li>
        <li className="me-2">
            <button className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Orders</button>
        </li>
    </ul>
</div>
 
      {/* contet to display */}

    </div>
    </div>
  );
};
