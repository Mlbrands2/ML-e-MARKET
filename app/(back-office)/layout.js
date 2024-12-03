import React from 'react';
import Sidebar from '@/components/backstore/Sidebar'; // Or use relative path if necessary
import Navbar from '@/components/backstore/Navbar'; // Make sure Navbar is also correctly imported

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="w-full">
        {/* Navbar */}
        <Navbar />
        
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
