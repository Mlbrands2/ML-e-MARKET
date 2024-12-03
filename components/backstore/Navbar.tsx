import { AlignJustify, Bell, Sun, User } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-slate-700 to-slate-500 text-white p-4 shadow-lg z-10'>
      {/* Icon */}
      <button className="text-white hover:text-yellow-500 transition duration-300">
        <AlignJustify size={18} />
      </button>
      
      {/* Right icons */}
      <div className="flex space-x-6">
        <button className="text-white hover:text-yellow-500 transition duration-300">
          <Sun size={20} />
        </button>
        <button className="text-white hover:text-yellow-500 transition duration-300">
          <Bell size={20} />
        </button>
        <button className="text-white hover:text-yellow-500 transition duration-300">
          <User size={20} />
        </button>
      </div>
    </div>
  );
}
