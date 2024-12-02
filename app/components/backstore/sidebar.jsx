import link from "next/link";
import React from 'react';

export default function sidebar(){
  return (
    <div className='bg-slate-800 space-y-6 w-52'>
      <link href='#'>logo</link>
      <div className='space-y-3'>
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
