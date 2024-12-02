import link from "next/link";
import React from 'react';

export default function sidebar(){
  return (
    <div className='bg-slate-800'>
      <link href='#'>logo</link>
      <div className=''>
      <link href='#'>dashboard</link>
      <link href='#'>catalogue</link>
      <link href='#'>customers</link>
      <link href='#'>markets</link>
      <link href='#'>farmers</link>
      <link href='#'>orders</link>
      <link href='#'>staff</link>
      <link href='#'>settings</link>
      <link href='#'>online stores</link>  

      </div>
    </div>
  );
};
