import React from 'react';

export default function SmallCard({ data }) {
  const { title, number, iconBg, icon: Icon } = data;

  return (
    <div className="rounded-lg shadow-lg bg-slate-50 dark:bg-slate-600 p-4">
      <div className="flex space-x-4 items-center">
        {/* Icon container */}
        <div
          className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center`}
        >
          <Icon className="dark:text-slate-50 text-slate-900 w-6 h-6" /> {/* Ensuring the icon fits well */}
        </div>
        {/* Text container */}
        <div className="dark:text-slate-50 text-slate-900">
          <p className="text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
}
