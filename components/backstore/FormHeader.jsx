import React from 'react';
import { X } from "lucide-react";
export default function FormHeader({title}){
  return (
    <div className="flex items-center justify-between py-6 px-12 dark:text-slate-50 text-slate-800 bg-slate-300 shadow dark:bg-slate-600 rounded-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="text-white hover:text-lime">
          <X className="w-6 h-6" />
        </button>
      </div>
  );
};
