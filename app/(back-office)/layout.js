import React from 'react';
import Sidebar from '@/components/backstore/Sidebar';
import Navbar from '@/components/backstore/Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow lg:ml-64 bg-slate-100 dark:bg-slate-900 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="mt-16 p-8 text-slate-800 dark:text-slate-200">
          {children}
        </main>
      </div>
    </div>
  );
}
