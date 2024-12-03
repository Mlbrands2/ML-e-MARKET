import { AlignJustify, Bell, Sun, User } from 'lucide-react';  
import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed flex top-0 left-56 right-0 items-center justify-between h-16 bg-gradient-to-r from-slate-700 to-slate-500 text-white px-6 shadow-lg z-10">
      {/* Left Icon */}
      <button className="text-slate-400 hover:text-yellow-500 transition duration-300">
        <AlignJustify size={20} />
      </button>

      {/* Right Icons */}
      <div className="flex space-x-6">
        <button className="text-slate-400 hover:text-yellow-500 transition duration-300">
          <Sun size={24} />
        </button>
        <button className="text-slate-400 hover:text-yellow-500 transition duration-300">
          <Bell size={24} />
        </button>
        <button className="text-slate-400 hover:text-yellow-500 transition duration-300">
          <User size={24} />
        </button>
      </div>
    </div>
  );
}
