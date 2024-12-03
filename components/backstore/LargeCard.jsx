import { Layers } from 'lucide-react';
import React from 'react';


export default function LargeCard({ data }) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${data.color}`}>
      {/* Icon and Title Section */}
      <div className="flex items-center space-x-3 mb-4">
        <Layers size={20} className="text-yellow-400" />
        <h4 className="text-lg font-semibold">{data.period}</h4>
      </div>

      {/* Amount Section */}
      <div className="flex justify-start items-center space-x-1">
        <h2 className="lg:text-3xl text-2xl font-bold">Tzs.{data.sales}</h2>
      </div>
    </div>
  );
}
  