import React from 'react';
import Sidebar from '@/components/backstore/Sidebar';
import Navbar from '@/components/backstore/Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex gap-4 flex-col md:flex-row h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="p-8 bg-slate-400 text-white overflow-auto rounded-lg shadow-2xl min-h-screen mt-16 md:mt-20">
          {children}
        </main>
      </div>
    </div>
  );
}
