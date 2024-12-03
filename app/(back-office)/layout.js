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
        <main className="flex-1 mt-16 p-6 bg-gradient-to-r from-gray-100 to-gray-200 overflow-auto">
          <div className="text-lg text-gray-800">
            {children || "This is the main content area. Add your content here!"}
          </div>
        </main>
      </div>
    </div>
  );
}
