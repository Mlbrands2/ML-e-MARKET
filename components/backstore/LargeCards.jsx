import React from 'react';
import LargeCard from './LargeCard';
import { title } from 'process';
export default function LargeCards(){
  const orderStats = [
    {
      period:"Today Orders",
      sales:110000,
      color:"bg-cyan-600"
    }, {
      period:"yesterday Orders",
      sales:110000,
      color:"bg-purple-600"
    }, {
      period:"This Month",
      sales:300000,
      color:"bg-orange-600"
    }, {
      period:"All-Time Sales",
      sales:500000,
      color:"bg-slate-600"
    },

  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
    {
      orderStats.map((item,i)=>{
        return(<LargeCard className="bg-cyan-600" data={item} key={i}/>)
      })
    }
    </div>
  ); 
};
