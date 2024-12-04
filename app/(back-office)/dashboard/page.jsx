import React from 'react';
import Heading from '@/components/backstore/Heading';
import LargeCards from '@/components/backstore/LargeCards';
import SmallCards from '@/components/backstore/SmallCards';
import DashboardCharts from '@/components/backstore/DashboardCharts';
import CustomDataTable from '@/components/backstore/CustomDataTable';

export default function Page(){
  return (
    <div>
     <Heading title='Dashboard Overview'/>
    {/* large cards*/}
    <LargeCards/>
    {/* small cards*/}
    <SmallCards />
    {/* charts */}
    <DashboardCharts/>
    {/* recent order table*/}
    <CustomDataTable/>
    </div>
  );
};
