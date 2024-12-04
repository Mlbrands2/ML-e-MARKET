import { AlignJustify, Bell, Sun, User } from 'lucide-react';  
import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed flex top-0 left-56 right-0 items-center justify-between h-20 bg-gradient-to-r from-slate-700 to-slate-500 text-white px-6 shadow-lg z-10">
      {/* Left Icon */}
      <button className="text-slate-400 hover:text-yellow-500 transition duration-300">
        <AlignJustify size={20} />
      </button>

      {/* Right Icons */}
      <div className="flex space-x-6">
        <button className="text-slate-400 hover:text-yellow-500 transition duration-300">
          <Sun size={20} className='text-green-600'/>
        </button>
        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-bg-slat-600 bg-transparent rounded-lg ">
      <Bell size={20} className='text-green-600' />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-0 end-6 dark:border-gray-900">20</div>
      </button>
        <button className="text-slate-400 hover:text-yellow-500 transition duration-300">
          <User size={20} />
        </button>
      </div>
    </div>
  );
}
