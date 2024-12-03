import { AlignJustify, Bell, Sun } from 'lucide-react';
import React from 'react';

export default function Navbar(){
  return (
    <div className='flex items-center justify-between bg-slate-800 text-slate-50'>
      {/* icon */}
      <button>
          <AlignJustify />
        </button>
      {/* 3 icon */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <user-round />
        </button>
      </div>
    </div>
  );
};
