import React from 'react'; 
import Sidebar from '@/components/backstore/Sidebar';
import Navbar from '@/components/backstore/Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="mt-16 ml-4 p-8 bg-slate-900 text-slate-500 overflow-auto min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
