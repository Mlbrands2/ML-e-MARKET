import React from 'react';

export default function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-slate-700 to-slate-500 space-y-6 w-60 h-screen p-6 shadow-xl fixed left-0 top-0 z-10">
      <div className="text-center text-2xl font-bold text-white">
        <span className="text-yellow-400">Logo</span>
      </div>
      <nav className="space-y-3 text-white">
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Dashboard</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Catalogue</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Customers</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Markets</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Farmers</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Orders</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Staff</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Settings</a>
        <a href="#" className="block text-sm py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-yellow-300 transition-all duration-300">Online Stores</a>
      </nav>
    </div>
  );
}
