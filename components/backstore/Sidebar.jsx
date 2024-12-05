import React from 'react';

export default function Sidebar() {
  return (
    <div className="bg-slate-300 dark:bg-gray-900 space-y-6 w-52 h-screen p-4">
      <div className="text-center text-xl font-bold text-bg-slate-800 dark:text-bg-slate-50">Logo</div>
      <nav className="space-y-3 text-bg-slate-800 dark:text-bg-slate-50">
        <a href="#" className="block text-sm hover:text-slate-300">Dashboard</a>
        <a href="#" className="block text-sm hover:text-slate-300">Catalogue</a>
        <a href="#" className="block text-sm hover:text-slate-300">Customers</a>
        <a href="#" className="block text-sm hover:text-slate-300">Markets</a>
        <a href="#" className="block text-sm hover:text-slate-300">Farmers</a>
        <a href="#" className="block text-sm hover:text-slate-300">Orders</a>
        <a href="#" className="block text-sm hover:text-slate-300">Staff</a>
        <a href="#" className="block text-sm hover:text-slate-300">Settings</a>
        <a href="#" className="block text-sm hover:text-slate-300">Online Stores</a>
      </nav>
    </div>
  );
}
