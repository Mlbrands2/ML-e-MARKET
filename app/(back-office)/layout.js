import React from 'react';
import Sidebar from '@/components/backstore/Sidebar';
import Navbar from '@/components/backstore/Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar/>
      
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar/>
        
        {/* Main Content */}
        <main className="p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
